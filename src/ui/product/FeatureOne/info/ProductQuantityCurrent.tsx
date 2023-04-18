import React from 'react';
import { useProductContext } from '../../ProductContext';
import styled from 'styled-components';

const Current = styled.div`
    font-weight: 700;
      width: 50px;
      text-align: center;
`;

function ProductQuantityCurrent() {
  const { selectedQuantity} = useProductContext();
  return <Current>{selectedQuantity}</Current>;
}

export default ProductQuantityCurrent;
