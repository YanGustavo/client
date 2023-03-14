import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const StepCheckoutStyle = styled.div`

.container {
  background: ${theme.colors.white};
  width: 90rem;
  height: 420px;
  margin: 0 auto;
  position: relative;
  margin-top: 10%;
  box-shadow: 2px 5px 20px rgba(${theme.colors.gray_300}, .5);
}

.logo {
  float: right;
  margin-right: 12px;
  margin-top: 12px;
  font-family: ${theme.font.family};
  color: ${theme.colors.heading_color};
  font-weight: 900;
  font-size: 1.5em;
  letter-spacing: 1px;
}

.CTA {
  width: 80px;
  height: 40px;
  right: -20px;
  bottom: 0;
  margin-bottom: 90px;
  position: absolute;
  z-index: 1;
  background: ${theme.colors.gray_300};
  font-size: 1em;
  transform: rotate(-90deg);
  transition: all .5s ease-in-out;
  cursor: pointer;
  h1 {
    color: ${theme.colors.white};
    margin-top: 10px;
    margin-left: 9px;
  }
  &:hover {
    background:${theme.colors.heading_color};
    transform: scale(1.1);
  }
}

.leftbox {
  float: left;
  top: -5%;
  left: 5%;
  position: absolute;
  width: 15%;
  height: 110%;
  background: ${theme.colors.heading_color};
  box-shadow: 3px 3px 10px rgba($gray, .5);
  border: 4px dotted ${theme.colors.white};
}
nav a {
  list-style: none;
  padding: 30px;  
  color: ${theme.colors.white};
  display: block;
  justify-content: center;
  align-items: center;  
  &:hover {
    
  }
  &:first-child {
    margin-top: 7px;
  }
}
nav a .MuiSvgIcon-root {
  opacity: 0.5;
  transition: 1s;
  font-size: 1.1em !important;
  color: #faf9fb;
  transition: all .3s ease-in-out;
}

nav a:hover .MuiSvgIcon-root,
nav a.active .MuiSvgIcon-root {
  color: ${theme.colors.white};
  opacity: 1;
  transition: 1s;
  transform: scale(1.2);
  cursor: pointer;
}

.rightbox {
  float: right;
  width: 60%;
  height: 100%;
}


.profile, .payment, .subscription, .privacy, .settings {
  transition: opacity .5s ease-in;
  position: absolute;
  width: 70%;
}

h1 {
  font-family: ${theme.font.family};
  color: ${theme.colors.gray_300};
  font-size: 1em;
  margin-top: 40px;
  margin-bottom: 35px;
}

h2 {
  color: ${theme.colors.gray_300};
  font-family: ${theme.font.family};
  width: 80%;
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 1px;
  margin-left: 2px;
}

p {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, ${theme.colors.header_light}, rgba(${theme.colors.gray_300},.5)) 1 0%;
  border-top: 0;
  width: 80%;
  font-family: ${theme.font.family};
  font-size: .7em;
  padding: 7px 0;
  color: ${theme.colors.black};
}
span {
  font-size: .5em;
  color: ${theme.colors.gray_300};
}

.btn {
  float: right;
  font-family: ${theme.font.family};
  text-transform: uppercase;
  font-size: 10px;
  border: none;
  color: ${theme.colors.header_light};
}

.btn:hover {
  text-decoration: underline;
  font-weight: 900;
}

input {
  border: 1px solid lighten(${theme.colors.gray_300},40%); 
  font-family: ${theme.font.family};
  padding: 2px;
  margin: 0;
}

.privacy h2{
  margin-top: 25px;
}

.settings h2{
  margin-top: 25px;
}

.noshow {
  opacity: 0;
}
@media screen and (min-width: 541px) {

}
@media screen and (min-width: 650px) {

}
@media screen and (min-width: 950px) {

}
@media screen and (min-width: 1100px) {
  .container {
    //left: calc(100% -10%);
    //width: 80%;
}
}
`;
