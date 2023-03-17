import React from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//styles
import {Container} from 'templates/base/styles';
import * as SMenuRight from './styles/styles';
//hooks
import useMenuRight from "./hooks/useMenuRight";
import useMenuRightAnimation from "./hooks/useMenuRightAnimation";
//components
import MenuBottom from "ui/base/components/menu-right/components/menu-bottom";
import MenuBottomItem from "@/ui/base/components/menu-right/components/menu-bottom-item";
import LayoutTransition from 'components/layoutTransition';
import * as actionTypes from 'context/base-context/action-types';
//icons
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletOutlined";
import Chat from "@mui/icons-material/Chat";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import Settings from "@mui/icons-material/Settings";
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import CloseIcon from '@mui/icons-material/Close';

 const MenuRight = () => {  
  const {data, isPending, content, count_cart_items} = useMenuRight(); 
  useMenuRightAnimation();   
return (
  
      <SMenuRight.MenuRight className ="menuRight">
        <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >  
        <SMenuRight.CloseMenu className = "closeMenu">
            <CloseIcon className="toggleIcon"/>
          </SMenuRight.CloseMenu>
        <SMenuRight.MenuRightTop>
         <Container>
          {data}
          </Container>                  
            </SMenuRight.MenuRightTop>
          <SMenuRight.MenuRightCenter>
            <LayoutTransition isPending={isPending}>
                {content}
            </LayoutTransition>                      
             </SMenuRight.MenuRightCenter>
              <SMenuRight.MenuRightBottom>
              <MenuBottom>
               {/* prettier-ignore */}
        <MenuBottomItem click={actionTypes.HOME} link={'#'} icon={<ShoppingCartRounded/>} counter ={count_cart_items} title= {"Carrinho"} isHome={true}/>
          {/* prettier-ignore */}
          <MenuBottomItem click={actionTypes.ORDER} link={'#'} icon={<SummarizeRounded/>} counter ={0} title= {"Pedidos"}/>
          {/* prettier-ignore */}
          <MenuBottomItem link={'#'} click={actionTypes.ORDER} icon={<AccountBalanceWalletRounded/>} counter ={1} title= {"Perfil"}/>
          {/* prettier-ignore */}
          <MenuBottomItem click={actionTypes.FAVORITE} link={'#'} icon={<Favorite/>} counter ={0} title= {"Favoritos"}/>
          {/* prettier-ignore */}
          <MenuBottomItem link={'#'} click={actionTypes.ORDER} icon={<Chat/>} counter ={0} title= {"Mensagens"}/>
          {/* prettier-ignore */}
          <MenuBottomItem link={'#'} icon={<Settings/>}  title= {"Sair"}/>
              </MenuBottom>
              </SMenuRight.MenuRightBottom>
              </ErrorBoundary> 
  </SMenuRight.MenuRight>

);
}
export default MenuRight;