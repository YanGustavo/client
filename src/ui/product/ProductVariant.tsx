import * as React from 'react';
import styled from 'styled-components';
//Styles
import theme from 'styles/styled-components/theme';
import { useProductContext } from './ProductContext';

const Variant = styled.div`
  overflow: auto;

  h3 {
    margin-bottom: 1.1em;
  }

  li {
    float: left;
    width: 35px;
    height: 35px;
    padding: 3px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;

    &:first-child,
    &:hover {
      border: 1px solid ${theme.colors.border_color};
    }
  }

  li:not(:first-child) {
    margin-left: 0.1em;
  }
`;

function ProductVariant() {
  const { product } = useProductContext();
  return (
    <>
      {product[0].variations && product[0].variations.length > 0 && (
        <Variant>
          <h3>SELECT A COLOR</h3>
          <ul>
            {product[0].variations
              .filter((variation) => variation.tipo === 'Cor')
              .map((variation) => (
                <li key={variation.sku}>
                  <img src={variation.imagem} />
                </li>
              ))}
          </ul>
        </Variant>
      )}
    </>
  );
}

export default ProductVariant;
