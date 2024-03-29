import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Quantity = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.desing.colors.header.background};
    //width: fit-content;
    height: 40px;
    width: 50%;
    max-width: 200px;
    border-radius: 10px;
    user-select: none;
    margin-right: 0;
    //float: left;
`;
type Props = {
  children: ReactNode;
};

function ProductQuantity({ children}: Props) {

  return (
    <Quantity>
       {children}        
   </Quantity>
  );
}

export default ProductQuantity;
