import React from 'react';
import {
  Container,
  Details,
  Paid,
  PaidText,
  CardName,
  DueDateTitle,
  DueDate,
  BodyValue,
  Actions,
  CardEditButton,
  CardTrashButton,
  TotalValue } from './styles';

import { AntDesign } from '@expo/vector-icons';

export default CardInvoice = ({ cardName, totalValue, dueDate, paid = false }) => {
  return (
    <Container>
      <>
        <Details>
          <CardName>{cardName}</CardName>
          
          {paid ? 
            (<Paid>
              <AntDesign name="checkcircleo" size={18} color={'#56E040'} />
              <PaidText>pago</PaidText>
            </Paid>) 
            : (<>
                <DueDateTitle>vencimento</DueDateTitle>
                <DueDate>{dueDate}</DueDate>
              </>
              )
          }
        </Details>

        <BodyValue>
          <TotalValue>{'R$ ' + totalValue}</TotalValue>
        </BodyValue>
        
        <Actions>
          <CardEditButton/>
          <CardTrashButton/>
        </Actions>
      </>
    </Container>    
  )
}