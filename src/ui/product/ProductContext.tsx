import * as React from 'react';
import { createContext, useContext } from 'react';
import type { Product } from "lib/types/Product";


const ProductContext = createContext<{ product: Product } | null>(null);

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard component'
    );
  }
  return context;
}

export default ProductContext;
