import styled from 'styled-components';


import theme from 'styles/styled-components/theme';
const ButtonsFullAlign = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 1rem;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ButtonsAlign = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  button {
    width: 48%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerFlush = styled.div`
background: ${theme.colors.right_menu_background_child_rgb};
  border-radius: 0.2rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid ${theme.colors.border_color};
`;
const Container = styled.div`
margin-left: 10%;
  width: 80%;
  margin-top: 1%;
  position: relative; 
  display: flex;
  align-content: center;
  align-items: center;
  @media screen and (min-width: 541px) {
  ${this} {
    margin-left: 2.5%;
    width: 95%;
  }
}
@media screen and (min-width: 650px) {

}
@media screen and (min-width: 950px) {

}
@media screen and (min-width: 1100px) {

}
`;
const ToggleIcon = styled.div`
color: #373848;
  font-size: 30px !important;
  transition: all 0.5s ease;
`;
// const CloseMenu = styled.div`
// @keyframes closeMenuAnimation {
// 	0% { opacity: 1; transform: translateY(-2px); color: black;  }
//   25% { opacity: 0.8; transform: translateY(-2px); color: green;  }
// 	50% { opacity: 1; transform: translateY(0); color: black;}
// 	100% { opacity: 1; transform: translateY(2px); color: green;}
// }  
//   position: absolute;
//   top: 0.2rem;
//   right: 1rem;
//   z-index: 109;
//   transform: translateX(0);
//   background-color: #FFFFFF;
//   border-radius: 50%;
//   padding: 0.2rem;
//   display: flex;
//   align-items: center;
//   animation: closeMenuAnimation 1.5s infinite; 

//  `;
const MenuRightTop = styled.div`
width: 100%;
height: auto;
max-height: 2rem;
`;
const MenuRightCenter = styled.div`
width: 100%;
height: 90rem;
overflow-y: auto;
overflow-x: hidden;
scrollbar-width: thin;
padding-bottom: 2rem;
  scrollbar-color: ${props => props.theme.colors.header_text_color} ${props => props.theme.colors.header_text_color};
  ${this}::-webkit-scrollbar {
  width: 0.4rem;  
  border-radius: 3rem;             /* width of the entire scrollbar */
}
  ${this}::-webkit-scrollbar-track {
  background: transparent;
}
${this}::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.header_text_color} ;
  border-radius: 6px;
  border: 3px solid ${props => props.theme.colors.header_text_color};
}
`;
const DebitCardContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;
`;
const MenuRightBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0; 
  width: 100%;
  height: 3rem;
  background: ${theme.colors.right_menu_background_child_rgb};
  z-index: 106;
  padding-top: 0;
`;

//right_menu_background_childrens_rgb
const MenuRightChild = styled.div`
background: ${theme.colors.right_menu_background_child_rgb};

`;
const Body = styled.div`
  position: fixed;  
  top: 105px;
  right: 0;
  width: 100vw;
  height: calc(100vh - 105px);
  background: ${theme.colors.right_menu_background_rgb};
  z-index: 105;
  display: flex;
  flex-direction: column;
  align-items: center;  
  transform: translateX(200%);  
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  border-left: 1px solid ${theme.colors.header_text_color};
  padding-bottom: 2rem;
  &.active {
  transform: translateX(0%);  
  }
  
@media screen and (min-width: 541px) {
  ${this} {
    width: 250px;
    padding-bottom: 3rem;
  }
}
@media screen and (min-width: 650px) {
  ${this} {
  width: 260px;
  } 
}
@media screen and (min-width: 950px) {
  ${this}{
  width: 280px; 
  transform: translateX(0%);
  }
}
@media screen and (min-width: 1100px) {
  ${this} {
  width: 300px;
  }
}
`;
export {ButtonsFullAlign, ButtonsAlign, Layout, Container, ContainerFlush, ToggleIcon, MenuRightTop, MenuRightCenter, MenuRightBottom, DebitCardContainer,Body, MenuRightChild,};