import  React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const RightDetails = styled.div`
 padding: 20px;
float: right;
   width: calc(70% - 40px);
   ${this} h1{
    font-size: 1.2rem;
          margin:0;
          padding:0;
      }
      ${this} p{
        font-size: 0.7rem;
          margin:0;
          padding:0;
      }
`;
type Props = {
  children: ReactNode;
};

function ProductRightDetails({ children}: Props) {
  return <RightDetails>{children}</RightDetails>;
}

export default ProductRightDetails;