import React from 'react';
import CartPage from '../pages/cart';
import ProfilePage from '../pages/profile';
import LoginPage from '../pages/login';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import {useCartContext} from "context/cart-context";
import * as actionTypes from 'context/base-context/action-types';


const useRightMenu = () => {  
  const [data, setData] = React.useState("Carregando");  
  const [page, setPage] = React.useState(actionTypes.LOADING);
  const [content, setContent] = React.useState(<Loading/>); 
  const [isPending, startTransition] = React.useTransition(); 
  const [{ size_media_query, menu_right_visible, menu_right_page, loading }, actions] = useBaseContext();
  const [{count_cart_items}, actionsCart] = useCartContext();

  const setNewPage = (type) => {
  switch (type) {
    case actionTypes.SET_CART_PAGE: 
      return actions.setCartPage(); 
      case actionTypes.SET_PROFILE_PAGE: 
      return actions.setProfilePage(); 
      case actionTypes.SET_LOGIN_PAGE: 
      return actions.setLoginPage(); 
  }
  }

  function navigate(page) {
    startTransition(() => {
      setPage(menu_right_page);      
    });
    if (page === actionTypes.SET_CART_PAGE) {
        setData("Carrinho");
        setContent(<CartPage/>);
      } 
      else if (page === actionTypes.SET_PROFILE_PAGE) {
        setData("Perfil");
        setContent(<ProfilePage/>);
      }else if (page === actionTypes.SET_LOGIN_PAGE) {
        setData("Login");
        setContent(<LoginPage/>);
      }else{
        setData("");
        setContent(<CartPage/>);
      }
  };
  React.useEffect(() => {
      navigate(menu_right_page);
    },[size_media_query, menu_right_visible, count_cart_items, menu_right_page]);

return{ 
  menu_right_page,
  size_media_query,
  menu_right_visible,
  data,
 isPending,
 content,
 count_cart_items,
 setNewPage,
 actions,
};
}
export default useRightMenu;