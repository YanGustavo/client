'use client';
import { Product } from 'lib/types/Product';
import React, { ReactNode } from 'react';
//https://codepen.io/olhilton/pen/dXaqxE
import styled from 'styled-components';
import ProductBottom from './ProductBottom';
import ProductBuyButton from './ProductBuyButton';
import ProductCenter from './ProductCenter';
import ProductDetails from './ProductDetails';
import ProductDone from './ProductDone';
//components
import ProductCardImage from './ProductImage';
import ProductInside from './ProductInside';
import ProductLeft from './ProductLeft';
import ProductRemove from './ProductRemove';
import ProductRight from './ProductRight';
import ProductRightDetails from './ProductRightDetails';
import ProductTop from './ProductTop';
import ProductPrice from '../FeatureOne/info/ProductPrice';
import ProductShortDescription from '../FeatureOne/info/ProductShortDescription';
import ProductTitle from '../FeatureOne/info/ProductTitle';
import ProductVariantTitle from '../FeatureOne/info/ProductVariationTitle';
//Feature one components
import ProductVariant from '../FeatureOne/info/ProductVariation';
//
import { ProductProvider } from '../ProductContext';

const Body = styled.div`
  width: 100%;
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
  product: Product;
  top?: ReactNode;
  center?: ReactNode;
  bottom?: ReactNode;
  inside?: ReactNode;
}

const ProductCard = ({ top, center, bottom, inside, product }: Props) => {
  return (
    <ProductProvider product={product}>
      <Body>
        <ContainerPreview>
          {top}
          {center}
          {bottom}
        </ContainerPreview>
        {inside}
      </Body>
    </ProductProvider>
  );
};
ProductCard.Image = ProductCardImage;
ProductCard.Top = ProductTop;
ProductCard.Center = ProductCenter;
ProductCard.Bottom = ProductBottom;
ProductCard.Inside = ProductInside;
ProductCard.Left = ProductLeft;
ProductCard.Right = ProductRight;
ProductCard.Details = ProductDetails;
ProductCard.RightDetails = ProductRightDetails;
ProductCard.BuyButton = ProductBuyButton;
ProductCard.Done = ProductDone;
ProductCard.Remove = ProductRemove;
//feature one components
ProductCard.Title = ProductTitle;
ProductCard.VariantTitle = ProductVariantTitle;
ProductCard.Price = ProductPrice;
ProductCard.Variant = ProductVariant;
ProductCard.ShortDescription = ProductShortDescription;

export default ProductCard;
