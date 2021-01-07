import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
`;


export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  margin-bottom: 60px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin: 15px 0;
`;

export const SignupLinkText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const ButtonActions = styled.View`
  align-self: stretch;
  bottom: 0;
`;

export const LogoutButton = styled(Button)`
  margin: 7px 0;
  background: #56E040;
`;

export const DeleteAccoutnButton = styled(Button)`
  margin: 7px 0;
  background: #E15858;
`;
