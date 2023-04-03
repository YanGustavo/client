'use client'
import React from 'react';
import Link from 'next/link';
//styles
import {TopAnnouncement , Marquee, HeaderCenter, Logo, InputBox, Header,}from './styles';
//hooks
import useHeader from "./useHeader";
//componets
import Location from "components/Location";
//icons
import SearchRounded from "@mui/icons-material/SearchRounded";


const HeaderPage = ({children} :  {children: React.ReactNode } ) => { 
 const {setQuery, submitHandler, } = useHeader();
  return (
    <Header>
        <TopAnnouncement>
          <Marquee>
          <Location/>          
          </Marquee>        
        </TopAnnouncement>        
        <HeaderCenter>
      <Link href="/">
      <Logo
        src="/img/logo_name.png"
        alt="Eai Chefinho!"
      />
      </Link>
      <InputBox>
        <SearchRounded className="searchIcon" onClick={submitHandler} />
        <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" />
      </InputBox>    
      {children}      
      </HeaderCenter>
      <div className="lineGradientTop"></div>    
    </Header>  

  );
}
export default HeaderPage;
