import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const src = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#3D3F40" />
      <Routes signed={false} />
    </NavigationContainer>
  )
}

export default src;