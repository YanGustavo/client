import React from 'react';
import styled from 'styled-components';

interface OrderPageProps {
  orders: Order[];
}

interface Order {
  id: number;
  date: string;
  status: string;
  totalPrice: number;
}

const OrderPage: React.FC<OrderPageProps> = ({ orders }) => {
  return (
    <Container>
      <Title>Order History</Title>
      {orders.map(order => (
        <OrderItem key={order.id}>
          <OrderInfo>
            <OrderNumber>Order #{order.id}</OrderNumber>
            <OrderDate>{order.date}</OrderDate>
            <OrderStatus>{order.status}</OrderStatus>
          </OrderInfo>
          <OrderPrice>${order.totalPrice.toFixed(2)}</OrderPrice>
        </OrderItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const OrderDate = styled.span`
  font-size: 14px;
  margin-top: 5px;
`;

const OrderStatus = styled.span`
  font-size: 14px;
  margin-top: 5px;
`;

const OrderPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export default OrderPage;