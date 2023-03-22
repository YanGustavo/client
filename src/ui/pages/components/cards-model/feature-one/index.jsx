'use client'
import {Container} from "templates/base/styles";
import {Body, ProductPhoto, PhotoContainer, PhotoMain, Controls, PhotoAlbum, ProductInfo, Title, Price, Variant, Description, BuyButton,} from "./styles";
import Tooltip from '@mui/material/Tooltip';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
const FeatureOne = () => {
  return (
    <Container>
    <Body>
	<ProductPhoto>
		<PhotoContainer>
			<PhotoMain>
				<Controls>
					<i><Tooltip title="Compartilhar"><ShareIcon/></Tooltip></i>
					<i><Tooltip title="Adicionar aos seus Favoritos"><FavoriteBorderIcon/></Tooltip></i>
				</Controls>
				<img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice"/>
			</PhotoMain>
			<PhotoAlbum>
				<ul>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li>
				</ul>
			</PhotoAlbum>
		</PhotoContainer>
	</ProductPhoto>
	<ProductInfo>
		<Title>
			<h1>Delicious Apples</h1>
			<span>COD: 45999</span>
		</Title>
		<Price>
			R$ <span>7.93</span>
		</Price>
		<Variant>
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"/></li>
			</ul>
		</Variant>
		<Description>
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</Description>
		<BuyButton><ShoppingCartRounded/> ADD TO CART</BuyButton>
	</ProductInfo>
</Body> 
</Container> 
  );
}
export default FeatureOne;