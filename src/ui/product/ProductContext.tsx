import React from 'react';
import { useBaseContext } from 'context/base-context';
import { useCartStore } from 'context/cart-context';
import { createContext, useContext, useState } from 'react';
import type { Product, Variation} from "lib/types/Product";
//Toast
import { toast } from 'react-toastify';
const ProductContext = createContext<ProductContextType | null>(null);
//Modal
import CartToZap from "@/ui/product/CartToZap"; 

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard component'
    );
  }
  return context;
}
  export type ProductContextType = {
  product: Product;
  isOnCart: boolean;
  isModalOpen: boolean;
  selectedVariation: Variation;
  selectedQuantity: number;
  setIsModalOpen: (increment: boolean) => void;
  handleSelectVariation: (Variation: Variation) => void;
  handleSelectQuantity: (increment: boolean) => void;
  handlerAddToCart: () => void;
  handlerRemoveFromCart: () => void;
  }
type ProductProviderProps = {
  product: Product;
  children: React.ReactNode;
};
export function ProductProvider({ product, children }: ProductProviderProps) {
  const {addToCart, removeFromCart} = useCartStore();
  const [, baseActions] = useBaseContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOnCart, setIsOnCart] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { cart } = useCartStore();
  const isComponentOnCart = (cart, selectedVariation) => {
    if (cart && cart.items) {
      const itemsWithSelectedSku = cart.items.filter(item => item.sku === selectedVariation?.sku);
      return itemsWithSelectedSku.length > 0;
    } else {
      return false;
    }
  };
  
  React.useEffect(() => {
    if(cart){
      const componentOnCart = isComponentOnCart(cart, selectedVariation);
    setIsOnCart(componentOnCart);
    }    
  }, [selectedVariation]);
  const handleSelectVariation = (Variation: Variation) => {
    setSelectedQuantity(1);
    setSelectedVariation(Variation);
    console.log("Variation" +Variation.price);
  };
  const handleSelectQuantity = React.useCallback((increment: boolean) => {
    if (increment) {
      setSelectedQuantity((prev) => Math.min(prev + 1, selectedVariation.stock));
    } else {
      setSelectedQuantity((prev) => Math.max(prev - 1, 1));
    }
  }, [selectedVariation.stock]);
  // Adicionar ao Carrinho
  const handlerAddToCart = React.useCallback(
    () => {
      if (parseInt(selectedVariation.price) > 1000) {
        setIsModalOpen(true);
      } else {
        try {
          addToCart(selectedVariation.sku, selectedQuantity);
          baseActions.setMenuRightVisible();          
          setIsOnCart(true);
        } catch {
         toast.error('Não Conseguimos adicionar seu produto ao carrinho! Tente novamente ou entre em contato diretamente pelo chat!');
          setIsOnCart(false);
       }
      }
    },
    [addToCart, selectedVariation, selectedQuantity, isComponentOnCart]
  );
  const handlerRemoveFromCart = React.useCallback(
    () => {
          removeFromCart();
          setIsOnCart(false);
    },
    [isComponentOnCart]
  );
  const value = {
    product,
    // product: {
    //   ...product,
    //   variations: colorVariations,
    // },
    isOnCart,
    isModalOpen,
    selectedVariation,
    selectedQuantity,
    setIsModalOpen,
    handleSelectVariation,
    handleSelectQuantity,
    handlerAddToCart,
    handlerRemoveFromCart,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
      {isModalOpen && (
        <CartToZap
          product={product}
          selectedVariation={selectedVariation}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </ProductContext.Provider>
  );
  
}

export default ProductContext;