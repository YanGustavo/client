import { useBaseContext } from 'context/base-context';
import { useCartStore } from 'context/cart-context';
import React, { useCallback, useState } from 'react';
//Products
import {Product} from 'lib/types/Product';
//Toast
import { toast } from 'react-toastify';

//
type UseProductProps = {
  product: Product;
};
type UseProductReturn = {
  quantity: number; 
  isModalOpen: boolean; 
  discountPrice: (price: number, percentage: number) => number;
  quantityHandler: (increment: boolean) => void;
  addToCartHandler: (id: string, qty: number, price: number) => void;
};

const useProduct = ({ product}: UseProductProps): UseProductReturn => {
  //const product = findProductBySlug(Products, slug);
  //import { findProductBySlug, Product, Products } from 'lib/Products';
  const { addToCart } = useCartStore();
  const [, baseActions] = useBaseContext();
  const [quantity, setQuantity] = useState<number>(0);  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const discountPrice = useCallback((price: number, percentage: number) => {
    return price * (percentage / 100);
  }, []);
  const quantityHandler = useCallback((increment: boolean) => {
    if (increment) {
      setQuantity((prev) => (prev === 10 ? prev : prev + 1));
    } else {
      setQuantity((prev) => (prev === 0 ? prev : prev - 1));
    }
  }, []);

  const addToCartHandler = useCallback(
    (id: string, qty: number, price: number) => {
      if (price > 1000) {
        console.log('entrou no price > 1000' + price);
        // exibe o modal com a mensagem e o botão "Quero esse produto"
        setIsModalOpen(true);
      } else {
        // adiciona o produto no carrinho normalmente
        // ex: addToCart(product);
        try {
          console.log('entrou no try do CartHandler' + id + qty);
          addToCart(id, qty);
          baseActions.setMenuRightVisible();
          toast.success('Inserimos seu produto ao carrinho!');
        } catch {
          toast.error(
            'Não Conseguimos adiconar seu produto ao carrinho! Tente novamente ou entre em contato diretamente pelo chat!'
          );
        }
      }
    },
    [addToCart]
  );

  return {
    quantity,
    isModalOpen,
    discountPrice,
    quantityHandler,
    addToCartHandler
  };
};

export default useProduct;
