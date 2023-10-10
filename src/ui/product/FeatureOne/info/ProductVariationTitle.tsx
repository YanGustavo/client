import React from 'react';
import { useProductContext } from '../../ProductContext';
import { P } from 'components/Typography';

function ProductVariantTitle() {
  const { selectedVariation } = useProductContext();

  // Check if selectedVariation exists before accessing its properties
  if (!selectedVariation) {
    return null; // Or provide a default value or handle the absence of 'selectedVariation'
  }

  return <P>{selectedVariation.value}</P>;
}

export default ProductVariantTitle;
