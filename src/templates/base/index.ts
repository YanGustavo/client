import styled from 'styled-components';
import theme from 'styles/styled-components/theme';

export const Container = styled.section`
  margin-left: 2.5%;
  max-width: 95%;
  min-width: 95%;
  margin-top: 1%;
  position: relative; 
  display: flex;
  align-content: center;
  align-items: center;
`;
export const ContainerFlush = styled.div`
background: #FFFFFF;
  border-radius: 0.2rem;
  padding: 1rem;
  width: 100%;
`;

export const ToggleMenu = styled.main`
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
  content: "Menu";
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
export const Main = styled.main`
  margin-top: 105px;
  width: 100vw;
  height: auto;
  position: relative;
  display: block;
  position: relative;
  overflow-y: initial;
  overflow-x: hidden;
`;
export const Template = styled.div`
 margin:0;
  padding: 0;
  width: 100vw;
  height: 100vh;  
  position: relative;
  overflow-y: auto;
  overflow-x: hidden; 
  @media screen and (min-width: 541px) {//medium
  ${Main}{
    width: 100vw; 
  }
    
}
@media screen and (min-width: 650px) {//big
  ${Main}{ 
    width: 100vw;
  }
}
@media screen and (min-width: 950px) {//huge
  ${Main}{
    width: calc(100vw - 325px);
  }
  ${ToggleMenu}{
    display: none;
  }
}
@media screen and (min-width: 1100px) {//huge_one
  ${Main}{
     width: calc(100vw - 350px);
  }
}
`;
