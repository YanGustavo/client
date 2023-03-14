import styled from 'styled-components';

export const BaseTemplate = styled.div`
 margin:0;
  padding: 0;
  width: 100vw;
  height: 100vh;  
  position: relative;
  overflow-y: auto;
  overflow-x: hidden; 
`;
export const BaseMain = styled.main`
  margin-top: 105px;
  width: 100vw;
  height: auto;
  position: relative;
  display: block;
  position: relative;
  overflow-y: initial;
  overflow-x: hidden;
@media screen and (min-width: 541px) {//medium
  ${this}{
    width: 100vw; 
  }
    
}
@media screen and (min-width: 650px) {//big
  ${this}{ 
    width: 100vw;
  }
}
@media screen and (min-width: 950px) {//huge
  ${this}{
    width: calc(100vw - 325px);
  }
}
@media screen and (min-width: 1100px) {//huge_one
  ${this}{
     width: calc(100vw - 350px);
  }
}

`;
export const Container = styled.section`
  width: 100%;
  max-width: 1480px;
  margin-top: 1%;
  position: relative; 
  display: flex;
  align-content: center;
`;
export const ContainerFlush = styled.div`
background: #FFFFFF;
  border-radius: 0.2rem;
`;
