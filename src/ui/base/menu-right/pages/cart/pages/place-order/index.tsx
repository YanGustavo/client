import React, { Dispatch } from 'react';
import styled from 'styled-components';
import Button from "components/Button";
import OrderWizard from 'components/OrderWizard';
import CheckoutWizard from "components/CheckoutWizard";
import {Container, ButtonsFullAlign,} from "ui/base/menu-right/styles";
// Interface para definir as propriedades dos produtos
interface Product {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

// Interface para definir as propriedades do componente
interface Props {
  status: number;
  products: Product[];
  shipping: number;
  actions: any;
}

// Componente principal
const PlaceOrderCartPage: React.FC<Props> = ({status, products, shipping, actions }) => {
  // Função para calcular o subtotal de cada produto
  const getSubtotal = (product: Product) => {
    return product.quantity * product.price;
  };

  // Função para calcular o total de todos os produtos
  const getTotal = () => {
    const subtotals = products.map(getSubtotal);
    const subtotal = subtotals.reduce((a, b) => a + b, 0);
    return subtotal + shipping;
  };

  return (
    <>    
    <CheckoutWizard activeStep={3}/>
    <Body>      
      <Top><Container><OrderWizard status={status}/></Container></Top>
      <Container>
      <Center>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductQuantity>{product.quantity}</ProductQuantity>
            <ProductSubtotal>{getSubtotal(product)}</ProductSubtotal>
          </ProductItem>
        ))}
      </Center>
      </Container>
      
      <Bottom>
      <Container>
        <TotalProducts>{`Total de produtos: ${products.length}`}</TotalProducts>
        <Shipping>{`Valor do frete: ${shipping}`}</Shipping>
        <Total>{`Total: ${getTotal()}`}</Total>
        </Container>
      </Bottom>
      <ButtonsFullAlign><Button size="large" onClick={() => actions.setOrderPage()}>Faça a Encomenda</Button></ButtonsFullAlign>
      </Body>
    </>
  );
};

// Estilos do componente
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  height: auto;
  background-color: #ccc;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const ProductName = styled.div`
  margin-left: 10px;
`;

const ProductQuantity = styled.div`
  margin-left: auto;
`;

const ProductSubtotal = styled.div`
  margin-left: 10px;
`;

const Bottom = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
`;

const TotalProducts = styled.div`
  margin-left: 10px;
`;

const Shipping = styled.div`
  margin-right: 10px;
`;

const Total = styled.div`
  margin-right: 10px;
`;
export default PlaceOrderCartPage;