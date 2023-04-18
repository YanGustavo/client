import React from 'react';
import { useBaseContext } from 'context/base-context';
import { useCartStore } from 'context/cart-context';
import { createContext, useContext, useState } from 'react';
import type { Product, Variant} from "lib/types/Product";
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
  selectedVariant: Variant;
  selectedQuantity: number;
  setIsModalOpen: (increment: boolean) => void;
  handleSelectVariant: (variant: Variant) => void;
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
  const [selectedVariant, setSelectedVariant] = useState(product.variations[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { cart } = useCartStore();
  const isComponentOnCart = (cart, selectedVariant) => {
    if (cart && cart.items) {
      const itemsWithSelectedSku = cart.items.filter(item => item.sku === selectedVariant?.sku);
      return itemsWithSelectedSku.length > 0;
    } else {
      return false;
    }
  };
  
  React.useEffect(() => {
    if(cart){
      const componentOnCart = isComponentOnCart(cart, selectedVariant);
    setIsOnCart(componentOnCart);
    }    
  }, [selectedVariant]);
  const handleSelectVariant = (variant: Variant) => {
    setSelectedQuantity(1);
    setSelectedVariant(variant);
    console.log("variant" +variant.price);
  };
  const handleSelectQuantity = React.useCallback((increment: boolean) => {
    if (increment) {
      setSelectedQuantity((prev) => Math.min(prev + 1, selectedVariant.stock));
    } else {
      setSelectedQuantity((prev) => Math.max(prev - 1, 1));
    }
  }, [selectedVariant.stock]);
  // Adicionar ao Carrinho
  const handlerAddToCart = React.useCallback(
    () => {
      if (parseInt(selectedVariant.price) > 1000) {
        setIsModalOpen(true);
      } else {
        try {
          addToCart(selectedVariant.sku, selectedQuantity);
          baseActions.setMenuRightVisible();          
          setIsOnCart(true);
        } catch {
         toast.error('Não Conseguimos adicionar seu produto ao carrinho! Tente novamente ou entre em contato diretamente pelo chat!');
          setIsOnCart(false);
       }
      }
    },
    [addToCart, selectedVariant, selectedQuantity, isComponentOnCart]
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
    //   variations: colorVariants,
    // },
    isOnCart,
    isModalOpen,
    selectedVariant,
    selectedQuantity,
    setIsModalOpen,
    handleSelectVariant,
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
          selectedVariant={selectedVariant}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </ProductContext.Provider>
  );
  
}

export default ProductContext;