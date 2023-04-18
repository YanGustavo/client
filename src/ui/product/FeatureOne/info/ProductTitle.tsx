import * as React from 'react';
import { useProductContext } from '../../ProductContext';
import {H2} from 'components/Typography';

function ProductTitle() {
  const { product } = useProductContext();
	return <H2>{product.name}</H2>;
}

export default ProductTitle;
