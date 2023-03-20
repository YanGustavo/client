import React from 'react';
import CartPage from '../pages/cart_page';
import OrderPage from '../pages/order_page';
import ProfilePage from '../pages/profile_page';
import FavoritePage from '../pages/favorite_page';
import MessagePage from '../pages/message_page';
import LoginPage from '../pages/login_page';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import {useCartContext} from "context/cart-context";
import * as actionTypes from 'context/base-context/action-types';


const useRightMenu = () => {  
  const [data, setData] = React.useState("Carregando");  
  const [page, setPage] = React.useState(actionTypes.LOADING);
  const [content, setContent] = React.useState(<Loading/>); 
  const [isPending, startTransition] = React.useTransition(); 
  const [{ menu_right_page, loading }, actions] = useBaseContext();
  const [{count_cart_items}, actionsCart] = useCartContext();

  React.useEffect(() => {
    actions.reset();
  },[actions]);

  const setNewPage = (type) => {
  switch (type) {
    case actionTypes.CART: 
      return actions.cart(); 
      case actionTypes.PROFILE: 
      return actions.profile(); 
      case actionTypes.LOGIN: 
      return actions.login(); 
  }
  }

  function navigate(page) {
    startTransition(() => {
      setPage(menu_right_page);      
    });
    if (page === actionTypes.CART) {
        setData("Carrinho");
        setContent(<CartPage/>);
      } 
      else if (page === actionTypes.PROFILE) {
        setData("Perfil");
        setContent(<ProfilePage/>);
      }else if (page === actionTypes.LOGIN) {
        setData("Login");
        setContent(<LoginPage/>);
      }else{
        setData("");
        setContent(<CartPage/>);
      }
  };
  React.useEffect(() => {
      navigate(menu_right_page);
    },[menu_right_page]);

return{ 
  data,
 isPending,
 content,
 count_cart_items,
 setNewPage,
};
}
export default useRightMenu;