import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import {H5, P, I} from 'components/Typography';
import Space from 'components/Space';
type Props = {
  currency?: string;
};

function ProductTotal({ currency = 'BRL' }: Props) {
  const { selectedQuantity, selectedVariation} = useProductContext();

  return (
    <P>
    <I>Total: <Space size={5} /></I>  
    <H5 color={`${(props) => props.theme.colors.secondary_button_background}`} fontWeight={600}>
      {new Intl.NumberFormat('en-US', {style: 'currency', currency,}).format(typeof selectedVariation?.price === 'string' ? parseFloat(selectedVariation?.price) * selectedQuantity: 0)}
    </H5>
    </P>
   
  );
}

export default ProductTotal;
