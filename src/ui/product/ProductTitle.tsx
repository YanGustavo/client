import * as React from 'react';
import { useProductContext } from './ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';

const Title = styled.div`
		margin-bottom: 0.1em;
		color: ${theme.colors.accent_color};
		font-size: 1.5em;
		font-weight: 900;
`;

function ProductTitle() {
  const { product } = useProductContext();
	return <Title>{product.descricao}</Title>;
}

export default ProductTitle;
