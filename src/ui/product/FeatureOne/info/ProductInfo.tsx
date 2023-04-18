import * as React from 'react';
import { ReactNode } from 'react';
//Styles
import styled from 'styled-components';

const Info = styled.div`
padding: 0.8em 0;
max-width: 500px;
`;

export type Props = {
  children: ReactNode;
};

function ProductInfo({ children }: Props) {
  return <Info>{children}</Info>;
}

export default ProductInfo;