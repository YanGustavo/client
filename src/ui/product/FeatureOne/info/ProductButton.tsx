import React from 'react';
import { ReactNode } from 'react';
import type { Product } from "lib/types/Product";
import { useProductContext } from '../../ProductContext';
//import Button from 'components/Button';
//Styles
import styled from 'styled-components';
const Button = styled.button`
padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: ${(props) => props.theme.desing.buttons.tertiary.color};
	background-color: ${(props) => props.theme.desing.buttons.tertiary.backgroundColor};
	box-shadow: 2px 2px 25px -7px ${(props) => props.theme.desing.border.color};
	cursor: pointer;
	&:active {
		transform: scale(0.97);
	}
`;
type Props = {
  children: ReactNode;
  onClick: (product: Product) => void;
};
function ProductButton({ children, onClick }: Props) {
  const { product } = useProductContext();
	return <Button onClick={() => onClick(product)}>{children}</Button>;
}
export default ProductButton;
