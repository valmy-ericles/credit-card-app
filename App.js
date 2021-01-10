import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import React from 'react';
import App from './src';

export default function () {
  return (
    <>
      <App/>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  )
}