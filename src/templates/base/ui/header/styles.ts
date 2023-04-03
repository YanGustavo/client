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
const ShopCart = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
${this} .cart {
  font-size: 30px;
  color: #373848;
}
${this} .cart_content {
  width: 20px;
  height: 20px;
  background: ${theme.colors.heading_color};
  border-radius: 100%;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: -8px;
}
${this} .cart_content p {
  font-weight: 500;
  color: #faf9fb;
}
${this} .noCartItem {
  display: none;
}
`;
const ToggleMenu = styled.main`
transform: rotate(90deg);
@keyframes toggleMenuAnimation {
	0% { opacity: 0; transform: translateY(-2px); color: indigo;  }
  25% { opacity: 0; transform: translateY(-2px); color: green;  }
	50% { opacity: 1; transform: translateY(0); color: greenyellow;}
	100% { opacity: 0; transform: translateY(2px); color: green;}
}
${this} .hidden {
  display:none;
}

${this} .toggleIcon {
  color: #373848;
  font-size: 30px !important;
  transition: all 0.5s ease; 
  animation: toggleMenuAnimation 1.5s infinite; 
  
}
${this}::after  {
  transform: rotate(-90deg);
  content: "";
  position: absolute;
  top: 1.2rem;
  right: -0.7rem;
  width: 18px;
  height: auto;
  font-size: 0.7rem;
  color: ${theme.colors.heading_color};
}
 /* ${this}.isLoaded .toggleIcon  { 
  animation: bounce-down 1.5s infinite; 
} */
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  ${this} .imgBox {
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
${this} .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
${this} .userName {
  font-size: 16px;
  margin-left: 8px;
  font-weight: 500;
  display: none;
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
@media screen and (min-width: 950px) {  
  ${ProfileContainer} .userName {
    display: block;
  }
  
  ${ToggleMenu}{
    display: none;
  }
}
 @keyframes invertLineGradientTop {  
  from,  
      to {  
           animation-timing-function: ease-in;  
           box-shadow:  
                0 0 0 hsl(0,0%,80%),  
                0.1rem 0 0 hsl(0,0%,100%),  
                -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);  
           transform: rotateY(-10deg);  
      }  
      25%,  
      75% {  
           animation-timing-function: ease-out;  
           box-shadow:  
                0 0 0 hsl(0,0%,80%),  
                0 0 0 hsl(0,0%,100%),  
                -0.25rem -0.05rem 1rem 0.15rem hsla(0,0%,0%,0.3);  
           transform: rotateY(0deg);  
      }  
      50% {  
           animation-timing-function: ease-in;  
           box-shadow:  
                -0.1rem 0 0 hsl(0,0%,80%),  
                0 0 0 hsl(0,0%,100%),  
                -0.3rem -0.1rem 1.5rem 0.3rem hsla(0,0%,0%,0.3);  
           transform: rotateY(10deg);  
      }   
 } 
`;
export {TopAnnouncement , Marquee, HeaderCenter, Logo, InputBox,ShopCart, ToggleMenu, ProfileContainer, Header,}
//  background-image: linear-gradient(to right, rgb(255, 255, 74), rgb(252, 208, 0), rgb(255, 193, 18), rgb(255, 193, 18), rgb(255, 138, 0), rgb(255, 95, 95), rgb(255, 37, 58), rgb(255, 55, 168), rgb(199, 57, 255), rgb(164, 0, 225), rgb(46, 206, 255), rgb(0, 134, 255), rgb(114, 247, 114), rgb(0, 214, 4));
//   background: linear-gradient(to right, rgb(0, 214, 4) , rgb(114, 247, 114), rgb(0, 134, 255),rgb(46, 206, 255),rgb(164, 0, 225),rgb(199, 57, 255),rgb(255, 55, 168),rgb(255, 37, 58),rgb(255, 95, 95),rgb(255, 138, 0),rgb(255, 193, 18) ,rgb(255, 193, 18), rgb(252, 208, 0) ,rgb(255, 255, 74));