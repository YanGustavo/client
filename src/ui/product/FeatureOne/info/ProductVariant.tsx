import * as React from 'react';
import styled from 'styled-components';
//Styles
import theme from 'styles/styled-components/theme';
import { useProductContext } from '../../ProductContext';

const VariantWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 5px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    width: auto;
    height: 100px;
    padding: 3px;
    margin-right: 10px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:first-child,
    &:hover {
      border: 1px solid ${theme.colors.border_color};
    }

    &.active {
      border: 1px solid ${theme.colors.border_color};
    }
    img {
      width: 100%;
      height: 65px;
    }
    button {
      width: 100%;
      text-align: center;
      margin-top: 5px;
      padding: 0.5em;
      font-size: 12px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      word-break: break-all;
    }
  }
`;

export default function ProductVariant() {
  const { product, selectedVariant, handleSelectVariant } = useProductContext();

  return (
    <>
      <VariantWrapper>
        <ul>
          {product.variations.map((variation) => (
            <li
              key={variation.sku}
              onClick={() => handleSelectVariant(variation)}
              className={
                selectedVariant && selectedVariant.sku === variation.sku
                  ? 'active'
                  : ''
              }
            >
              <img src={variation.images[0].link} alt={variation.value} />
              <button>
                {variation.value} - {variation.capacity}
              </button>
            </li>
          ))}
        </ul>
      </VariantWrapper>
    </>
  );
}
