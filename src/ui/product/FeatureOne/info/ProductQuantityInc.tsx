import React from 'react';
import { useProductContext } from '../../ProductContext';
import { ReactNode } from 'react';
import styled from 'styled-components';
// //icons
import AddIcon from '@mui/icons-material/Add';
const Inc = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
`;
function ProductQuantityInc() {
  const { handleSelectQuantity} = useProductContext();
  return <Inc onClick={() => handleSelectQuantity(true)}><AddIcon/></Inc>;
}

export default ProductQuantityInc;
