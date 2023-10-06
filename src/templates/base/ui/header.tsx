'use client'
import React from 'react';
import Link from 'next/link';
//hooks
import useBase from '../hooks/useBase';
import useHeader from "../../../hooks/useHeader";
//componets
import Location from "components/Location";
//icons
import SearchRounded from "@mui/icons-material/SearchRounded";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {ToggleMenu} from './styles';
import styled from 'styled-components';
import theme from 'styles/styled-components/theme';

const TopAnnouncement = styled.div`
  height: 40px;
  width: 100%;
  background: ${(props) => props.theme.desing.colors.background.default}; 
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
  background: ${(props) => props.theme.desing.colors.header.background};   
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
 const {toggle_menu_left_visible, actions} = useBase();
  return (
    <Header>
        <TopAnnouncement>
          <Marquee>
          <Location/>          
          </Marquee>        
        </TopAnnouncement>        
        <HeaderCenter>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <ToggleMenu className={toggle_menu_left_visible ? '' : 'hidden'} >
        <MenuIcon className="toggleIcon" onClick={() => actions.setMenuLeftVisible()} />
      </ToggleMenu> 
      <ToggleMenu className={toggle_menu_left_visible ? 'hidden' : ''} >
        {/* //value={"Fechar"} value={"Menu"} */}
        <CloseIcon className="toggleIcon" onClick={() => actions.setMenuLeftHidden()}/>
      </ToggleMenu> 
          
          <Link href="/">
            <Logo src="/img/logo_name.png" alt="Eai Chefinho!" />
          </Link>
        </div>
      {/* <InputBox>
        <SearchRounded className="searchIcon" onClick={submitHandler} />
        <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" />
      </InputBox>    */}
      <div style={{ display: 'flex', alignItems: 'center' }}>{children}     </div>
        
      {/* Ocultando acimia os icones de carrinho, de botão de fechar menu right e do botão de ir para pagina de login, motivos de terminar o catalog primeiro */}
      </HeaderCenter>
      <div className="lineGradient"></div>    
    </Header>  

  );
}
export default HeaderPage;
