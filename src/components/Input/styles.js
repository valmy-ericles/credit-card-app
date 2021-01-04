import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  background: #fff;
  height: 50px;
  border-radius: 23px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#676161',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #676161;
`;
