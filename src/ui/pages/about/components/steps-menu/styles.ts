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
    background:${theme.colors.secondary_button_background};
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
const LeftBox = styled.div`
  float: left;
  top: -5px;
  left: 10px;
  position: absolute;
  width: 10%;
  max-width: 15%;
  height: calc(100% + 10px);
  background: ${theme.colors.heading_color};
  box-shadow: 3px 3px 10px rgba($gray, .5);
  border: 1px dotted ${theme.colors.white};
`;
const Nav = styled.div`
${this} a {
  list-style: none;
  padding: 1rem 0.2rem 1rem 0.2rem;  
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-wrap: wrap;
  margin: auto;
  ${this}:hover {    
  }
  ${this}:first-child {
    margin-top: 7px;
  }
}
${this} a .MuiSvgIcon-root {
  opacity: 0.5;
  transition: 1s;
  font-size: 1.1em !important;
  color: #faf9fb;
  transition: all .3s ease-in-out;
}
${this} a.active {
  background-color: ${theme.colors.secondary_button_background};
}
${this} a:hover .MuiSvgIcon-root,
${this} a.active .MuiSvgIcon-root {
  color: ${theme.colors.white};
  opacity: 1;
  transition: 1s;
  transform: scale(1.5) translateY(0.1rem);
  cursor: pointer;  
  
}
${this} a i {
  padding: 0.2rem;
display: none;
transition: all .3s ease-in-out;
}
${this} a:hover i, ${this} a.active i {
  opacity: 0;
  font-size: 0.4rem;
}
`;
const RightBox = styled.div`
  float: right;
  width: 70%;
  height: 95%;
  position: relative;
  overflow-y: auto;

  h1 {
    width: 100%;
    display: flex;
    align-items: center;
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
}
`;
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
  ${this} h1 {
  font-family: ${theme.font.family};
  color: ${theme.colors.gray_300};
  font-size: 1em;
  margin-top: 40px;
  margin-bottom: 35px;
  overflow-y: auto;
}

${this} h2 {
  color: ${theme.colors.gray_300};
  font-family: ${theme.font.family};
  width: 80%;
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 1px;
  margin-left: 2px;
}

${this} p {  
  width: 80%;
  font-family: ${theme.font.family};
  font-size: 1rem;
  padding: 7px 0;
  color: ${theme.colors.black};
}
${this} span {
  font-size: 0.8rem;
  color: ${theme.colors.gray_300};
}
${this} input {
  border: 1px solid lighten(${theme.colors.gray_300},40%); 
  font-family: ${theme.font.family};
  padding: 2px;
  margin: 0;
}
@media screen and (min-width: 541px) {
${this}{

}
}
@media screen and (min-width: 650px) {
  ${Nav} a i {
  display: inline-block;
  font-size: 0.6rem; 
}
}
@media screen and (min-width: 950px) {
  ${this} a:hover .MuiSvgIcon-root,
${this} a.active .MuiSvgIcon-root {
  color: ${theme.colors.white};
  opacity: 1;
  transition: 1s;
  transform: scale(2.5) translateY(0.3rem);
  cursor: pointer;  
  
}
  ${LeftBox}{
    border: 4px dotted ${theme.colors.white};
}
}
@media screen and (min-width: 1100px) {
  ${Nav} a i {
  display: inline-block;
  font-size: 0.7rem; 
}
}
`;
export {Body, Logo, CTA, Nav, LeftBox, RightBox, Button};