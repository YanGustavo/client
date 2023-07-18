'use client'
import React from 'react';
import { ReactNode } from 'react';
import { ProductProvider } from '../ProductContext';
import { Product } from 'lib/types/Product';
//components
import ProductImage from '../FeatureOne/image/ProductImage';
import ProductButton from './info/ProductButton';
import ProductBuyButton from './info/ProductBuyButton';
import ProductTitle from './info/ProductTitle';
import ProductVariantTitle from './info/ProductVariationTitle';
import ProductBrand from './info/ProductBrand';
import ProductInfo from './info/ProductInfo';
import ProductVariant from './info/ProductVariation';
import ProductRating from './info/ProductRating';
import ProductQuantity from './info/ProductQuantity';
import ProductQuantityDesc from './info/ProductQuantityDesc';
import ProductQuantityCurrent from './info/ProductQuantityCurrent';
import ProductQuantityInc from './info/ProductQuantityInc';
import ProductPrice from './info/ProductPrice';
import ProductSubTotal from './info/ProductSubTotal';
import ProductTotal from './info/ProductTotal';
import ProductHr from './info/ProductHr';
import ShippingCalculator from '../../ShippingCalculator';
import OnlineUsers from '../../OnlineUsers';
import styled from 'styled-components';
import {ContainerFlush} from 'templates/base/ui/styles';
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
		filter: drop-shadow(1px 1px 3px ${(props) => props.theme.desing.colors.background.light});
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;

		img {
			order: 1;
		}
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
		<ProductProvider product={product}>			   
		<FeatureOneWrapper>
			{image}
			<ContainerFlush>
				{info}
				{action}
			</ContainerFlush>
		</FeatureOneWrapper>
	</ProductProvider>
  
  );
}
FeatureOne.Image = ProductImage;
FeatureOne.Button = ProductButton;
FeatureOne.BuyButton = ProductBuyButton;
FeatureOne.Brand = ProductBrand;
FeatureOne.Title = ProductTitle;
FeatureOne.VariantTitle = ProductVariantTitle;
FeatureOne.Info = ProductInfo;
FeatureOne.Variant = ProductVariant;
FeatureOne.Rating = ProductRating;
FeatureOne.Quantity = ProductQuantity;
FeatureOne.QuantityDesc = ProductQuantityDesc;
FeatureOne.QuantityCurrent = ProductQuantityCurrent;
FeatureOne.QuantityInc = ProductQuantityInc;
FeatureOne.Price = ProductPrice;
FeatureOne.SubTotal = ProductSubTotal;
FeatureOne.Total = ProductTotal;
FeatureOne.Hr = ProductHr;
FeatureOne.ShippingCalculator = ShippingCalculator;
FeatureOne.OnlineUsers = OnlineUsers;

export default FeatureOne;