import Link from 'next/link';
import { Main, Template,} from './styles';
import useBase from './useBase';
import useMenuRight from "ui/base/menu-right/hooks/useMenuRight";
import HeaderPage from "ui/base/header";
import {ShopCart, ToggleMenu, ProfileContainer} from "ui/base/header/styles";
import Footer from "ui/base/footer";
import MenuRight from "ui/base/menu-right";
import MenuBottomItem from "@/ui/base/menu-right/components/menu-bottom-item";
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
import useHeader from "ui/base/header/useHeader";
//componets
import { Menu } from '@headlessui/react';
import DropdownLink from 'ui/base/header/components/drop-down-link';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

const Base = ({children}: { children: React.ReactNode }) => {
 const {toggle_menu_visibility, actions} = useBase();
 const {menu_right_page, count_cart_items, setNewPage,} = useMenuRight();
 const {status, session, logoutHandler,} = useHeader();
return (
  <Template id="base_template">
    <HeaderPage>
    <ShopCart onClick={() => actions.cart()}>
        <ShoppingCartRounded className="cart" />        
        {count_cart_items > 0 ? (
        <div className="cart_content"> 
        <p>{count_cart_items}</p> 
        </div>
        ) : (
        <div className="noCartItem"> 
        <p>1</p>  
        </div>
        )}  
        </ShopCart>     
      <ProfileContainer> 
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
                <Link href="#" onClick={() => actions.login()}>
                  <i className="p-2"><Tooltip title="Login"><LoginIcon/></Tooltip></i>
                </Link>
              )} 
 </ProfileContainer>
     <ToggleMenu className={toggle_menu_visibility ? '' : 'hidden'} >
        <BarChart className="toggleIcon" onClick={() => actions.setMenuRightVisible()} />
      </ToggleMenu> 
      <ToggleMenu className={toggle_menu_visibility ? 'hidden' : ''} >
        {/* //value={"Fechar"} value={"Menu"} */}
        <CloseIcon className="toggleIcon" onClick={() => actions.setMenuRightHidden()}/>
      </ToggleMenu> 
      </HeaderPage>
  <Main>
    {children}
  <Footer/>
  </Main>
  <MenuRight>
         {/* prettier-ignore */}
         <MenuBottomItem handleClick={setNewPage} param={actionTypes.CART} link={'#'} icon={<ShoppingCartRounded/>} counter ={count_cart_items} title= {"Carrinho"} isActive={menu_right_page === actionTypes.CART ? true: false}/>
          {/* prettier-ignore */}
          <MenuBottomItem  handleClick={setNewPage} param={actionTypes.PROFILE} link={'#'} icon={<AccountBoxIcon/>}  title= {"Perfil"} isActive={menu_right_page === actionTypes.PROFILE ? true: false}/>
          {/* prettier-ignore */}
          <MenuBottomItem handleClick={setNewPage} param={actionTypes.LOGIN} link={'#'} icon={<LoginIcon/>}  title= {"Login"} isActive={menu_right_page === actionTypes.LOGIN ? true: false}/>
    </MenuRight>  
  </Template>
)
}
export default Base;