import React from 'react';
import { TouchableHighlight } from 'react-native';

import Background from '../../components/Background';
import Separator from '../../components/separator';

import BannerInvoice from '../../components/BannerResumeInvoice';
import CardInvoice from '../../components/CardInvoice';

import { 
  Container,
  Header,
  UserName,
  TotalDebitsBody,
  TotalDebitsText,
  TotalDebitsValue,
  InvoicesTitle,
  InvoicesResume,
  RecentInvoices,
  RecentInvoicesTitle
} from './styles';

const Dashboard = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Header>
          <UserName>
            Olá, Valmy
          </UserName>
          <TotalDebitsBody>
            <TotalDebitsText>Débitos totais</TotalDebitsText>
            <TotalDebitsValue>R$ 4945,60</TotalDebitsValue>
          </TotalDebitsBody>
        </Header>

        <Separator/>

        <InvoicesResume>
          <InvoicesTitle>Resumo das Faturas</InvoicesTitle>
          <BannerInvoice title="Pagas" totalValue={"4945,60"} quantity={16} colorText="blue" />
          <BannerInvoice title="Pendentes" totalValue={"346,20"} quantity={2} colorText="red" />
        </InvoicesResume>

        <RecentInvoices>
          <RecentInvoicesTitle>Faturas recentes</RecentInvoicesTitle>
          
          <TouchableHighlight onPress={() => navigation.navigate('Invoices')}>
            <CardInvoice paid={false} cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          </TouchableHighlight>

          <CardInvoice paid cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice paid={false} cardName="Itaú" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice paid cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice paid={false} cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
        </RecentInvoices>
      </Container>
    </Background>
  )
}

export default Dashboard;