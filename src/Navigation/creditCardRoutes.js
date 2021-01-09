import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreditCards from '../pages/CreditCards';
import NewCreditCard from '../pages/NewCreditCard';
import EditCreditCard from '../pages/EditCreditCard';

const CreditCardStack = () => {
  const Stack = createStackNavigator();

  return(
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
      <Stack.Screen options={{ title: 'Seus cartões' }} name="CreditCards" component={CreditCards} />
      <Stack.Screen options={{ title: 'Novo cartão' }} name="NewCreditCard" component={NewCreditCard} />
      <Stack.Screen options={{ title: 'Editar cartão' }} name="EditCreditCard" component={EditCreditCard} />
    </Stack.Navigator>
  )
}

export default CreditCardStack;