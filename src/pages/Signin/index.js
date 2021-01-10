import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import Background from '../../components/Background';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignupLink,
  SignupLinkText 
} from './styles';

import { Actions } from '../../store/modules/auth/actions';

const Signin = ({ navigation }) => {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth)

  function handleSubmit() {
    if(email.length === 0 || password.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Verifique as informaçõs',
        text2: 'preencha todos os campos',
        topOffset: 60
      })
      return
    }

    dispatch(Actions.loginRequest(email, password))
  }

  return (
    <Background>
      <Container>
        <MaterialIcons name="attach-money" size={80} color="#47CF65" />
        <Form>
          <FormInput
            icon="email-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            returnKeyType="next"
            onChangeText={text => setEmail(text)}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onChangeText={text => setPassword(text)}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>

        <SignupLink onPress={() => navigation.navigate('Signup')}>
          <SignupLinkText>
            Não tenho conta
          </SignupLinkText>
        </SignupLink>
      </Container>     
    </Background>
  )
}

export default Signin;