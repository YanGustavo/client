

import * as SProduct from './styles';
//Library
import React from "react";
//Components
import Carousel from "ui/base/pages/product/components/carousel";
import Thumbnails from "ui/base/pages/product/components/thumbnails";
import useProduct from "./useProduct";
import {Container, ContainerFlush } from "templates/base/styles";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from "components/Breadcrumbs";

// type ProductProps = {
//   params: any;
// }
const Product = (params) => {//{params}: ProductProps
  const ref = React.useRef(null);
 const {data,quantity, carousel,  preview, setCarousel, discountPrice, nextHandler, prevHandler, quantityHandler, activeImageHandler,addToCartHandler,} = useProduct(params, ref);
 const [carouselPosition, setCarouselPosition] = React.useState(0);
  

 React.useEffect(() => {
   const imageWidth = ref.current.offsetWidth;
   setCarouselPosition(imageWidth * preview);
 }, [preview]);

  return (
    <>
      {carousel && (
        <Carousel
          images={data[0]?.images}
          page={preview}
          setCarousel={setCarousel}
        />
      )}
      <Container>
          <Breadcrumbs data={data[0]} subtitle="Saiba Mais" linkHref="/login"/>
      </Container>
          <Container>
      <SProduct.Body>       
       <Container>
        <ContainerFlush>
        <SProduct.Images>
          <div className="displayed">
            <div className="desktop-carousel">
              <div className="overlay" onClick={() => setCarousel(true)}></div>
              <img
                src={data[0].images[preview]}
                alt={data[0].images[0]}
                className="current-image"
              />
            </div>
            <div className="mobile-carousel">
              <div
                className="slider"
                style={{ transform: `translateX(-${carouselPosition}px)` }}
              >
                {data[0].images.map((image, key) => (
                  <img
                    src={image}
                    alt={image}
                    key={key}
                    className="current-image"
                    ref={ref}
                  />
                ))}
              </div>

              <SProduct.Controls>
                <div className="prev" onClick={prevHandler}>
                  <ArrowBackIosIcon/>
                </div>
                <div className="next" onClick={nextHandler}>
                  <NavigateNextIcon/>
                </div>
              </SProduct.Controls>
            </div>
          </div>

          <div className="thumbnails">
            <Thumbnails
              data={data[0].images}
              activeImageHandler={activeImageHandler}
              preview={preview}
            />
          </div>
        </SProduct.Images>
        </ContainerFlush>
        </Container>
        
        <Container>
        <ContainerFlush>
        <SProduct.Details>
          <SProduct.Name>
            <div className="brand">{data[0].brand}</div>
            <div className="name">{data[0].name}</div>
            <hr></hr>
          </SProduct.Name>
          <SProduct.ProductDetails>
            <SProduct.Description>{data[0].description}</SProduct.Description>
            <SProduct.Price>
              <div className="total-price">
                <div className="discouted-price">
                  <p>
                    R${discountPrice(data[0].price, data[0].discountPercentage)}
                    .00
                  </p>
                </div>
                <div className="percentage">
                  <p>{data[0].discountPercentage}%</p>
                </div>
              </div>
              <div className="original-price">R$:{data[0].price}.00</div>
            </SProduct.Price>
          </SProduct.ProductDetails>
          <SProduct.Buttons>
          {/* <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select> */}
            <div className="quantity">
              <div
                className="dec"
                onClick={() => {
                  quantityHandler(false);
                }}
              >
                <RemoveIcon/>
              </div>
              <div className="current-quantity">{quantity}</div>
              <div
                className="inc"
                onClick={() => {
                  quantityHandler(true);
                }}
              >
                <AddIcon/>
              </div>
            </div>
            <div className="add-to-cart">
              <button onClick={() => addToCartHandler(data[0]._id, 1)}>
                <ShoppingCartRounded/> Adicionar ao Carrinho
              </button>
            </div>
          </SProduct.Buttons>
        </SProduct.Details>
        </ContainerFlush>
        </Container>
      </SProduct.Body>
      </Container>
    </>
  );
};
export default Product;