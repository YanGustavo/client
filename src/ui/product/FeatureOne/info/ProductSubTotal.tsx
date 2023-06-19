import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import {P, I} from 'components/Typography';
import Space from 'components/Space';
type Props = {
  currency?: string;
};

function ProductSubTotal({ currency = 'BRL' }: Props) {
  const { selectedQuantity, selectedVariant} = useProductContext();

  return (
    <P>
    <I>SubTotal: <Space size={5} /></I>  
    <P color={theme.colors.secondary_button_background} fontWeight='600'>
      {new Intl.NumberFormat('en-US', {style: 'currency', currency,}).format(typeof selectedVariant?.price === 'string' ? parseFloat(selectedVariant?.price) * parseInt(selectedQuantity): 0)}
    </P>
    </P>
   
  );
}

export default ProductSubTotal;
