import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  padding: 10px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 15px;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const TotalDebitsBody = styled.View`
  align-items: center;
  margin-top: 25px;
`;

export const TotalDebitsText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const TotalDebitsValue = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #56E040;
`;


export const InvoicesResume = styled.View`
  margin-top: 25px;
`;

export const InvoicesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const RecentInvoices = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const RecentInvoicesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;