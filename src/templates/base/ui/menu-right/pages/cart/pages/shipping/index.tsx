import Button from "components/Button";
import React from 'react';
import styled from 'styled-components';
import {Container, ButtonsAlign,ContainerFlush} from "templates/base/ui/menu-right/styles";
import CheckoutWizard from "@/ui/CheckoutWizard";

type ShippingPageProps = {
  actions:any;
};

const ShippingPage: React.FC<ShippingPageProps> = ({ actions }) => {
  const [fullName, setFullName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [country, setCountry] = React.useState('');

  return (
    <>
    <CheckoutWizard activeStep={1}/>
    <Container>
    <Body>
      <ContainerFlush>        
      <Title>Endereço de Entrega</Title>
      <InputBody>
        <Label>Full Name</Label>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </InputBody>
      <InputBody>
        <Label>Address</Label>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </InputBody>
      <InputBody>
        <Label>City</Label>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </InputBody>
      <InputBody>
        <Label>Postal Code</Label>
        <Input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </InputBody>
      <InputBody>
        <Label>Country</Label>
        <Input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </InputBody>
      <ButtonsAlign>
    <Button size="small" onClick={() => actions.setCartItemsPage()}>Voltar ao Carrinho</Button>
    <Button size="small" onClick={() => actions.setCartPaymentPage()}>Pagamento</Button>
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

const InputBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default ShippingPage;