import * as React from 'react';
import { useProductContext } from '../ProductContext';
import RandomImage from 'ui/RandomImage';

function ProductImage() {
  const { product, selectedVariation } = useProductContext();

  if (!selectedVariation) {
    // Handle the case where selectedVariation is null
    return <div>No variation selected.</div>; // You can customize the message as needed
  }

  return (
    <>
      <RandomImage images={selectedVariation.images} alt={product.name} />
    </>
  );
}

export default ProductImage;
