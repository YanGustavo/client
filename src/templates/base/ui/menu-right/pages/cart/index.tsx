'use client'
import useCartPage from "./hooks/useCartPage";
import { CartProvider } from './CartContext';

export default function CartPage() {
  const {content} = useCartPage(); 
  return  <CartProvider>{content}</CartProvider>;
}