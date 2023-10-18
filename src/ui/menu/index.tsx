'use client';
import { Menu } from 'lib/types/Menu';
import React, { ReactNode } from 'react';
//https://codepen.io/olhilton/pen/dXaqxE
import styled from 'styled-components';
//import MenuBottom from './MenuBottom';
//components
//import MenuCardImage from './MenuImage';
//Feature one components
//import MenuVariant from '../FeatureOne/info/MenuVariation';
//
//import { MenuProvider } from '../MenuContext';
//https://codyhouse.co/demo/mega-dropdown/index.html#0 *** olhar esse link para mega menu
const Body = styled.div`
  width: 300px;
  height: 500px;
  background: white;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  ${this}:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
  ${this} .bottom.clicked {
    transform: translateX(-50%);
  }
`;
const ContainerPreview = styled.div`
  width: 100%;
  height: 100%;
`;
interface Props {
  //Menu: Menu;
  top?: ReactNode;
  center?: ReactNode;
  bottom?: ReactNode;
  inside?: ReactNode;
}

const MenuCard = ({ top, center, bottom, inside }: Props) => { //, Menu
  return (
    // <MenuProvider Menu={Menu}>
      <Body>
        <ContainerPreview>
          {top}
          {center}
          {bottom}
        </ContainerPreview>
        {inside}
      </Body>
    //</MenuProvider>
  );
};
//MenuCard.Image = MenuCardImage;
//feature one components
//MenuCard.Title = MenuTitle;

export default MenuCard;
