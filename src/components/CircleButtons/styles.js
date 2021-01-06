import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const EditButton = styled(RectButton)`
  padding: 10px;
  height: 50px;
  width: 50px;
  background: #64C542;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const TrashButton = styled(RectButton)`
  padding: 10px;
  height: 50px;
  width: 50px;
  background: #E15858;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;