import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;


export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin: 15px 0;
`;

export const SignupLink = styled.TouchableOpacity`
  
`;

export const SignupLinkText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const ArrowBack = styled.TouchableOpacity`
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
