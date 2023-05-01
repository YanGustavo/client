import * as React from 'react';
import { ReactNode } from 'react';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';

const Quantity = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.header_background};
    width: fit-content;
    height: 55px;
    width: 50%;
    border-radius: 10px;
    user-select: none;
    margin-right: 0;
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