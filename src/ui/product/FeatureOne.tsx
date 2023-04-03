'use client'
import React from 'react';
import { ReactNode } from 'react';
import ProductContext from './ProductContext';
import { Product } from 'lib/types/Product';
//components
import ProductImage from './ProductImage';
import ProductButton from './ProductButton';
import ProductTitle from './ProductTitle';
import ProductBrand from './ProductBrand';
import ProductInfo from './ProductInfo';
import ProductVariant from './ProductVariant';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';
import styled from 'styled-components';
//Styles
import theme from 'styles/styled-components/theme';
/* ----- Product Section ----- */
const FeatureOneWrapper = styled.section`
display: grid;
	grid-template-columns: 0.9fr 1fr;
	margin: auto;
  margin-left: 10%;
	padding: 2.5em 0;
	width: 90%;
	background-color: white;
	border-radius: 5px;

h3 {
	font-size: 0.7em;
	letter-spacing: 1.2px;
	color: #a6a6a6;
}

img {
			max-width: 100%;
			filter: drop-shadow(1px 1px 3px ${theme.colors.background_light});
		}
`;

type Props = {
  product: Product;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

const FeatureOne = ({ image, info, action, product }: Props) => { 
 return (
	<ProductContext.Provider value={{ product }}>
		<FeatureOneWrapper>
 {image}
 {info}
  {action}
</FeatureOneWrapper>
	</ProductContext.Provider>
  
  );
}
FeatureOne.Image = ProductImage;
FeatureOne.Button = ProductButton;
FeatureOne.Brand = ProductBrand;
FeatureOne.Title = ProductTitle;
FeatureOne.Info = ProductInfo;
FeatureOne.Variant = ProductVariant;
FeatureOne.Rating = ProductRating;
FeatureOne.Price = ProductPrice;
export default FeatureOne;