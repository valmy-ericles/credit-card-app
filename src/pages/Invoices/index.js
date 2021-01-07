import React, { useState } from 'react';

import DropDownPicker from "react-native-custom-dropdown";

import Background from '../../components/Background';
import { AntDesign } from '@expo/vector-icons';

import { Container, InvoiceScroll } from './styles';
import CardInvoice2 from '../../components/CardInvoice2';

import ModalNewInvoice from '../NewInvoice';

import { ActionsContainer, AddButton } from './styles';

const Invoices = ({ navigation }) => {
  const [kindInvoice, setKindInvoice] = useState('payed')
  const [modalVisible, setModalVisible] = useState(false);
  
  const hideModal = () => {
    setModalVisible(false)
  }

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
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 paid cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 paid cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 paid cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
          <CardInvoice2 cardName="Nubank" totalValue={'86,50'} dueDate={'25/01/2021'} />
        </InvoiceScroll>
      </Container>     
    </Background>
  )
}

export default Invoices;