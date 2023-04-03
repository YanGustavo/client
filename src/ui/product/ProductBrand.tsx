import * as React from 'react';
import { useProductContext } from './ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';

const Brand = styled.h1`
margin-bottom: 0.1em;
		color: ${theme.colors.accent_color};
		font-size: 1.5em;
		font-weight: 900;
`;
function ProductBrand() {
  const { product } = useProductContext();
  return <Brand>{product.marca}</Brand>;
}

export default ProductBrand;