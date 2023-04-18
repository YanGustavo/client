import  React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Left = styled.div`
        height:100%;
        width: 50%;
        background: ${(props) => props.theme.colors.text_color};
        position: relative;
        float: left;        
`;
type Props = {
  children: ReactNode;
};

function ProductLeft({ children}: Props) {
  return <Left>{children}</Left>;
}

export default ProductLeft;