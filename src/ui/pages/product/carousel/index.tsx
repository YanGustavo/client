
//Library
import * as SCarousel from './styles';
import { useState } from "react";
import Thumbnails from "ui/pages/product/thumbnails";
//icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';

function Carousel({ images, page, setCarousel }) {
  //States
  const [active, setActive] = useState(page);

  //Handlers
  const nextHandler = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevHandler = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const closeHandler = () => {
    setCarousel(false);
  };
  const activeImageHandler = (key) => {
    setActive(key);
  };

  return (
    <SCarousel.Body>
      <div className="overlay" onClick={closeHandler}></div>
      <SCarousel.Slide>
        <div className="exit">
          <i  onClick={closeHandler}>
            <CloseIcon/>
          </i>
        </div>

        <div className="active-container">
          <SCarousel.Controls>
            <div className="prev" onClick={prevHandler}>
              <ArrowBackIosIcon/>
            </div>
            <div className="next" onClick={nextHandler}>
              <NavigateNextIcon/>
            </div>
          </SCarousel.Controls>
          <img
            src={images[active]}
            alt={images[active]}
            className="active-image"
          />
        </div>

        <div className="thumbnails">
          <Thumbnails
            data={images}
            activeImageHandler={activeImageHandler}
            preview={active}
          />
        </div>
      </SCarousel.Slide>
    </SCarousel.Body>
  );
}
export default Carousel;