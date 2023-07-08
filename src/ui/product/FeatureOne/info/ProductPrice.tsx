import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import {H5} from 'components/Typography';

type Props = {
  currency?: string;
};

function ProductPrice({ currency = 'BRL' }: Props) {
  const { selectedVariation} = useProductContext();

  return (
    <H5 color={theme.colors.secondary_button_background} fontWeight={600}>
      {new Intl.NumberFormat('en-US', {style: 'currency', currency,}).format(typeof selectedVariation?.price === 'string' ? parseFloat(selectedVariation?.price) : 0)}
    </H5>
  );
}

export default ProductPrice;
