import  React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Details = styled.div`
         padding: 0.5rem 0.2rem 0.5rem 0.2rem;
          float: left;
          width: calc(80% - 40px);
          height: 100%;
          color: ${(props) => props.theme.desing.buttons.secondary.color};
          position: relative;
          ${this} h1{
            font-size: 1.2rem;

          margin:0;
          padding:0;
      }
      ${this} p {
        position: absolute;
        bottom: 0.55rem;
        right: 0.5rem;
            font-size: 1rem;
          margin:0;
          padding:0;
          float: right;
      }
`;
type Props = {
  children: ReactNode;
};

function ProductDetails({ children}: Props) {
  return <Details>{children}</Details>;
}

export default ProductDetails;