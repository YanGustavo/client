import React from 'react';
import { useProductContext } from '../../ProductContext';
import { H3 } from 'components/Typography';

function ProductShortDescription() {
  const { product } = useProductContext();

  // Check if product exists and has a shortDescription property before accessing it
  if (!product || !product.shortDescription) {
    return null; // Or provide a default value or handle the absence of 'product.shortDescription'
  }

  return <H3>{product.shortDescription}</H3>;
}

export default ProductShortDescription;
