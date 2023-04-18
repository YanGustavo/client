import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Top = styled.div`
  height: 60%;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  position: relative;
  ${this} img {
    width: 100%;
    height: 100%;
  }
`;
type Props = {
  children: ReactNode;
};

function ProductTop({ children }: Props) {
  return <Top>{children}</Top>;
}

export default ProductTop;
