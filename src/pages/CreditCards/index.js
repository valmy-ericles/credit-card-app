import React from 'react';

import Background from '../../components/Background';
import { AntDesign } from '@expo/vector-icons';

import CreditCard from '../../components/CreditCard';

import { Container, AddButton, CreditCardScroll, ActionsContainer } from './styles';

const creditCards = [
  { name: 'Nubank' },
  { name: 'Itaú' },
  { name: 'Bradesco' },
  { name: 'Next' },
  { name: 'Banco do Brasil' },
]

const CreditCards = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <ActionsContainer>
          <AddButton onPress={() => navigation.navigate('NewCreditCard')}>
            <AntDesign name="plus" size={24} color="#fff" />
          </AddButton>
        </ActionsContainer>

        <CreditCardScroll>
          {
            creditCards.map(({ name }, index) => {
              return (
                <CreditCard
                  navigation={navigation}
                  key={index} 
                  name={name} 
                />
              )
            })
          }
        </CreditCardScroll>
      </Container>
    </Background>
  )
}

export default CreditCards;