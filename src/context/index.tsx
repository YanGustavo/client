import React from 'react';
import { BaseContextProvider } from './base-context';
// import { UserContextProvider } from './user-context';
import { ProductContextProvider } from './product-context';
//import { OrderContextProvider } from './order-context';


const ContextApp = ({children}: { children: React.ReactNode }) => {
  return (
    <BaseContextProvider>
    {/* <UserContextProvider> */}
    <ProductContextProvider>
   {/* // <OrderContextProvider> */}
      {children}
   {/* // </OrderContextProvider> */}
    </ProductContextProvider>
    {/* </UserContextProvider> */}
    </BaseContextProvider>
  );
}
export default ContextApp;