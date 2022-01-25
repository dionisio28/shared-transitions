import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {AltDescripton, Container, Descripton, Photo} from './styled';

const PhotoScreen: React.FC = (): JSX.Element => {
  const {params} = useRoute();
  return (
    <Container>
      <SharedElement id={params.photo.id}>
        <Photo
          source={{
            uri: params.photo.urls.regular,
          }}
        />
      </SharedElement>
      {params.photo.description && (
        <Descripton>{params.photo.description}</Descripton>
      )}
      {params.photo.alt_description && (
        <AltDescripton>{params.photo.alt_description}</AltDescripton>
      )}
      <AltDescripton>
        Likes <Descripton>{params.photo.likes}</Descripton>
      </AltDescripton>
    </Container>
  );
};

export default PhotoScreen;
