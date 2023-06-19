import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import {H5} from 'components/Typography';

type Props = {
  currency?: string;
};

function ProductPrice({ currency = 'BRL' }: Props) {
  const { selectedVariant} = useProductContext();

  return (
    <H5 color={theme.colors.secondary_button_background} fontWeight='600'>
      {new Intl.NumberFormat('en-US', {style: 'currency', currency,}).format(typeof selectedVariant?.price === 'string' ? parseFloat(selectedVariant?.price) : 0)}
    </H5>
  );
}

export default ProductPrice;
