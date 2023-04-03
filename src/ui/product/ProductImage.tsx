import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
//Icons
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import styled from 'styled-components';
//Styles
import theme from 'styles/styled-components/theme';
import { useProductContext } from './ProductContext';
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
function ProductImage({onChange}) {
  const ref = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    if (ref.current) {
			onChange(ref.current.offsetWidth);      
    }
  }, [ref, onChange]);
  const { product } = useProductContext();
  return (
    <ProductPhoto>
      <PhotoContainer>
        <PhotoMain>
          <Controls>
            <i>
              <Tooltip title="Compartilhar">
                <ShareIcon />
              </Tooltip>
            </i>
            <i>
              <Tooltip title="Adicionar aos seus Favoritos">
                <FavoriteBorderIcon />
              </Tooltip>
            </i>
          </Controls>
					<img src={product.imagem[0].link} alt={product.descricao} />
        </PhotoMain>
        <PhotoAlbum>
          <ul>
            {product.imagem.map((image, index) => (
              <li key={index}>
                <img src={image.link} alt={product.descricao} />
              </li>
            ))}
          </ul>
        </PhotoAlbum>
      </PhotoContainer>
    </ProductPhoto>
  );
}

export default ProductImage;
