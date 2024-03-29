'use client'
import React from 'react';
import Link from 'next/link';
import { Main, Template, ShopCart, ToggleDrawer,ToggleMenu, ProfileContainer} from './styles';
import useBase from '../hooks/useBase';
import useMenuRight from "templates/base/ui/menu-right/hooks/useMenuRight";
import HeaderPage from "templates/base/ui/header";
import Footer from "templates/base/ui/footer";
import MenuRight from "templates/base/ui/menu-right";
import MenuBottomItem from "templates/base/ui/menu-right/components/menu-bottom-item";
//icons header
import BarChart from "@mui/icons-material/BarChart";
//context
import * as actionTypes from 'context/base-context/action-types';
//icons menu right 
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Tooltip from '@mui/material/Tooltip';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
//hooks
import useHeader from "hooks/useHeader";
//componets
import { Menu } from '@headlessui/react';
import DropdownLink from 'components/drop-down-link';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

const Base = ({children}: { children: React.ReactNode }) => {
 const {toggle_menu_visible, actions} = useBase();
 const {menu_right_page, count_cart_items, setNewPage,} = useMenuRight();
 const {status, session, logoutHandler,} = useHeader();
// Adicione o estado para controlar a visibilidade do menu direito
const [menuRightVisible, setMenuRightVisible] = React.useState(!toggle_menu_visible);
 return (
  <Template id="base_template">
    <HeaderPage>
    <ShopCart onClick={() => actions.setCartPage()}>
        <ShoppingCartRounded className="cart" />        
        {count_cart_items > 0 ? (
        <div className="cart_content"> 
        <p>{count_cart_items}</p> 
        </div>
        ) : (
        <div className="noCartItem"> 
        <p></p>  
        </div>
        )}  
        </ShopCart>     
      {/* <ProfileContainer> 
      {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Perfil
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Pedidos
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                         Painel de Controle
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <Link
                        className="dropdown-link"
                        href="#"
                        onClick={logoutHandler}
                      >
                       Sair
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="#" onClick={() => actions.setLoginPage()}>
                  <i className="p-2"><Tooltip title="Login"><LoginIcon/></Tooltip></i>
                </Link>
              )} 
 </ProfileContainer> */}
  <ToggleMenu
  className={menuRightVisible ?  'hidden': ''}
  onClick={() => {
    actions.setMenuRightVisible(); // Mostra o menu direito
    setMenuRightVisible(true); // Atualiza o estado para mostrar o menu direito
  }}
>
  <BarChart className="toggleIcon" />
</ToggleMenu>
 <ToggleMenu
  className={menuRightVisible ? '' : 'hidden'}
  onClick={() => {
    actions.setMenuRightHidden(); // Oculta o menu direito
    setMenuRightVisible(false); // Atualiza o estado para ocultar o menu direito
  }}
>
  <CloseIcon className="toggleIcon" />
</ToggleMenu>
  


      </HeaderPage>
  <Main>
    {children}
  <Footer/>
  </Main>
  {menuRightVisible && (
     <MenuRight>
      {/* prettier-ignore */}
       <MenuBottomItem handleClick={setNewPage} param={actionTypes.SET_CART_PAGE} link={'#'} icon={<ShoppingCartRounded/>} counter ={count_cart_items} title= {"Carrinho"} isActive={menu_right_page === actionTypes.SET_CART_PAGE ? true: false}/>
      {/* prettier-ignore */}
      <MenuBottomItem  handleClick={setNewPage} param={actionTypes.SET_PROFILE_PAGE} link={'#'} icon={<AccountBoxIcon/>}  title= {"Perfil"} isActive={menu_right_page === actionTypes.SET_PROFILE_PAGE ? true: false}/> 
      {/* prettier-ignore */}
      <MenuBottomItem handleClick={setNewPage} param={actionTypes.SET_LOGIN_PAGE} link={'#'} icon={<LoginIcon/>}  title= {"Login"} isActive={menu_right_page === actionTypes.SET_LOGIN_PAGE ? true: false}/> 
    </MenuRight>
    )} 
  </Template>
)
}
export default Base;