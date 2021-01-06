import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(7, 13, 68, 0.22);
  border-radius: 9px;
  padding: 20px;
  margin-top: 10px;
`;

export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const Quantity = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-right: 8px;
`;

export const Body = styled.View`
  margin-top: 15px;
`;

export const BodyTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;

export const TotalValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ colorText }) => colorText === 'blue' ? '#0EC4EC' : '#EC4C4C' }
`;