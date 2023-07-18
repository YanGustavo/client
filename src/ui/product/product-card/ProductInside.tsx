import  React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
//Icons
import InfoIcon from '@mui/icons-material/Info';


const Icon = styled.div`
position: absolute;
      right:85px;
      top:85px;
      color: white;
      opacity: 1;
`;
const Contents = styled.div`
padding: 5%;      
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
      opacity: 0;
      ${this} table{
        text-align: left;
        width:100%;
        opacity: 0;
      }
`;
const Inside = styled.div`
    z-index: 9;
    background-color: ${(props) => props.theme.desing.colors.background.light};
    background: ${(props) => props.theme.desing.colors.background.lightRadial};
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    
    ${this}:hover{
     background: ${(props) => props.theme.desing.colors.background.light};
      width:100%;
      right:0;
      top:0;
      border-radius: 0;
      height:80%;
      ${Icon} {
        opacity: 0;
        right:15px;
        top:15px;
      }
      ${Contents} {
        opacity: 1;
        transform: scale(1);
        transform: translateY(0);        
      }
      ${Contents} table{
        opacity: 1;
      }
      ${Contents}  h1, ${Contents} p, ${Contents} table{
        color: white;
      }
      ${Contents}  h1{
        font-size: 1.2rem;
      }
      ${Contents}  p{
        font-size: 0.8rem
      }
    }    
`;
type Props = {
  children: ReactNode;
};

function ProductInside({ children}: Props) {
  return (
  <Inside>
    <Icon>
      <i><InfoIcon/></i>
      </Icon>
  <Contents>
    {children}
    </Contents>
    </Inside>
    );
}

export default ProductInside;