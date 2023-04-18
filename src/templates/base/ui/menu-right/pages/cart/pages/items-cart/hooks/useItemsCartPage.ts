import React from "react";
import { useCartStore } from "context/cart-context";
import { useBaseContext } from "context/base-context";

const useItemsCartPage = () => {
  const [loading, setLoading] = React.useState(true);
  const [subTotal, setSubTotal] = React.useState(0);
  const { cart } = useCartStore();
  console.log("cart:"+cart.items);
  const [, baseActions] = useBaseContext();

  const HandlerCheckOut = () => {};

  const continueToShopping = () => {
    baseActions.setMenuRightHidden();
  };
  React.useEffect(() => {
    if (cart) { // adiciona verificação para evitar loop infinito
      baseActions.setCountCartItems(cart.totalItems);
      setSubTotal(cart.subtotal);
      setLoading(false);
    }
  }, [cart]);

  return {
    loading,
    cartItems: cart?.items || [], // adiciona verificação para evitar erro caso cart seja nulo
    subTotal,
    HandlerCheckOut,
    continueToShopping,
  };
};

export default useItemsCartPage;
