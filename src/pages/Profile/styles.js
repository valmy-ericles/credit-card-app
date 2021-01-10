import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';

import Button from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import Separator from '../../components/separator';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  margin-bottom: 20px;
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
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
`;

export const LogoutButton = styled(ButtonIcon)`
  background: transparent;
  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
`;

export const DeleteAccoutnButton = styled(ButtonIcon)`
  background: transparent;
  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
`;

export const PasswordInputs = styled.View`
  margin-top: 30px;
  align-self: stretch;
`;

export const ProfileSeparator = styled(Separator)`
  margin-top: 25px;
`;
