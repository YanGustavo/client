import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import {H2} from 'components/Typography';

function ProductTitle() {
  const { product } = useProductContext();
	return <H2 textTransform='uppercase'>{product.name}</H2>;
}

export default ProductTitle;
