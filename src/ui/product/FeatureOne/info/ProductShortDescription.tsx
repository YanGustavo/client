import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
import theme from 'styles/styled-components/theme';
import styled from 'styled-components';
import {H3} from 'components/Typography';

type Props = {
};

function ProductShortDescription({}: Props) {
  const { product} = useProductContext();

  return (
    <H3>
      {product.shortDescription}
    </H3>
  );
}

export default ProductShortDescription;
