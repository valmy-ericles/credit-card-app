import React from 'react';

import { Container, Name, Actions, EditButton, TrashButton  } from './styles';

const CreditCard = ({ id, name, navigation, deleteCreditCard }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Actions>
        <EditButton onPress={() => navigation.navigate('EditCreditCard')} />
        <TrashButton onPress={() => deleteCreditCard(id) }/>
      </Actions>
    </Container>
  )
}

export default CreditCard;