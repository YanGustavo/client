import  React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Center = styled.div`
display: none;
  height: 20%;
      width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  position: relative;
`;
type Props = {
  children: ReactNode;
};

function ProductCenter({ children}: Props) {
  return (
  <Center>
  {children}
  </Center>);
};
export default ProductCenter;