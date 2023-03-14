
//Library
import * as SCarousel from './styles';
import { useState } from "react";
import Thumbnails from "ui/base/pages/product/components/thumbnails";

function Carousel({ images, page, setCarousel }) {
  //Images
const prev = "/images/icon-previous.svg";
const next ="/images/icon-next.svg";
const close = "/images/icon-close-orange.svg";
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
          <img src={close} alt="Close" onClick={closeHandler} />
        </div>

        <div className="active-container">
          <SCarousel.Controls>
            <div className="prev" onClick={prevHandler}>
              <img src={prev} alt="Previous" />
            </div>
            <div className="next" onClick={nextHandler}>
              <img src={next} alt="Next" />
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