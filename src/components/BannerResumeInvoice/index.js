import React from 'react';
import { Container, Head, Title, Quantity, Body, BodyTitle, TotalValue } from './styles';

export default BannerInvoice = ({ title, totalValue, quantity, colorText, ...rest }) => {
  return (
    <Container {...rest}>
      <>
        <Head>
          <Title>{title}</Title>
          <Quantity>{quantity}</Quantity>
        </Head>

        <Body>
          <BodyTitle>Total</BodyTitle>
          <TotalValue colorText={colorText}>{totalValue}</TotalValue>
        </Body>
      </>
    </Container>    
  )
}