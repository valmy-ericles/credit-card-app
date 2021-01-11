import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { StyleSheet, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text'

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Form,
  SubmitButton,
  FormInput
} from './styles';

import Background from '../../components/Background';

import { Actions } from '../../store/modules/creditCards/actions';

const EditInvoice = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(Actions.loadCreditCardRequest(1))
    }, [])
  );

  const numberRef = useRef();
  const dueDateRef = useRef();
  const cvRef = useRef();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [cv, setCV] = useState('');

  const reducerState = useSelector(state => state.creditCards)

  useEffect(() => {
    const { name, number, dueDate, cv } = reducerState.creditCard
    setName(name)
    setNumber(number)
    setDueDate(dueDate)
    setCV(cv)
  }, [reducerState.creditCard]);

  function handleSubmit() {
    const hasEmpty = [name, number, dueDate, cv].some(item => item.length === 0)

    if(hasEmpty) {
      Toast.show({
        type: 'error',
        text1: 'Verifique as informaçõs',
        text2: 'preencha todos os campos',
        topOffset: 60
      })
      return
    }

    dispatch(Actions.editCreditCardRequest(name, number, dueDate, cv))
  }

  return (
    <Background loading={reducerState.loadingCreditCard}>
        <Container>
          <Form>
            <FormInput
              icon="pencil"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome"
              returnKeyType="next"
              value={name}
              onChangeText={value => setName(value)}
              onSubmitEditing={() => numberRef.current._inputElement.focus()}
            />

            <View style={styles.containerInput}>
              <MaterialIcons name={'credit-card'} size={25} color="#E0E0E0" />
              <TextInputMask
                type={'credit-card'}
                options={{
                  issuer: 'visa-or-mastercard'
                }}
                style={styles.input}
                placeholder="Número"
                maxLength={14}
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                ref={numberRef}
                value={number}
                onChangeText={value => setNumber(value)}
                onSubmitEditing={() => dueDateRef.current._inputElement.focus()}
              />
            </View>
            
            <View style={styles.containerInput}>
              <AntDesign name="calendar" size={25} color="#E0E0E0" />
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                style={styles.input}
                placeholder="Validade"
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                onChangeText={value => setDueDate(value)}
                ref={dueDateRef}
                value={dueDate}
                onSubmitEditing={() => cvRef.current.focus()}
              />
            </View>

            <FormInput
              icon="information-outline"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="CV"
              returnKeyType="next"
              maxLength={4}
              keyboardType="numeric"
              ref={cvRef}
              value={cv}
              onChangeText={value => setCV(value)}
              onSubmitEditing={handleSubmit}
            />

            <SubmitButton loading={reducerState.editingCreditCard} onPress={handleSubmit}>
              Salvar
            </SubmitButton>
          </Form>
        </Container>     
      </Background>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    paddingTop: 0,
    paddingHorizontal: 15,

    backgroundColor: 'rgba(219, 230, 234, 0.33)',
    height: 50,
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#fff'
  },

  labelSwitch: {
    color: '#fff',
    marginBottom: 5,
  }
});

export default EditInvoice;