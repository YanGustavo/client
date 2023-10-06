import React from 'react';
import Cookies from 'js-cookie';
//import * as actionTypesMediaQuery from 'constants/media-query-constants';
//import { signOut, useSession } from 'next-auth/react';
import {useBaseContext} from "context/base-context";
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
  const [{count_cart_items}, actionsBase] = useBaseContext();


  const logoutHandler = () => {
   // Cookies.remove('cart');
    //actions.cartClearItems();
    //signOut({ callbackUrl: '/login' });
  };

  const [query, setQuery] = React.useState('');
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

 return{
  count_cart_items,
  status,
  session,
  setQuery,
  submitHandler,
  logoutHandler,
 };  
}
export default useHeader;