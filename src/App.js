import React from 'react';
import { useSelector } from 'react-redux';

import Routes from './Navigation';

const App = () => {
  const { signed } = useSelector(state => state.auth)

  return <Routes signed={signed} />
}

export default App;