
import styled from 'styled-components';

const CheckOut = styled.div`

  width: 90%;
  margin: auto;
  height: auto;
  position: relative;
  
  ${this} button{
    width: 100%;
  height: 100%;
  }
  ${this} button:nth-child(1) {
    @keyframes buttonAnimation {
0% { width: 100% }
  25% { width: 90%  }
50% { width: 80% }
100% { width: 100% }
}     
  animation: buttonAnimation 1.5s infinite; 
  }
  ${this} button:nth-child(2) {
    @keyframes buttonAnimation {
0% { width: 80% }
  25% { width: 90%  }
50% { width: 100% }
100% { width: 80% }
}     
  animation: buttonAnimation 1.5s infinite; 
  }
`;
export { CheckOut, };
