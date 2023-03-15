'use client';

import React from 'react';
import * as SHeader from './styles';
import Link from 'next/link';
import useHeader from "./useHeader";
import useHeaderAnimate from "./useHeaderAnimate";
import { Menu } from '@headlessui/react';
import DropdownLink from 'ui/base/pages/home/drop-down-link';
import BarChart from "@mui/icons-material/BarChart";
import SearchRounded from "@mui/icons-material/SearchRounded";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";


const Header = ({children} :  {children: React.ReactNode } ) => { 
 const {cartItemsCount, status, session, setQuery, submitHandler, logoutHandler,} = useHeader();
 useHeaderAnimate();
  return (
    <SHeader.HeaderStyle>
      <header>
        <div className="top-announcement">
          <div className="marquee">
          {children}
          </div>        
        </div>        
        <div className ="header">
      <Link href="/">
      <img
        src="/img/logo_name.png"
        alt="Eai Chefinho!"
        className="logo"
      />
      </Link>
      <div className="inputBox">
        <SearchRounded className="searchIcon" onClick={submitHandler} />
        <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        
        {cartItemsCount > 0 ? (
        <div className="cart_content"> 
        <p>{cartItemsCount}</p> 
        </div>
        ) : (
        <div className="noCartItem"> 
        <p>1</p>  
        </div>
        )}  
        </div>
      
      
      <div className="profileContainer"> 
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
                <Link href="/login">
                  <i className="p-2">Login</i>
                </Link>
              )} 
 </div>
     <div className="toggleMenu">
        <BarChart className="toggleIcon"/>
      </div>       
      </div>
      <div className="lineGradientTop"></div> 
      </header>    
    </SHeader.HeaderStyle>
   

  );
}
export default Header;
