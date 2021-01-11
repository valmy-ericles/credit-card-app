import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import DropDownPicker from 'react-native-dropdown-picker';

import { AntDesign } from '@expo/vector-icons';

import {
  ActionsContainer,
  AddButton,
  Container,
  InvoiceScroll
} from './styles';

import CardInvoice2 from '../../components/CardInvoice2';
import Background from '../../components/Background';

import { Actions } from '../../store/modules/invoices/actions';

const Invoices = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(Actions.loadInvoicesResquest())
    }, [])
  );
  
  const invoices = useSelector(state => state.invoices)

  function filter(filterKind) {
    dispatch(Actions.filterInvoicesResquest(filterKind))
  }

  return (
    <Background loading={invoices.loading}>
      <Container>
        <ActionsContainer>
            <DropDownPicker
              items={[
                  {label: 'Pagas', value: 'paid'},
                  {label: 'Não pagas', value: 'notPaid'},
                  {label: 'Todas', value: 'all'},
              ]}
              defaultIndex={0}
              containerStyle={{height: 50, width: 300 }}
              
              placeholder="Filtrar por estado"
              placeholderStyle={{
                fontSize: 18,
                color: '#D8D8D8'
              }}

              style={{
                backgroundColor: 'rgba(219, 230, 234, 0.33)',
                borderWidth: 0,
                borderRadius: 4,
              }}

              labelStyle={{fontSize: 15, color: '#fff'}}
              dropDownStyle={{backgroundColor: 'rgba(125, 73, 150, 0.99)', borderWidth: 0 }}

              onChangeItem={item => filter(item.value)}
            />

          <AddButton onPress={() => navigation.navigate('NewInvoice')}>
            <AntDesign name="plus" size={24} color="#fff" />
          </AddButton>

        </ActionsContainer>
        <InvoiceScroll>
          {
            invoices.filteredInvoices.map(({ cardName, dueDate, totalValue, paid }, index) => {
              return (
                <CardInvoice2
                  navigation={navigation}
                  key={index} 
                  cardName={cardName} 
                  totalValue={totalValue} 
                  dueDate={dueDate} 
                  paid={paid}
                />
              )
            })
          }
        </InvoiceScroll>
      </Container>     
    </Background>
  )
}

export default Invoices;