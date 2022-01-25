import {RouteProp} from '@react-navigation/native';
import {PhotoProps} from './photo.type';

type PhotoScreenRouteProp = RouteProp<RootStackParamList, 'Photo'>;

type RootStackParamList = {
  Home: undefined;
  Photo: {photo: PhotoProps};
};

export type {PhotoScreenRouteProp, RootStackParamList};
