import React from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

import Background from '../../components/Background';
import { AntDesign } from '@expo/vector-icons';

import { Container, InvoiceScroll } from './styles';
import CardInvoice2 from '../../components/CardInvoice2';

import { ActionsContainer, AddButton } from './styles';

const invoices = [
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '45,00', paid: true },
  { cardName: 'Next', dueDate: '23/01/2021', totalValue: '45,60', paid: false },
  { cardName: 'Itaú', dueDate: '23/01/2021', totalValue: '63,00', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,60', paid: false},
  { cardName: 'Bradeso', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '865,60', paid: true},
  { cardName: 'Bradesco', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,00', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '45,00', paid: true },
  { cardName: 'Next', dueDate: '23/01/2021', totalValue: '45,60', paid: false },
  { cardName: 'Itaú', dueDate: '23/01/2021', totalValue: '63,00', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,60', paid: false},
  { cardName: 'Bradeso', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '865,60', paid: true},
  { cardName: 'Bradesco', dueDate: '23/01/2021', totalValue: '45,60', paid: false},
  { cardName: 'Nubank', dueDate: '23/01/2021', totalValue: '55,00', paid: false},
]

const Invoices = ({ navigation }) => {

  return (
    <Background>
      <Container>
        <ActionsContainer>
            <DropDownPicker
              items={[
                  {label: 'Pagas', value: 'pagas'},
                  {label: 'Não pagas', value: 'nao-pagas'},
              ]}
              defaultIndex={0}
              containerStyle={{height: 50, width: 300 }}
              
              placeholder="Selecione o cartão"
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

              onChangeItem={item => console.log(item.label, item.value)}
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