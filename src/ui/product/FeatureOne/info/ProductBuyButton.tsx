import React from 'react';
import { ReactNode } from 'react';
import type { Product } from "lib/types/Product";
import { useProductContext } from '../../ProductContext';
//import Button from 'components/Button';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';

const BuyButton = styled.button`
padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: ${theme.colors.tertiary_button_text_color};
	background-color: ${theme.colors.tertiary_button_background};
	box-shadow: 2px 2px 25px -7px ${theme.colors.border_color};
	cursor: pointer;
	&:active {
		transform: scale(0.97);
	}
`;

type Props = {
  children: ReactNode;
};

function ProductBuyButton({ children}: Props) {
  const { handlerAddToCart } = useProductContext();
	 return <BuyButton onClick={() => handlerAddToCart()}>{children}</BuyButton>;
}
export default ProductBuyButton;
