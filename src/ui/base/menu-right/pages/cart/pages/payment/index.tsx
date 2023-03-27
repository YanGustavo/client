import Button from "components/Button";
import React from 'react';
import styled from 'styled-components';
import {Container, ContainerFlush, ButtonsAlign,} from "ui/base/menu-right/styles";
import CheckoutWizard from "components/CheckoutWizard";


type PaymentPageProps = {
  actions:any;
};

const PaymentPage: React.FC<PaymentPageProps> = ({actions}) => {
  const [paymentMethod, setPaymentMethod] = React.useState('PayPal');

  return (
    <>
    <CheckoutWizard activeStep={2}/>
    <Container>
      <Body>
      <ContainerFlush> 
      
      <Title>Metodo de Pagamento</Title>
      <RadioContainer>
        <InputContainer>
          <RadioInput
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            checked={paymentMethod === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Label htmlFor="paypal">PayPal</Label>
        </InputContainer>
        <InputContainer>
          <RadioInput
            type="radio"
            id="stripe"
            name="paymentMethod"
            value="Stripe"
            checked={paymentMethod === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Label htmlFor="stripe">Stripe</Label>
        </InputContainer>
      </RadioContainer>
      <ButtonsAlign>
    <Button size="small" onClick={() => actions.setCartShippingPage()}>Voltar</Button>
    <Button size="small" onClick={() => actions.setCartPlaceOrderPage()}>Finalizar Compra</Button>
    </ButtonsAlign> 
    </ContainerFlush> 
      </Body>
    </Container>
    </>
  );
};

const Body = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  font-size: 16px;
`;

export default PaymentPage;

