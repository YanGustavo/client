
//Library

import React from "react";
import useCarousel from "hooks/useCarousel";
import { useProductContext } from '../../ProductContext';
import Thumbnails from "@/ui/product/Thumbnails";
//icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

export const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;

  .displayed {
    position: relative;
    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    .current-image {
      width: 100%;
      border-radius: 20px;
    }
  }
  .mobile-carousel {
    display: none;
    overflow: hidden;
  }
  @media (max-width: 1099px) {
    width: 100%;
  }
  @media (max-width: 1039px) {
    .desktop-carousel {
      display: none;
    }
    .mobile-carousel {
      /* overflow: hidden; */
      display: block;
      .slider {
        display: flex;
        transition: 500ms ease;
      }
    }
    .thumbnails {
      display: none;
    }
    .overlay {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .displayed {
      .current-image {
        border-radius: 0;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: hsl(0, 0%, 0%, 75%);
    z-index: -1;
  }
`;

export const Slide = styled.div`
  margin: auto;
  width: fit-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  .exit {
    position: absolute;
    top: -15px;
    width: fit-content;
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: right;
    .MuiSvgIcon-root {
      background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.desing.border.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
      width: 2rem;
      height: 2rem;      
      cursor: pointer;
      color: white;
      transition: 100ms ease;
    }
    .MuiSvgIcon-root:hover {
      width: 3rem;
      height: 3rem;  
    }
  }
  .active-container {
    position: relative;
  }
  .active-image {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
  }
  .thumbnails {
    width: 450px;
    margin: auto;
  }
  @media (max-height: 720px) {
    .active-image {
      height: 500px;
    }
    .thumbnails {
      display: none;
    }
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 550px;
  z-index: 100;
  user-select: none;
  .next,
  .prev {
    background-color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
interface Props {
  isOpen: boolean;
  //ref: React.RefObject<HTMLImageElement>;
}

function Carousel({isOpen}: Props): JSX.Element{
  const ref = React.useRef<HTMLImageElement>(null);
  const { product, selectedVariation, handleSelectVariation,} = useProductContext();
  const {carousel, preview, carouselPosition, setCarousel,  nextHandler, prevHandler, activeImageHandler,setCarouselPosition,} = useCarousel({ product: product[0] , ref: ref});
  //States
  const [active, setActive] = React.useState(preview);


  return (
    <Body>
      <div className="overlay" onClick={() => setCarousel(isOpen)}></div>
      <div className="mobile-carousel">
                <div
                  className="slider"
                  style={{ transform: `translateX(-${carouselPosition}px)` }}
                >
                  {selectedVariation.images.map((image, key) => (
                    <img
                      src={selectedVariation[active].link}
                      alt={product.name}
                      key={selectedVariation[active].sku}
                      className="current-image"
                      ref={ref}
                    />
                  ))}
                </div>
                </div>
      <Slide>
        <div className="exit">
          <i  onClick={() => setCarousel(isOpen)}>
            <CloseIcon/>
          </i>
        </div>

        <div className="active-container">
          <Controls>
            <div className="prev" onClick={prevHandler}>
              <ArrowBackIosIcon/>
            </div>
            <div className="next" onClick={nextHandler}>
              <NavigateNextIcon/>
            </div>
          </Controls>
          <img
            src={selectedVariation[active].link}
            alt={selectedVariation[active].link}
            className="active-image"
          />
        </div>

        <div className="thumbnails">
          <Thumbnails
            data={selectedVariation.images}
            activeImageHandler={activeImageHandler}
            preview={active}
          />
        </div>
      </Slide>
    </Body>
  );
}
export default Carousel;