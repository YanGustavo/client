import * as React from 'react';
import { useProductContext } from '../ProductContext';
import RandomImage from 'ui/RandomImage';

function ProductImage() {
  const { product, selectedVariation} = useProductContext();
  return   <><RandomImage images={selectedVariation.images} alt={product.name} /></>;
}
export default ProductImage;