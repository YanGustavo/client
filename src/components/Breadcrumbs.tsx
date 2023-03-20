'use client';
import React from "react";
import Link from 'next/link';
import { ChevronRightRounded } from "@mui/icons-material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styled from 'styled-components';
import {Container} from 'templates/base';

import theme from 'styles/styled-components/theme';

const Body = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
 font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.white};
`;
const Right = styled.div`
 padding: 0;
  margin:0;
  display: flex;
  justify-content: space-between;
`;
const P = styled.p`
font-size: 12px;
  color: ${theme.colors.white};
  font-weight: 400;
`;
const I = styled.i`
background: ${theme.colors.white};
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  ${this} .MuiSvgIcon-root {
  font-size: 1rem !important;
}
`;
type BreadcrumbsProps = {
  data: Object,
  subtitle?: String,
  linkHref?: Object,
}
const Breadcrumbs = ({data, subtitle, linkHref}: BreadcrumbsProps)  => {
  console.log(data);
  //const {brand, name} = data;
  const brand = "Aplle";
  const name = "iPhone 14";
  return (
 
    <Container>
      <Body>
      <Left>
      <Link href="/" >
      Página Inicial
          </Link>          
        <NavigateNextIcon/>
        <Link href={`/b/${brand}`}>
          {brand}
          </Link>        
        <NavigateNextIcon/>
          {name}
        </Left>
      <Right>
        {!(subtitle === undefined) && ( 
          <>
        <P>{subtitle}</P>
        {!(linkHref === undefined) && ( 
          <Link href={linkHref}>
        <I>
          <ChevronRightRounded/>
        </I>
        </Link>
        )}
        </>
        )}
     
      </Right>
      </Body>
    </Container>
  );
}
export default Breadcrumbs;