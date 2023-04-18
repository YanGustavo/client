import React from 'react';
import { ReactNode } from 'react';
import type { Product } from "lib/types/Product";
import { useProductContext } from '../ProductContext';

//import Button from 'components/Button';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';

const BuyButton = styled.div`
        float: right;
          width: calc(30% - 2px);
          height: 100%;
          background: ${theme.colors.footer_accent_color};
          transition: background 0.5s;
          border-left: solid thin ${theme.colors.link_color_hover};;
          display: flex;
          align-items: center;
          align-content: center;
           ${this}:hover{
            background: ${theme.colors.success_color};
          }
          ${this} i{
            font-size:30px;
            padding:30px;
            color:  ${theme.colors.secondary_button_text_color};
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
