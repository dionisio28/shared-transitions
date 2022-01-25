import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {PhotoProps} from '../../@types/photo.type';
import {RootStackParamList} from '../../@types/routes.type';
import getPhotos from '../../service/photos';
import {Container, Photo} from './styled';

type PhotoScreenRouteProp = NativeStackNavigationProp<
  RootStackParamList,
  'Photo'
>;

const HomePage: React.FC = (): JSX.Element => {
  const [images, setImages] = useState<PhotoProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setFefreshing] = useState<boolean>(false);

  const navigation = useNavigation<PhotoScreenRouteProp>();
  useEffect(() => {
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImages = useCallback(
    async (_page?: number) => {
      setPage(page + 1);
      const response = await getPhotos(page + 1);
      setImages([...images, ...response]);
    },
    [images, page],
  );

  const refreshList = useCallback(async () => {
    setFefreshing(true);
    setPage(1);
    const response = await getPhotos(1);
    setImages(response);
    setFefreshing(false);
  }, []);

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onRefresh={() => refreshList()}
        refreshing={refreshing}
        onEndReached={() => loadImages()}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => {
          return (
            <SharedElement id={item.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Photo', {
                    photo: item,
                  })
                }>
                <Photo
                  source={{
                    uri: item.urls.regular,
                  }}
                />
              </TouchableOpacity>
            </SharedElement>
          );
        }}
        keyExtractor={item => item.id}
        data={images}
      />
    </Container>
  );
};

export default HomePage;
