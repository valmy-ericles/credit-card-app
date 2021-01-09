import React, { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { RectButton } from 'react-native-gesture-handler';

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

import { Actions } from '../../store/modules/dashboard/actions';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(Actions.loadInvoicesRequest())
    }, [])
  );

  const { 
    totalDebits,
    paidInvoices,
    paidInvoicesQuantity,
    pendingInvoices,
    pendingInvoicesQuantity,
    recentInvoices,
    loading,
    refreshing,
  } = useSelector(state => state.dashboard)

  const onRefresh = useCallback(() => {
    const isRefreshing = true
    dispatch(Actions.loadInvoicesRequest(isRefreshing))
  }, []);

  return (
    <Background>
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header>
          <UserName>
            Olá, Valmy
          </UserName>
          <TotalDebitsBody>
            <TotalDebitsText>Débitos totais</TotalDebitsText>
            <TotalDebitsValue>R$ {totalDebits}</TotalDebitsValue>
          </TotalDebitsBody>
        </Header>

        <Separator/>

        <InvoicesResume>
          <InvoicesTitle>Resumo das Faturas</InvoicesTitle>
          <BannerInvoice title="Pagas" totalValue={paidInvoices} quantity={paidInvoicesQuantity} colorText="blue" />
          <BannerInvoice title="Pendentes" totalValue={pendingInvoices} quantity={pendingInvoicesQuantity} colorText="red" />
        </InvoicesResume>

        <RecentInvoices>
          <RecentInvoicesTitle>Faturas recentes</RecentInvoicesTitle>
          {recentInvoices.map(item => {
            return (
              <RectButton key={item.id} onPress={() => navigation.navigate('EditInvoice')}>
                <CardInvoice paid={item.paid} cardName={item.cardName} totalValue={item.totalValue} dueDate={item.dueDate} />
              </RectButton>
            )
          })}
        </RecentInvoices>
      </Container>
    </Background>
  )
}

export default Dashboard;