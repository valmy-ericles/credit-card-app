import React, { useRef } from 'react';

import Background from '../../components/Background';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Form, FormInput, SubmitButton, SignupLink, SignupLinkText } from './styles';

const Signin = ({ navigation }) => {
  const passwordRef = useRef();

  function handleSubmit() {

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
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>

        <SignupLink>
          <SignupLinkText>
            Não tenho conta
          </SignupLinkText>
        </SignupLink>
      </Container>     
    </Background>
  )
}

export default Signin;