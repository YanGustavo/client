import React from 'react';
import { useProductContext } from '../ProductContext';
//icons
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
//import Button from 'components/Button';
import styled from 'styled-components';

const Done = styled.div`
width: calc(30% - 2px);
          float: left;
          transition: transform 0.5s;
          border-right: solid thin ${(props) => props.theme.desing.border.color};
          height:50%;
          display: flex;
          align-items: center;
          align-content: center;
          ${this} i{
            transform: translateY(-5px) scale(1.5);
            font-size:30px;
            padding:30px;
            color: ${(props) => props.theme.desing.colors.header.color};
          }
`;
function ProductDone(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Done {...props}><i><DoneIcon/></i></Done>
  );
}

export default ProductDone;
