import React from 'react';
import Cookies from 'js-cookie';
//import * as actionTypesMediaQuery from 'constants/media-query-constants';
//import { signOut, useSession } from 'next-auth/react';
import {useCartContext} from "context/cart-context";
import { useRouter } from 'next/router';

const useHeader = () => { 
  //const { status, data: session } = useSession();
  const status:any = "";
  const session:any = [{
    user: {
      name: "Yan Gustavo",
      isAdmin: true,
    }
}];
  const [{cart}, actions] = useCartContext();
  const [cartItemsCount, setCartItemsCount] = React.useState(0);

  React.useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart]);

  const logoutHandler = () => {
    Cookies.remove('cart');
    actions.cartClearItems();
    //signOut({ callbackUrl: '/login' });
  };

  const [query, setQuery] = React.useState('');
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

 return{
  cartItemsCount,
  status,
  session,
  setQuery,
  submitHandler,
  logoutHandler,
 };  
}
export default useHeader;