import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import CreditCard from '../../components/CreditCard';

import {
  Container,
  AddButton,
  CreditCardScroll,
  ActionsContainer
} from './styles';

import Background from '../../components/Background';

import { Actions } from '../../store/modules/creditCards/actions';

const CreditCards = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(Actions.loadCreditCardsRequest())
    }, [])
  );
  
  const creditCards = useSelector(state => state.creditCards)

  return (
    <Background loading={creditCards.loading}>
      <Container>
        <ActionsContainer>
          <AddButton onPress={() => navigation.navigate('NewCreditCard')}>
            <AntDesign name="plus" size={24} color="#fff" />
          </AddButton>
        </ActionsContainer>

        <CreditCardScroll>
          {
            creditCards.creditCards.map(({ name }, index) => {
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