import React from 'react';
//import { useBaseContext } from 'context/base-context';
//import { useCartStore } from 'context/cart-context';
import { createContext, useContext, useState } from 'react';
// Toast
import { toast } from 'react-toastify';
//Hook
import useMenu from 'hooks/useMenu';

const MenuContext = createContext<MenuContextType | null>(null);

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(
      'MenuCard.* component must be rendered as a child of MenuCard component'
    );
  }
  return context;
}

export type MenuContextType = {
  Menu: Menu;
  isOnCart: boolean;
  isModalOpen: boolean;
  selectedVariation: VariationOption;
  selectedQuantity: number;
  setIsModalOpen: (increment: boolean) => void;
  handleSelectVariation: (variation: VariationOption) => void;
  handleSelectQuantity: (increment: boolean) => void;
  handlerAddToCart: () => void;
  handlerRemoveFromCart: () => void;
};

type MenuProviderProps = {
  Menu: Menu;
  children: React.ReactNode;
};

export function MenuProvider({ Menu, children }: MenuProviderProps) {
  const { addToCart, removeFromCart } = useCartStore();
  const [, baseActions] = useBaseContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOnCart, setIsOnCart] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState<VariationOption>(Menu.variations[0].options[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { cart } = useCartStore();
  const { findMenuBySKU } = useMenu();

  const isComponentOnCart = (cart: any, selectedVariation: VariationOption) => {
    if (cart && cart.items) {
      const itemsWithSelectedSku = cart.items.filter((item: any) => item.sku === selectedVariation?.sku);
      return itemsWithSelectedSku.length > 0;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (cart) {
      const componentOnCart = isComponentOnCart(cart, selectedVariation);
      setIsOnCart(componentOnCart);
    }
  }, [selectedVariation]);

  const handleSelectVariation = (variation: VariationOption) => {
    setSelectedQuantity(1);
    setSelectedVariation(variation);
  };

  const handleSelectQuantity = React.useCallback((increment: boolean) => {
    if (increment) {
      setSelectedQuantity((prev) => Math.min(prev + 1, selectedVariation.stock));
    } else {
      setSelectedQuantity((prev) => Math.max(prev - 1, 1));
    }
  }, [selectedVariation.stock]);

  const handlerAddToCart = React.useCallback(() => {
    if (parseInt(selectedVariation.price) > 1000) {
      setIsModalOpen(true);
    } else {
      try {
        addToCart(selectedVariation.sku, selectedQuantity, findMenuBySKU);
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
    Menu,
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
    <MenuContext.Provider value={value}>
      {children}
      {isModalOpen && (
        <CartToZap
          Menu={Menu}
          selectedVariation={selectedVariation}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </MenuContext.Provider>
  );
}

export default MenuContext;
