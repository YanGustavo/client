import * as React from 'react';
import Rating from 'ui/Rating';
import { useProductContext } from './ProductContext';

function ProductRating() {
  const { product } = useProductContext();
  return (
    <Rating rating={4.5}/>
  );
}
export default ProductRating;
