import React from 'react';
import { BaseContextProvider } from './base-context';
import { UserContextProvider } from './user-context';
import { ProductContextProvider } from './product-context';
import { CartContextProvider } from './cart-context';
import { OrderContextProvider } from './order-context';


const ContextApp = ({children}: { children: React.ReactNode }) => {
  return (
    <BaseContextProvider>
    <UserContextProvider>
    <ProductContextProvider>
    <CartContextProvider>
    <OrderContextProvider>
      {children}
    </OrderContextProvider>
    </CartContextProvider>
    </ProductContextProvider>
    </UserContextProvider>
    </BaseContextProvider>
  );
}
export default ContextApp;