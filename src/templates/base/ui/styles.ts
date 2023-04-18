import styled from 'styled-components';

const Container = styled.section`
  margin-left: 2.5%;
  max-width: 95%;
  min-width: 95%;
  margin-top: 1%;
  position: relative; 
  display: flex;
  align-content: center;
  align-items: center;
`;
const ContainerFlush = styled.div`
background: #FFFFFF;
  border-radius: 0.2rem;
  padding: 1rem;
  width: 100%;
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
    width: calc(100vw - 280px);
  }
  .sticky {
  position: fixed;
  top: 75px;
  right: 325px;
}
}
@media screen and (min-width: 1100px) {//huge_one
  ${Main}{
     width: calc(100vw - 300px);
  }
  .sticky {
  position: fixed;
  top: 75px;
  right: 350px;
}
}
`;
export {Container, ContainerFlush, ContainerDrawable, Main, Template, }
