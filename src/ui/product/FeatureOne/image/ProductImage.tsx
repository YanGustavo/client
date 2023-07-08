import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
//Icons
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import styled from 'styled-components';
//Styles
import theme from 'styles/styled-components/theme';
import { useProductContext } from '../../ProductContext';
// import {Variantion} from "lib/types/Product";
/* ----- Photo Section ----- */
const ProductPhoto = styled.div`
  position: relative;
`;
const PhotoContainer = styled.div`
  position: relative;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
`;

const PhotoMain = styled.div`
  position: relative;
  border-radius: 6px 6px 0 0;
  background-color: ${theme.colors.background_light};
  background: ${theme.colors.background_light_radial};

  img {
    left: -3.5em;
    top: 2em;
    width: 110%;
    max-width: none;
    height: auto;
    filter: saturate(150%) contrast(120%) hue-rotate(10deg) drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    max-width: 100%;
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

function ProductImage({ onChange, click }) {
  const ref = React.useRef<HTMLImageElement>(null);  
  const { product, selectedVariation,} = useProductContext();
  const [selectedImage, setSelectedImage] = React.useState('');
  const handleVariationClick = (index) => {
    setSelectedImage(selectedVariation.images[index].link);
  };
  React.useEffect(() => {
    if (ref.current) {
      onChange(ref.current.offsetWidth);
    }
    setSelectedImage(selectedVariation.images[0].link);
  }, [ref, onChange,selectedVariation]);
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
          {selectedVariation !== undefined && ( 
             <img onClick={click}
            key={selectedVariation.sku}
            src={selectedImage}
            alt={product.name}
          />
          )}
        
        </PhotoMain>
        <PhotoAlbum>
          <ul>
            {selectedVariation.images.map((image, index) => (
              <li key={index}>
                <img src={image.link} onClick={() =>  handleVariationClick(index)}  alt={product.name} />
              </li>
            ))}
          </ul>
        </PhotoAlbum>
      </PhotoContainer>
    </ProductPhoto>
  );
}

export default ProductImage;
