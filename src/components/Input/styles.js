import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View`
  padding: 0 15px;
  background: rgba(219, 230, 234, 0.33);
  height: 50px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#E7E7E7',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
