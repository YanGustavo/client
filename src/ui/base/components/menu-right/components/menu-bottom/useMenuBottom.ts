import React from 'react';
import {useCartContext} from "context/cart-context";

const useMenuBottom = () => {
  const [{cart}, actions] = useCartContext();
  const [cartItemsCount, setCartItemsCount] = React.useState(0);
  React.useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
 return{
  cartItemsCount
 };  
}
export default useMenuBottom;