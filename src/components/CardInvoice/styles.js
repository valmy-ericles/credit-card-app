import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(200, 206, 239, 0.63);
  border-radius: 7px;
  padding: 10px;
  height: 65px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Details = styled.View`
  min-width: 120px;
`;

export const CardName = styled.Text`
  color: #7D4996;
  font-size: 16px;
  font-weight: bold;
`;

export const DueDateTitle = styled.Text`
  color: #818181;
  font-size: 10px;
`;

export const DueDate = styled.Text`
  font-size: 12px;
  color: #fff; 
`;

export const Paid = styled.View`
  flex-direction: row;
  width: 70px;
  background: #7D4996;
  border-radius: 50px;
  padding: 2px 5px;
  align-items: center;
`;

export const PaidText = styled.Text`
  color: #fff;
  font-size: 13px;
  padding-bottom: 3px;
  margin-left: 3px;
  text-align: center;
`;

export const BodyValue = styled.View`
`;

export const TotalValue = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;
