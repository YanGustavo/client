import React from 'react';
import { ReactNode } from 'react';
import { useProductContext } from '../ProductContext';

//import Button from 'components/Button';
import styled from 'styled-components';

const BuyButton = styled.div`
        float: right;
          width: calc(30% - 2px);
          height: 100%;
          background: ${(props) => props.theme.desing.colors.footer.background};
          transition: background 0.5s;
          border-left: solid thin ${(props) => props.theme.desing.colors.header.color};
          display: flex;
          align-items: center;
          align-content: center;
           ${this}:hover{
            background: ${(props) => props.theme.desing.colors.success.color};
          }
          ${this} i{
            font-size:30px;
            padding:30px;
            color:  ${(props) => props.theme.desing.buttons.secondary.color};
            transition: transform 0.5s;
          }
         
          ${this}:hover i{
            transform: translateY(-5px) scale(1.5);
          }
`;
type Props = {
  children: ReactNode;
};

function ProductButton({children}: Props) {
  const { handlerAddToCart} = useProductContext();

  return (
    <BuyButton onClick={handlerAddToCart}>
      {children}
    </BuyButton>
  );
}

export default ProductButton;
