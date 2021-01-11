import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#615E86', 'rgba(125, 73, 150, 0.87)']
})`
  flex: 1
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
`;

