'use client'
import React from 'react';
import Link from 'next/link';
//hooks
import useHeader from "../../../hooks/useHeader";
//componets
import Location from "components/Location";
//icons
import SearchRounded from "@mui/icons-material/SearchRounded";

import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
const TopAnnouncement = styled.div`
  height: 40px;
  width: 100%;
  background: ${theme.colors.background}; 
  display: flex;
  align-content: flex-start;
  align-items: center;
`;
const Marquee = styled.div`
@-webkit-keyframes rightThenLeft {
    0%   {left: 0%;}
    50%  {left: 100%;}
    100% {left: 0%;}
}
    position: absolute;
    white-space: nowrap;
    -webkit-animation: rightThenLeft 4s linear;
`;
const HeaderCenter = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  height: 60px;
  width: 100%;
  background: ${theme.colors.header_background};   
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  z-index: 108;
`;
const Logo = styled.img`
 min-width: 80px;
  width: 150px;
`;
const InputBox = styled.div`
  background: #ffffff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8px 15px;
  width: 120px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  ${this}  .searchIcon {
  color: #787a84;
  font-size: 20px;
}
 ${this}  input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: #787a84;
  padding-left: 8px;
  font-size: 14px;
  font-weight: 500;
}
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 105px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

Link, a {
  text-decoration:none;
}
@media screen and (min-width: 541px) {

}
@media screen and (min-width: 650px) {
  ${InputBox} {
    width: 60%;
  }
}
`;
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
      <div className="lineGradient"></div>    
    </Header>  

  );
}
export default HeaderPage;
