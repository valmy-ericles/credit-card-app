import React from 'react';
import { TouchableHighlight } from 'react-native';

import DropDownPicker from "react-native-custom-dropdown";

import Background from '../../components/Background';
import { AntDesign } from '@expo/vector-icons';

import { Container, InvoiceScroll } from './styles';
import CardInvoice2 from '../../components/CardInvoice2';

import { ActionsContainer, AddButton } from './styles';

const invoices = [
  { cardName: 'Nubank', dueDate: '23/01/2021', totalvalue: '45,60', paid: true },
  { cardName: 'Next', dueDate: '23/01/2021', totalvalue: '45,60', paid: false },
  { cardName: 'Itaú', dueDate: '23/01/2021', totalvalue: '63,00', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalvalue: '55,60', paid: false},
  { cardName: 'Bradeso', dueDate: '23/01/2021', totalvalue: '45,60', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalvalue: '865,60', paid: true},
  { cardName: 'Bradesco', dueDate: '23/01/2021', totalvalue: '45,60', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalvalue: '55,00', paid: false},
]

const Invoices = ({ navigation }) => {

  return (
    <Background>
      <Container>
        <ActionsContainer>
          <DropDownPicker
              items={[
                  {label: 'Pagas', value: 'payed' },
                  {label: 'Não pagas', value: 'not_payed' },
              ]}
              defaultValue={'payed'}
              containerStyle={{
                height: 50,
                width: 200
              }}
              style={{
                backgroundColor: 'rgba(7, 13, 68, 0.22)',
                borderWidth: 0
              }}
              itemStyle={{
                  justifyContent: 'flex-end',
                  alignSelf: 'stretch'
              }}
              labelStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff'
              }}
              dropDownStyle={{
                backgroundColor: 'rgba(7, 13, 68, 0.22)',
                borderWidth: 0,
              }}
              onChangeItem={text => setKindInvoice(text)}
          />

          <AddButton onPress={() => navigation.navigate('NewInvoice')}>
            <AntDesign name="plus" size={24} color="#fff" />
          </AddButton>

        </ActionsContainer>
        <InvoiceScroll>
          {
            invoices.map(({ cardName, dueDate, totalValue, paid }, index) => {
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