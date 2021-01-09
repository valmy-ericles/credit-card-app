import React from 'react';
import { ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Container, Body, Text } from './styles';

const Button = ({ children, loading, icon, ...rest }) => {
  return (
    <Container {...rest} underlayColor="transparent">
      {loading ?
        <ActivityIndicator size="small" color="#fff"/>
        :
        <Body>
          <MaterialCommunityIcons name={icon} size={24} color="#fff" />
          <Text>{children}</Text>
        </Body>
      }
    </Container>
  )
}

export default Button;
