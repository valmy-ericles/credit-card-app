import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Invoices from '../pages/Invoices';
import NewInvoice from '../pages/NewInvoice';
import EditInvoice from '../pages/EdtiInvoice';

const InvoiceStack = () => {
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
      initialRouteName="Invoices"
    >
      <Stack.Screen options={{ title: 'Faturas' }} name="Invoices" component={Invoices} />
      <Stack.Screen options={{ title: 'Nova Fatura' }} name="NewInvoice" component={NewInvoice} />
      <Stack.Screen options={{ title: 'Editar Fatura' }} name="EditInvoice" component={EditInvoice} />
    </Stack.Navigator>
  )
}

export default InvoiceStack;