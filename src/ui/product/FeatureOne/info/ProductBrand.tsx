import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import {H4} from 'components/Typography';

function ProductBrand() {
  const { product } = useProductContext();
  return <H4 textTransform='uppercase'>{product.brand}</H4>;
}

export default ProductBrand;