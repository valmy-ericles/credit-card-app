import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';

import Background from '../../components/Background';

import { Actions } from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ButtonActions,
  LogoutButton,
  DeleteAccoutnButton,
} from './styles';
import { TextInputMask } from 'react-native-masked-text'

const Signup = ({ navigation }) => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();

  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  function handleSubmit() {
    dispatch(Actions.loginFailed('teste'))
  }

  function logout() {
    dispatch(Actions.logoutRequest())
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

        {!isKeyboardVisible &&
          <ButtonActions>
            <LogoutButton loading={loading} onPress={logout}>
              Sair
            </LogoutButton>

            <DeleteAccoutnButton onPress={handleSubmit}>
              Apagar conta
            </DeleteAccoutnButton>
          </ButtonActions>
        }
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