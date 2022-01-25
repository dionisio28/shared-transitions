import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {PhotoProps} from '../../@types/photo.type';
import getPhotos from '../../service/photos';
import {Container, Photo} from './styled';

const HomePage: React.FC = (): JSX.Element => {
  const [images, setImages] = useState<PhotoProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setFefreshing] = useState<boolean>(false);

  useEffect(() => {
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImages = useCallback(
    async (_page?: number) => {
      setFefreshing(true);
      if (_page === 1) {
        setPage(_page);
        setImages(await getPhotos(_page));
        setFefreshing(false);
        return;
      }
      setPage(page + 1);
      const response = await getPhotos(page + 1);
      setImages([...images, ...response]);
      setFefreshing(false);
    },
    [images, page],
  );

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onRefresh={() => loadImages(1)}
        refreshing={refreshing}
        onEndReached={() => loadImages()}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => {
          return (
            <Photo
              source={{
                uri: item.urls.regular,
              }}
            />
          );
        }}
        keyExtractor={item => item.id}
        data={images}
      />
    </Container>
  );
};

export default HomePage;
