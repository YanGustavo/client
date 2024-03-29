import styled from 'styled-components';

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
  background: ${(props) => props.theme.desing.colors.header.textColor};
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
const ToggleDrawer = styled.main`
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
  content: "";
  position: absolute;
  top: 1.2rem;
  right: -0.7rem;
  width: 18px;
  height: auto;
  font-size: 0.7rem;
  color: ${(props) => props.theme.desing.colors.header.textColor};
}
  ${this}.isLoaded .toggleIcon  { 
  animation: bounce-down 1.5s infinite; 
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
  color: ${(props) => props.theme.desing.colors.header.textColor};
}
  ${this}.isLoaded .toggleIcon  { 
  animation: bounce-down 1.5s infinite; 
} 
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
@media screen and (min-width: 950px) {  
  ${this} .userName {
    display: block;
  }
}
`;


const Container = styled.section`
  margin-left: 2.5%;
  max-width: 95%;
  min-width: 95%;
  margin-top: 1%;
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;

  @media (max-width: 768px) { // Estilo para telas menores, como celulares
    flex-direction: column; // Empilhe os elementos verticalmente
  }
`;

const ContainerFlush = styled.div`
  background: #FFFFFF;
  border-radius: 0.2rem;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) { // Estilo para telas maiores, como PCs
    width: 48%; // Defina a largura para que dois contêineres caibam lado a lado
    margin-right: 2%; // Adicione um espaço entre os contêineres
    &:nth-child(2n) {
      margin-right: 0; // Remova a margem direita do último contêiner na linha
    }
  }
`;
const Item = styled.div`
width: 100%;

@media (min-width: 768px) { // Estilo para telas maiores, como PCs
  width: 48%; // Defina a largura para que dois contêineres caibam lado a lado
  margin-right: 2%; // Adicione um espaço entre os contêineres
  &:nth-child(2n) {
    margin-right: 0; // Remova a margem direita do último contêiner na linha
  }
}
`;
const ContainerDrawable = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
 // cursor: grab;
//cursor: -webkit-grab;
cursor: move;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Main = styled.main`
  margin-top: 105px;
  width: 100vw;
  height: auto;
  position: relative;
  display: block;
  position: relative;
  overflow-y: initial;
  overflow-x: hidden;
    /* The sticky class is added to the header with JS when it reaches its scroll position */
    .sticky {
  position: fixed;
  top: 75px;
  right: 25px;
}
`;
const Template = styled.div`
 margin:0;
  padding: 0;
  width: 100vw;
  height: 100vh;  
  position: relative;
  overflow-y: auto;
  overflow-x: hidden; 
  @media screen and (min-width: 541px) {//medium

    
}
@media screen and (min-width: 650px) {//big
  
}


@media screen and (min-width: 950px) {//huge

}@media screen and (min-width: 951px) {

}
@media screen and (min-width: 1100px) {//huge_one
 
}
`;
export {Container, ContainerFlush, Item, ContainerDrawable, Main, Template, ShopCart, ToggleDrawer, ToggleMenu, ProfileContainer,}
