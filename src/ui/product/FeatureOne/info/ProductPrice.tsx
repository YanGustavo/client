import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';

const Price = styled.div`
  margin: 1.5em 0;
  color: ${theme.colors.secondary_button_background};
  font-size: 1.8em;

  span {
    padding-left: 0.15em;
    font-size: 2.9em;
  }
`;

type Props = {
  currency?: string;
};

function ProductPrice({ currency = 'BRL' }: Props) {
  const { selectedVariant} = useProductContext();

  return (
    <Price>
{new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
}).format(typeof selectedVariant?.price === 'string' ? parseFloat(selectedVariant?.price) : 0)}

    </Price>
  );
}

export default ProductPrice;
