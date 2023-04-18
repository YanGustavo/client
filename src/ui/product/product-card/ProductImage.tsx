import * as React from 'react';
import { useProductContext } from '../ProductContext';
import RandomImage from 'ui/RandomImage';

function ProductImage() {
  const { product, selectedVariant } = useProductContext();
  return   <><RandomImage images={selectedVariant.image} alt={product.name} /></>;
}
export default ProductImage;