import React from 'react';
import { useProductContext } from '../../ProductContext';
import styled from 'styled-components';
// //icons
import RemoveIcon from '@mui/icons-material/Remove';

const Desc = styled.div`
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
function ProductQuantityDesc() {
  const { handleSelectQuantity} = useProductContext();
  return  <Desc onClick={() => handleSelectQuantity(false)}><RemoveIcon/></Desc>;
}

export default ProductQuantityDesc;
