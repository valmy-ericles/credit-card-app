import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';

import Routes from './routes';

const src = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#615E86" />
          <Routes signed={true} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default src;