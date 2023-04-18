import React from 'react';
import { useBaseContext } from 'context/base-context';
import { useCartStore } from 'context/cart-context';
import { createContext, useContext, useState } from 'react';
const CartContext = createContext<CartContextType | null>(null);

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard component'
    );
  }
  return context;
}
  export type CartContextType = {

  }
type CartProviderProps = {
  children: React.ReactNode;
};
export function CartProvider({ children }: CartProviderProps) {

  const { cart } = useCartStore();
 
  const value = {
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* {isModalOpen && (
        <CartToZap
          product={product}
          selectedVariant={selectedVariant}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          Map here
        />
      )} */}
    </CartContext.Provider>
  );
  
}

export default CartContext;