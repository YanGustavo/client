'use client'
import React from 'react';
import { useRouter } from 'next/router';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container, ContainerFlush,} from 'templates/base/styles';
import * as Sdata from 'styles/styled-components/pages/product-styles';
//hooks
import useProduct from "hooks/useProduct";
//components datas
import Breadcrumbs from "components/Breadcrumbs";
import Carousel from "ui/pages/product/carousel";
import Thumbnails from "ui/pages/product/thumbnails";
import Description from "ui/pages/product/description";
//Componentes General
import Rating from "components/Rating";
//icons
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//loading
import Loading from "components/Loading";
//Toast
import Toast from "components/Toast";
//NotFound
import NotFound from "components/NotFound";
//Modal
import CartToZap from "components/CartToZap"; 
interface Query {
  slug?: string;
}

interface Props {}

export default function ProductPage({}: Props): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();
  const { slug } = router.query as Query;
  const slugValue = slug ?? '';
  const ref = React.useRef<HTMLImageElement>(null);
  const {product, quantity, carousel, preview, carouselPosition, isModalOpen, setCarousel, discountPrice, nextHandler, prevHandler, quantityHandler, activeImageHandler, addToCartHandler,} = useProduct({ slug: slugValue, ref: ref});

  React.useEffect(() => {
      if(product && product.length > 0){
        console.log(product);
    setLoading(false);
  } 
  },[product]);
 
  

  return (   
    <Layout title={loading ? "Carregando" : (product.length > 0) ? product[0].name : ""}>
     <Base>
     
    
    {/* start content*/}
      <> 
      {loading && (<Loading/>)} 

      {(!loading && product.length > 0) && (
          <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    > 
        <CartToZap setOpen={isModalOpen} title={product[0].name} srcImg={product[0].images[0]}  price={product[0].price}/>
        {carousel && (
          <Carousel
            images={product[0].images}
            page={preview}
            setCarousel={setCarousel}
          />
        )}
        <Container>
            <Breadcrumbs data={product[0]} subtitle="Saiba Mais" linkHref="/login"/>
        </Container>
        <Toast />
            <Container>
        <Sdata.Body>       
          <Sdata.Images>
          <ContainerFlush>
            <div className="displayed">
              <div className="desktop-carousel">
                <div className="overlay" onClick={() => setCarousel(true)}></div>
                <img
                  src={product[0].images[preview]}
                  alt={product[0].images[0]}
                  className="current-image"
                />
              </div>
              <div className="mobile-carousel">
                <div
                  className="slider"
                  style={{ transform: `translateX(-${carouselPosition}px)` }}
                >
                  {product[0].images.map((image, key) => (
                    <img
                      src={image}
                      alt={image}
                      key={key}
                      className="current-image"
                      ref={ref}
                    />
                  ))}
                </div>
    
                <Sdata.Controls>
                  <div className="prev" onClick={prevHandler}>
                    <ArrowBackIosIcon/>
                  </div>
                  <div className="next" onClick={nextHandler}>
                    <NavigateNextIcon/>
                  </div>
                </Sdata.Controls>
              </div>
            </div>
    
            <div className="thumbnails">
              <Thumbnails
                data={product[0].images}
                activeImageHandler={activeImageHandler}
                preview={preview}
              />
            </div>
            </ContainerFlush>
          </Sdata.Images>      
          
          <Sdata.Details id="data_detail" className='content'>
            <ContainerFlush>
            <Sdata.Name>
              <div className="brand">{product[0].brand}</div>
              <div className="name">{product[0].name}</div>
              <Rating rating={product[0].rating}/>
              <hr></hr>
            </Sdata.Name>
            <Sdata.ProductDetails>
              {/* <Sdata.Description>{data.description}</Sdata.Description> */}
              <Sdata.Price>
                <div className="total-price">
                  <div className="discouted-price">
                    <p>
                      R${discountPrice(product[0].price, product[0].discountPercentage)}
                      .00
                    </p>
                  </div>
                  <div className="percentage">
                    <p>{product[0].discountPercentage}%</p>
                  </div>
                </div>
                <div className="original-price">R$:{product[0].price}.00</div>
              </Sdata.Price>
            </Sdata.ProductDetails>
            <Sdata.Buttons>
            {/* <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.data, Number(e.target.value)))
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
                <button onClick={() => addToCartHandler(product[0]._id, quantity, product[0].price)}>
                  <ShoppingCartRounded/> Adicionar ao Carrinho
                </button>
              </div>
            </Sdata.Buttons>
            </ContainerFlush>
          </Sdata.Details>
          <Sdata.DescriptionContainer>
          <ContainerFlush>           
        <Description description={product[0].description}/>
        </ContainerFlush>
       </Sdata.DescriptionContainer>
        </Sdata.Body>
        </Container>
        </ErrorBoundary>
      )}       
  </>
     {/* end content*/}
    
            
     </Base>
    </Layout>
  );
}
