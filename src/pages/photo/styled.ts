import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Photo = styled.Image`
  width: ${width}px;
  height: ${height}px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Descripton = styled.Text`
  font-size: 14;
  font-weight: 600;
  padding: 8px;
`;

export const AltDescripton = styled.Text`
  font-size: 13;
  font-weight: 500;
  padding: 8px;
`;
