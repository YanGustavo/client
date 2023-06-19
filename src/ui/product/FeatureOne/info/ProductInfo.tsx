import * as React from 'react';
import { ReactNode } from 'react';
//Styles
import styled from 'styled-components';

const Info = styled.div`
padding: 0.8em 0;
width: 400px;
position: relative;
`;

export type Props = {
  children: ReactNode;
};

function ProductInfo({ children }: Props) {
  return <Info>{children}</Info>;
}

export default ProductInfo;