import React, { useEffect, useRef, useState, useCallback } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { TextInputMask } from 'react-native-masked-text'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ButtonActions,
  LogoutButton,
  DeleteAccoutnButton,
  PasswordInputs,
  ProfileSeparator
} from './styles';

import Background from '../../components/Background';

import { Actions as AuthActions } from '../../store/modules/auth/actions';
import { Actions as ProfileActions } from '../../store/modules/profile/actions';

const Signup = ({ navigation }) => {

  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(ProfileActions.loadProfileRequest())
    }, [])
  );

  const emailRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();
  
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmationRef = useRef();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const auth = useSelector(state => state.auth)
  const profile = useSelector(state => state.profile)

  useEffect(() => {
    setCurrentPassword('')
    setNewPassword('')
    setNewPasswordConfirmation('')
  }, [profile.updating]);

  function handleSubmit() {
    dispatch(ProfileActions.updateProfileRequest(
      profile.userName,
      profile.userEmail,
      profile.userCPF,
      profile.userPhone,
      currentPassword
    ))
  }

  function handleOnChangeText(input, value) {
    dispatch(ProfileActions.handleOnChangeText(input, value))
  }
  
  function logout() {
    dispatch(AuthActions.logoutRequest())
  }

  function deleteAccount() {
    dispatch(AuthActions.deleteAccountRequest())
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="account-outline"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="next"
            value={profile.userName}
            onChangeText={value => handleOnChangeText('userName', value)}
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
            value={profile.userEmail}
            onChangeText={value => handleOnChangeText('userEmail', value)}
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
              value={profile.userCPF}
              onChangeText={value => handleOnChangeText('userCPF', value)}
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
              value={profile.userPhone}
              onChangeText={value => handleOnChangeText('userPhone', value)}
              onSubmitEditing={() => currentPasswordRef.current.focus()}
            />
          </View>
          
          <ProfileSeparator/>
        
          <PasswordInputs>
            <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Senha atual"
                returnKeyType="next"
                ref={currentPasswordRef}
                value={currentPassword}
                onChangeText={value => setCurrentPassword(value)}
                onSubmitEditing={() => newPasswordRef.current.focus()}
              />

              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Nova senha"
                returnKeyType="next"
                ref={newPasswordRef}
                value={newPassword}
                onChangeText={value => setNewPassword(value)}
                onSubmitEditing={() => newPasswordConfirmationRef.current.focus()}
              />

              <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Confirmar nova senha"
                returnKeyType="send"
                ref={newPasswordConfirmationRef}
                value={newPasswordConfirmation}
                onChangeText={value => setNewPasswordConfirmation(value)}
                onSubmitEditing={handleSubmit}
              />
          </PasswordInputs>

          <SubmitButton loading={profile.updating} onPress={handleSubmit}>
            Salvar
          </SubmitButton>
        </Form>
      
        <ButtonActions>
          <LogoutButton icon="logout" loading={auth.loadingLogout} onPress={logout}>
            Sair
          </LogoutButton>

          <DeleteAccoutnButton icon="delete-outline" loading={auth.deletingAccount} onPress={deleteAccount}>
            Deletar conta
          </DeleteAccoutnButton>
        </ButtonActions>
        
      </Container>     
    </Background>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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