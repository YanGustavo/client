import React from 'react';
import { useProductContext } from '../../ProductContext';
import { H2 } from 'components/Typography';

function ProductTitle() {
  const { product } = useProductContext();

  // Check if product exists and has a name property before accessing it
  if (!product || !product.name) {
    return null; // Or provide a default value or handle the absence of 'product.name'
  }

  return <H2 textTransform='uppercase'>{product.name}</H2>;
}

export default ProductTitle;
