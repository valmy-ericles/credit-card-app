import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Background from '../../components/Background';

import { Container, Form, FormInput, SubmitButton, SignupLink, SignupLinkText } from './styles';
import { TextInputMask } from 'react-native-masked-text'

const Signup = ({ navigation }) => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();

  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit() {

  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="account-outline"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="email-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => cpfRef.current._inputElement.focus()}
          />

          <View style={styles.containerInput}>
            <MaterialCommunityIcons name={'file-document-outline'} size={25} color="#E0E0E0" />
            <TextInputMask
              type={'cpf'}
              value={cpf}
              style={styles.input}
              placeholder="Digite seu CPF"
              autoCapitalize="none"
              placeholderTextColor='#E7E7E7'
              returnKeyType="next"
              onChangeText={text => setCPF(text)}
              ref={cpfRef}
              onSubmitEditing={() => phoneRef.current._inputElement.focus()}
            />
          </View>

          <View style={styles.containerInput}>
            <MaterialCommunityIcons name={'cellphone'} size={25} color="#E0E0E0" />
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={phone}
              style={styles.input}
              placeholder="Digite seu celular"
              autoCapitalize="none"
              placeholderTextColor='#E7E7E7'
              returnKeyType="next"
              onChangeText={text => setPhone(text)}
              ref={phoneRef}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
          </View>

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
          />
          
          <SubmitButton onPress={handleSubmit}>
            Finalizar
          </SubmitButton>
        </Form>

        <SignupLink onPress={() => navigation.navigate('Signin')}>
          <SignupLinkText>
            Já tenho conta
          </SignupLinkText>
        </SignupLink>
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
  }
});
export default Signup;