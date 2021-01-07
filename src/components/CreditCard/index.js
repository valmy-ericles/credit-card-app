import React from 'react';

import { Container, Name, Actions, EditButton, TrashButton  } from './styles';

const CreditCard = ({ name, navigation }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Actions>
        <EditButton onPress={() => navigation.navigate('EditInvoice')} />
        <TrashButton />
      </Actions>
    </Container>
  )
}

export default CreditCard;