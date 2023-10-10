import CartToZap from "@/ui/product/CartToZap"; 
import React from 'react';
import { useBaseContext } from 'context/base-context';
import { useCartStore } from 'context/cart-context';
import { createContext, useContext, useState } from 'react';
import type { Product, VariationOption } from "lib/types/Product";
// Toast
import { toast } from 'react-toastify';
//Hook
import useProduct from 'hooks/useProduct';

const ProductContext = createContext<ProductContextType | null>(null);

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      'ProductCard.* component must be rendered as a child of ProductCard component'
    );
  }
  return context;
}

export type ProductContextType = {
  product: Product;
  isOnCart: boolean;
  isModalOpen: boolean;
  selectedVariation: VariationOption | null;
  selectedQuantity: number;
  setIsModalOpen: (increment: boolean) => void;
  handleSelectVariation: (variation: VariationOption) => void;
  handleSelectQuantity: (increment: boolean) => void;
  handlerAddToCart: () => void;
  handlerRemoveFromCart: () => void;
};

type ProductProviderProps = {
  product: Product;
  children: React.ReactNode;
};

export function ProductProvider({ product, children }: ProductProviderProps) {
  const { addToCart, removeFromCart } = useCartStore();
  const [, baseActions] = useBaseContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOnCart, setIsOnCart] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState<VariationOption | null>(null);
  
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { cart } = useCartStore();
  const { findProductBySKU } = useProduct();

  const isComponentOnCart = (cart: any, selectedVariation: VariationOption) => {
    if (cart && cart.items) {
      const itemsWithSelectedSku = cart.items.filter((item: any) => item.sku === selectedVariation?.sku);
      return itemsWithSelectedSku.length > 0;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (selectedVariation) {
      // Only update state if selectedVariation is not null
      const componentOnCart = isComponentOnCart(cart, selectedVariation);
      setIsOnCart(componentOnCart);
    }
  }, [selectedVariation, cart]);
  

  const handleSelectVariation = (variation: VariationOption) => {
    setSelectedQuantity(1);
    setSelectedVariation(variation);
  };

  const handleSelectQuantity = React.useCallback((increment: boolean) => {
    if (!selectedVariation) {
      return; // Early return if selectedVariation is null
    }
  
    if (increment) {
      setSelectedQuantity((prev) => Math.min(prev + 1, selectedVariation.stock));
    } else {
      setSelectedQuantity((prev) => Math.max(prev - 1, 1));
    }
  }, [selectedVariation]);
  

  const handlerAddToCart = React.useCallback(() => {
    if (!selectedVariation) {
      return; // Early return if selectedVariation is null
    }
  
    if (parseInt(selectedVariation.price) > 1000) {
      setIsModalOpen(true);
    } else {
      try {
        addToCart(selectedVariation.sku, selectedQuantity, findProductBySKU);
        baseActions.setMenuRightVisible();
        setIsOnCart(true);
      } catch {
        toast.error('Não conseguimos adicionar seu produto ao carrinho! Tente novamente ou entre em contato diretamente pelo chat!');
        setIsOnCart(false);
      }
    }
  }, [addToCart, selectedVariation, selectedQuantity, isComponentOnCart]);
  

  const handlerRemoveFromCart = React.useCallback(() => {
    removeFromCart();
    setIsOnCart(false);
  }, [isComponentOnCart]);

  const value = {
    product,
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
  {isModalOpen && selectedVariation && (
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
