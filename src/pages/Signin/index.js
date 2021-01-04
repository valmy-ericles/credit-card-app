import React from 'react';
import { Text } from 'react-native';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin = () => {
  return (
    <Background>      
      <Input
        icon="account-circle-outline"
        placeholder="Nome completo"
      />

      <Button>
        Acessar
      </Button>
    </Background>
  )
}

export default Signin;