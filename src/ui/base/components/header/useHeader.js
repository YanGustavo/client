import React from 'react';
//import {useRouter} from 'next/navigation'
//import { useDispatch, useSelector } from "react-redux";
//import { logout } from "redux/actions/user-actions";

import { useStateValue } from "context/state-provider";
const useHeader = () => { 
  //const [keyword, setKeyword] = React.useState();
  //const dispatchUserLogin = useDispatch();
  //const router = useRouter();

  //const cart = useSelector((state) => state.cart);
   //const { cartItems } = cart;
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
 
  const logoutHandler = () => {
    //dispatchUserLogin(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (keyword.trim()) {
    //   router.push(`/search/${keyword}`);
    // } else {
    //   router.push("/");
    // }
  };

//  return{
//   cart,
//  };  
return;
}
export default useHeader;