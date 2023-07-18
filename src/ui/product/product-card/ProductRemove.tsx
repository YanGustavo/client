import React from 'react';
import { ReactNode } from 'react';
import type { Product } from "lib/types/Product";
import { useProductContext } from '../ProductContext';
//icons
import Tooltip from '@mui/material/Tooltip';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
//import Button from 'components/Button';
import styled from 'styled-components';

const Remove = styled.div`
  width: calc(30% - 1px);
          clear: both;
          border-right: solid thin ${(props) => props.theme.desing.border.color};
          height: 50%;
          background: ${(props) => props.theme.desing.buttons.tertiary.backgroundColor};
          transition: transform 0.5s, background 0.5s;
          display: flex;
          align-items: center;
          align-content: center;
          ${this}:hover{
            background: ${(props) => props.theme.desing.buttons.tertiary.backgroundColor};
          }
          ${this} i{
            transition: transform 0.5s;
            font-size:30px;
            padding:30px;
            color: white;
          }
          ${this}:hover i{
            transform: translateY(-5px) scale(1.5);
          }          
`;

function ProductButton(props: React.HTMLAttributes<HTMLDivElement>) {
  const { handlerRemoveFromCart} = useProductContext();

  return (
    <Remove  {...props} onClick={handlerRemoveFromCart}>
      <i><Tooltip title="Remover do Carrinho"><RemoveShoppingCartIcon/></Tooltip></i>
    </Remove>
  );
}

export default ProductButton;
