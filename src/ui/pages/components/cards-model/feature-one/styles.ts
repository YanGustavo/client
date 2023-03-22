import styled from 'styled-components';

import theme from 'styles/styled-components/theme';
/* ----- Product Section ----- */
const Body = styled.section`
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
/* ----- Photo Section ----- */
const ProductPhoto = styled.div`
position: relative;
`;
const PhotoContainer = styled.div`
position: absolute;
	left: -2.5em;
	display: grid;
	grid-template-rows: 1fr;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
`;
const PhotoMain = styled.div`
border-radius: 6px 6px 0 0;
	background-color: ${theme.colors.background_light};
	background: ${theme.colors.background_light_radial};

	img {
		position: absolute;
		left: -3.5em;
		top: 2em;
		max-width: 110%;
		filter: saturate(150%) contrast(120%) hue-rotate(10deg)
			drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
	}
`;
const Controls = styled.div`
		display: flex;
		justify-content: space-between;
		padding: 0.8em;
		color: #fff;

		i {
			cursor: pointer;
		}
`;
const PhotoAlbum = styled.div`
padding: 0.7em 1em;
	border-radius: 0 0 6px 6px;
	background-color: #fff;

	ul {
		display: flex;
		justify-content: space-around;
	}

	li {
		float: left;
		width: 55px;
		height: 55px;
		padding: 7px;
		border: 1px solid #a6a6a6;
		border-radius: 3px;
	}
`;

/* ----- Informations Section ----- */


const ProductInfo = styled.div`
padding: 0.8em 0;
`;
const Title = styled.div`
h1 {
		margin-bottom: 0.1em;
		color: $color-primary;
		font-size: 1.5em;
		font-weight: 900;
	}

	span {
		font-size: 0.7em;
		color: #a6a6a6;
	}
`;
const Price = styled.div`
	margin: 1.5em 0;
	color: ${theme.colors.secondary_button_background};
	font-size: 1.2em;

	span {
		padding-left: 0.15em;
		font-size: 2.9em;
	}
`;
const Variant = styled.div`
overflow: auto;

h3 {
  margin-bottom: 1.1em;
}

li {
  float: left;
  width: 35px;
  height: 35px;
  padding: 3px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;

  &:first-child,
  &:hover {
    border: 1px solid ${theme.colors.border_color};
  }
}

li:not(:first-child) {
  margin-left: 0.1em;
}
`;
const Description = styled.div`
clear: left;
	margin: 2em 0;

	h3 {
		margin-bottom: 1em;
	}

	ul {
		font-size: 0.8em;
		list-style: disc;
		margin-left: 1em;
	}

	li {
		text-indent: -0.6em;
		margin-bottom: 0.5em;
	}
`;
const BuyButton = styled.button`
padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: ${theme.colors.tertiary_button_text_color};
	background-color: ${theme.colors.tertiary_button_background};
	box-shadow: 2px 2px 25px -7px ${theme.colors.border_color};
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
`;
export {Body, ProductPhoto, PhotoContainer, PhotoMain, Controls, PhotoAlbum, ProductInfo, Title, Price, Variant, Description, BuyButton,}