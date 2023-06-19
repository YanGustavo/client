import React from 'react'; //, {Suspense} 
import Link from 'next/link';
import HomeRounded from "@mui/icons-material/HomeRounded";
import styled from 'styled-components';
import theme from 'styles/styled-components/theme';

const Logo = styled.div`
  float: right;
  margin-right: 12px;
  margin-top: 12px;
  font-family: ${theme.font.family};
  color: ${theme.colors.heading_color};
  font-weight: 900;
  font-size: 1.5em;
  letter-spacing: 1px;
`;
const CTA = styled.div`
 width: 40px;
  height: 40px;
  right: -10px;
  bottom: 0;
  margin-bottom: 90px;
  position: absolute;
  z-index: 20;
  background: ${theme.colors.background}; 
  transform: rotate(-90deg);
  transition: all .5s ease-in-out;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0;
  ${this} a .MuiSvgIcon-root {
    color: ${theme.colors.white};
    font-size: 140%;
    transform: rotate(90deg);
  }
  ${this}:hover {
    background: ${theme.colors.secondary_button_background};
    transform: scale(1.1);
    width: 80px;
    height: 80px;
    right: -10px;
    bottom: 0;
    ${this} a .MuiSvgIcon-root {
      margin-left: 20px;
      margin-top: -20px;
    }
    ${this} a .MuiSvgIcon-root::after {
     content:"Home";
    }
  }
`;



const Button = styled.div`
  float: right;
  font-family: ${theme.font.family};
  text-transform: uppercase;
  font-size: 10px;
  border: none;
  color: ${theme.colors.header_accent_color};

${this}:hover {
  text-decoration: underline;
  font-weight: 900;
}`;
const Body = styled.div`
    background: ${theme.colors.white};
  width: 90%;
  min-height: 90vh;
  height: auto;
  max-height: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 5%;
  position: relative;
  box-shadow: 2px 5px 20px rgba(${theme.colors.gray_300}, .5);
  overflow: hidden; /* Adicionado overflow: hidden */
  
@media screen and (min-width: 541px) {
${this}{

}}
@media screen and (min-width: 950px) {
  ${this} a:hover .MuiSvgIcon-root,
${this} a.active .MuiSvgIcon-root {
  color: ${theme.colors.white};
  opacity: 1;
  transition: 1s;
  transform: scale(2.5) translateY(0.3rem);
  cursor: pointer; 
}
}`;
const StepsMenu = ({children}: { children: React.ReactNode }) => {
return (
      <Body>
  <Logo>
    <img src="favicon.png" className="logo" />
    <CTA>
      <Link href="/">
      <HomeRounded/>
      </Link>
      </CTA>
  </Logo>
  {children}  
  </Body>
);
}
export default StepsMenu;