import React from 'react';
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletOutlined";
import Chat from "@mui/icons-material/Chat";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import Settings from "@mui/icons-material/Settings";
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import * as SMenuBottom from './styles';
import MenuContainer from "ui/base/components/menu-right/components/menu-container";
import useMenuBottom from "./useMenuBottom";
import useAnimate from "./useAnimate";

import * as actionTypes from 'context/base-context/action-types';
const MenuBottom =() => {
 
  const {count_cart_items} = useMenuBottom();
  useAnimate();
  
     
  return (
    <SMenuBottom.MenuBottomStyle>
      {/* Left menu */}
    <div className="menuBottom">
      <ul id="menu">
        {/* prettier-ignore */}
        <MenuContainer click={actionTypes.HOME} link={'#'} icon={<ShoppingCartRounded/>} counter ={count_cart_items} title= {"Carrinho"} isHome={true}/>
          {/* prettier-ignore */}
          <MenuContainer click={actionTypes.ORDER} link={'#'} icon={<SummarizeRounded/>} counter ={0} title= {"Pedidos"}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} click={actionTypes.ORDER} icon={<AccountBalanceWalletRounded/>} counter ={1} title= {"Perfil"}/>
          {/* prettier-ignore */}
          <MenuContainer click={actionTypes.FAVORITE} link={'#'} icon={<Favorite/>} counter ={0} title= {"Favoritos"}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} click={actionTypes.ORDER} icon={<Chat/>} counter ={0} title= {"Mensagens"}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings/>}  title= {"Sair"}/>
          <div className="indicator"></div>
      </ul>
    </div> 
    </SMenuBottom.MenuBottomStyle>
  );

}
export default MenuBottom;