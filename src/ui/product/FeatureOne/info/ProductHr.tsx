import * as React from 'react';
import { useProductContext } from '../../ProductContext';
//Styles
// import theme from 'styles/styled-components/theme';
// import styled from 'styled-components';
import {Hr} from "components/Typography";

type Props = {
  children: React.ReactNode;
};

function ProductHr({ children}: Props) {
  const { product } = useProductContext();
	return <Hr>{children}</Hr>;
}

export default ProductHr;
