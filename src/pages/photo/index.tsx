import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {PhotoScreenRouteProp} from '../../@types/routes.type';

import {Container, Photo} from './styled';

const PhotoScreen: React.FC = (): JSX.Element => {
  const {params} = useRoute<PhotoScreenRouteProp>();

  return (
    <Container>
      <SharedElement id={params.photo.id}>
        <Photo
          source={{
            uri: params.photo.urls.regular,
          }}
        />
      </SharedElement>
    </Container>
  );
};

export default PhotoScreen;
