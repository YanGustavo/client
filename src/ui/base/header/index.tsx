'use client';

import React from 'react';
import Link from 'next/link';
//styles

import * as SHeader from './styles';
//hooks
import useHeader from "./useHeader";
//componets
import { Menu } from '@headlessui/react';
import DropdownLink from 'ui/base/header/components/drop-down-link';
import Location from "ui/base/header/components/location";
//icons
import SearchRounded from "@mui/icons-material/SearchRounded";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";


const Header = ({children} :  {children: React.ReactNode } ) => { 
 const {count_cart_items, status, session, setQuery, submitHandler, logoutHandler,} = useHeader();
  return (
    <SHeader.HeaderStyle>
      <header>
        <div className="top-announcement">
          <div className="marquee">
          <Location/>          
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
        
        {count_cart_items > 0 ? (
        <div className="cart_content"> 
        <p>{count_cart_items}</p> 
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
     
      {children}      
      </div>
      <div className="lineGradientTop"></div> 
      </header>    
    </SHeader.HeaderStyle>
   

  );
}
export default Header;
