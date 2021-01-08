import React, { useRef, useState } from 'react';

import {
  StyleSheet,
  View
} from "react-native";

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import Background from '../../components/Background';

import { Container, Form, SubmitButton, FormInput } from './styles';
import { TextInputMask } from 'react-native-masked-text'

const EditInvoice = ({ navigation, modalVisible, hideModal }) => {
  const passwordRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();

  const [dueDate, setDueDate] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [cv, setCV] = useState('');

  function handleSubmit() {

  }

  return (
    <Background>
        <Container>
          <Form>
            <FormInput
              icon="pencil"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
            />

            <View style={styles.containerInput}>
              <MaterialIcons name={'credit-card'} size={25} color="#E0E0E0" />
              <TextInputMask
                type={'credit-card'}
                options={{
                  issuer: 'visa-or-mastercard'
                }}
                value={creditCard}
                style={styles.input}
                placeholder="Número"
                maxLength={14}
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                onChangeText={text => setCreditCard(text)}
                ref={phoneRef}
                onSubmitEditing={() => passwordRef.current.focus()}
              />
            </View>
            
            <View style={styles.containerInput}>
              <AntDesign name="calendar" size={25} color="#E0E0E0" />
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={dueDate}
                style={styles.input}
                placeholder="Validade"
                autoCapitalize="none"
                placeholderTextColor='#E7E7E7'
                returnKeyType="next"
                onChangeText={text => setDueDate(text)}
                ref={cpfRef}
                onSubmitEditing={() => phoneRef.current._inputElement.focus()}
              />
            </View>

            <FormInput
              icon="information-outline"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="CV"
              returnKeyType="next"
              value={cv}
              maxLength={4}
              keyboardType="numeric"
              onChangeText={text => setCV(text)}
            />

            <SubmitButton onPress={handleSubmit}>
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