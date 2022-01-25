import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const ImageWidth = width * 0.45;

const ImageHeight = height * 0.34;

export const Photo = styled.Image`
  width: ${ImageWidth}px;
  height: ${ImageHeight}px;
  border-radius: 8px;
  margin: 8px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
