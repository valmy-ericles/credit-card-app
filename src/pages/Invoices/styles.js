import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ActionsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddButton = styled(RectButton)`
  padding: 10px;
  height: 50px;
  width: 50px;
  background: #0EC4EC;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const InvoiceScroll = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 4;
`;
