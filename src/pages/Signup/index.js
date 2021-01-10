import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import { StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignupLink,
  SignupLinkText
} from './styles';

import Background from '../../components/Background';

import { Actions } from '../../store/modules/auth/actions';

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const passwordRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const auth = useSelector(state => state.auth);

  function handleSubmit() {
    const hasEmpty = [name, email, cpf, phone, password].some(item => item.length === 0)

    if(hasEmpty) {
      Toast.show({
        type: 'error',
        text1: 'Verifique as informaçõs',
        text2: 'preencha todos os campos',
        topOffset: 60
      })
      return
    }

    dispatch(Actions.signUpRequest(name, email, cpf, phone, password))
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
            value={name}
            onChangeText={value => setName(value)}
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
            value={email}
            onChangeText={value => setEmail(value)}
            onSubmitEditing={() => cpfRef.current._inputElement.focus()}
          />

          <View style={styles.containerInput}>
            <MaterialCommunityIcons name={'file-document-outline'} size={25} color="#E0E0E0" />
            <TextInputMask
              type={'cpf'}
              style={styles.input}
              placeholder="Digite seu CPF"
              autoCapitalize="none"
              placeholderTextColor='#E7E7E7'
              returnKeyType="next"
              ref={cpfRef}
              value={cpf}
              onChangeText={value => setCPF(value)}
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
              style={styles.input}
              placeholder="Digite seu celular"
              autoCapitalize="none"
              placeholderTextColor='#E7E7E7'
              returnKeyType="next"
              ref={phoneRef}
              value={phone}
              onChangeText={value => setPhone(value)}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
          </View>

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            ref={passwordRef}
            value={password}
            onChangeText={value => setPassword(value)}
            onSubmitEditing={handleSubmit}
          />
          
          <SubmitButton loading={auth.loading} onPress={handleSubmit}>
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