import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { ConfirmDialog } from 'react-native-simple-dialogs';
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
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [creditCardIdToDelete, setCreditCardIdToDelete] = useState(null)

  const creditCards = useSelector(state => state.creditCards)

  const deleteCreditCard = (creditCardId) => {
    setCreditCardIdToDelete(creditCardId)
    setShowDeleteConfirm(true)
  }

  function sendRequestToDelete() {
    dispatch(Actions.deleteCreditCardRequest(creditCardIdToDelete))
    setShowDeleteConfirm(false)
  }

  return (
    <Background loading={creditCards.loading}>
      <Container>
        <ActionsContainer>
          <AddButton onPress={() => navigation.navigate('NewCreditCard')}>
            <AntDesign name="plus" size={24} color="#fff" />
          </AddButton>
        </ActionsContainer>

        <ConfirmDialog
          title="Deseja apagar esse cartão ?"
          titleStyle={{ color: '#615E86', fontWeight: 'bold' }}
          message="esta ação não poderá ser revertida"
          animationType="fade"
          messageStyle={{ fontSize: 15 }}
          visible={showDeleteConfirm}
          onTouchOutside={() => setShowDeleteConfirm(false)}
          positiveButton={{
              title: "SIM",
              onPress: () => sendRequestToDelete()
          }}
          negativeButton={{
              title: "NÃO",
              onPress: () => setShowDeleteConfirm(false)
          }}
        />

        <CreditCardScroll>
          {
            creditCards.creditCards.map(({ id, name }, index) => {
              return (
                <CreditCard
                  id={id}
                  navigation={navigation}
                  key={index} 
                  name={name} 
                  deleteCreditCard={deleteCreditCard}
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