import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';

import App from './App';

const src = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#615E86" />
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default src;