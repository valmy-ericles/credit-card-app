import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Loading } from './styles';

const Background = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <Loading>
          <ActivityIndicator size="large" color="#fff"/>
        </Loading>
      ) : (
        children
      )}
    </Container>
  )
}

export default Background;
