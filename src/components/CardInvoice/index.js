import React from 'react';
import { Container, Details, Paid, PaidText, CardName, DueDateTitle, DueDate, BodyValue, TotalValue } from './styles';
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

        <AntDesign name="arrowright" size={24} color={'#5C30B8'} />
      </>
    </Container>    
  )
}