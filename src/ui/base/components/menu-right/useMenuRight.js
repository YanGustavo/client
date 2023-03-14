import React from 'react';
import IndexPage from './pages/index_page';
import OrderPage from './pages/order_page';
import FavoritePage from './pages/favorite_page';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';
const useRightMenu = () => {  
  const [data, setData] = React.useState("Carregando");  
  const [page, setPage] = React.useState(actionTypes.LOADING);
  const [content, setContent] = React.useState(<Loading/>); 
  const [isPending, startTransition] = React.useTransition(); 
  const [{ menu_right_page, loading }, actions] = useBaseContext();
  

  function navigate(page) {
    startTransition(() => {
      console.log("entrou no transition e menu_right_page é:"+ menu_right_page+"e page:"+page);
      setPage(menu_right_page);      
      console.log("e page depois do set:"+page);
    });
    if (page === actionTypes.HOME) {
        setData("Eai Chefinho, Seja bem vindo!");
        setContent(<IndexPage/>);
      } else if (page === actionTypes.ORDER) {
        setData("Seus Pedidos");
        setContent(<OrderPage/>);
      }else if (page === actionTypes.FAVORITE) {
        setData("Seus Pedidos");
        setContent(<FavoritePage/>);
      }else{
        setData("Eai Chefinho, Seja bem vindo!, estamos tendo problemas no carregamento das outras paginas no momento");
        setContent(<IndexPage/>);
      }
  };
  React.useEffect(() => {
      navigate(menu_right_page);
    },[menu_right_page]);

return{ 
  data,
 isPending,
 content,
};
}
export default useRightMenu;