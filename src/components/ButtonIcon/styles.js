import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableHighlight`
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: stretch;
`;
