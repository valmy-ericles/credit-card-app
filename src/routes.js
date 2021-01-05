import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default ({ signed = false }) => {

  if(signed) {
    return (
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3D3F40'
          },
          headerTintColor: '#fff'
        }}
      >
        <Tab.Screen name="Cards" component={Signin} />
        <Tab.Screen name="Invoices" component={Signup} />
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#615E86',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}