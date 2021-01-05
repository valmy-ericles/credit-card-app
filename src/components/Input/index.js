import React, { forwardRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, TInput } from './styles';

const Input = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      { icon && <MaterialCommunityIcons name={icon} size={25} color="#E0E0E0" />}
      <TInput {...rest} ref={ref}/>
    </Container>
  )
}

export default forwardRef(Input);