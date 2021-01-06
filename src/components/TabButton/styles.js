import styled from 'styled-components/native';

export const Button = styled.View`
  width: 90px;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  background: ${({ focused }) => focused ? '#7F5992' : '#996AAF'}
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#fff' : '#F0F0F0'};
`;
