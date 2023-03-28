import React, {Suspense} from 'react';
import {useRouter} from 'next/navigation';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container, ContainerFlush, ToggleMenu,} from 'templates/base/styles';
import * as SProduct from 'styles/styled-components/pages/product-styles';
//components main
import Header from "ui/base/header";
import Footer from "ui/base/footer";
import MenuBottomItem from "ui/base/menu-right/components/menu-bottom-item";
//hooks
import useProduct from "hooks/useProduct";
import useProductAnimation from "ui/pages/product/hooks/productAnimation";
//context
import * as actionTypes from 'context/base-context/action-types';
//components Products
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
//icons menu right 
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Chat from "@mui/icons-material/Chat";
import Favorite from "@mui/icons-material/Favorite";
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import LoginIcon from '@mui/icons-material/Login';

//icons header
import BarChart from "@mui/icons-material/BarChart";
//Toast
import Toast from "components/Toast";
//NotFound
import NotFound from "components/NotFound";
//Modal
import CartToZap from "components/CartToZap"; 

// type PageProps = {
//   params?: any;
//   children?: React.ReactNode;
//   product: any;
// };

export default function  ProductPage() { //{ params }: PageProps
  //const params = '63d6ae4fabe21a29359d3a52';
  const router= useRouter();
  const  pathname = router.pathname; 
  console.log(pathname); 
  
  const ref = React.useRef(null);//const ref = useRef<HTMLImageElement>(null);
  const slug = 'iphone-8-plus';
  const {isLoading, product,quantity, carousel,  preview, carouselPosition, isModalOpen, setCarousel, discountPrice, nextHandler, prevHandler, quantityHandler, activeImageHandler,addToCartHandler,} = useProduct(slug, ref);
 

  return (
    <Layout title={!isLoading ? product.name: ""}>
     <Base>
     
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}

    {!isLoading ? (      
    <>
    <CartToZap setOpen={isModalOpen} title={product.name} srcImg={product.images[0]}  price={product.price}/>
    {carousel && (
      <Carousel
        images={product?.images}
        page={preview}
        setCarousel={setCarousel}
      />
    )}
    <Container>
        <Breadcrumbs data={product} subtitle="Saiba Mais" linkHref="/login"/>
    </Container>
    <Toast />
        <Container>
    <SProduct.Body>       
      <SProduct.Images>
      <ContainerFlush>
        <div className="displayed">
          <div className="desktop-carousel">
            <div className="overlay" onClick={() => setCarousel(true)}></div>
            <img
              src={product.images[preview]}
              alt={product.images[0]}
              className="current-image"
            />
          </div>
          <div className="mobile-carousel">
            <div
              className="slider"
              style={{ transform: `translateX(-${carouselPosition}px)` }}
            >
              {product.images.map((image, key) => (
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
            data={product.images}
            activeImageHandler={activeImageHandler}
            preview={preview}
          />
        </div>
        </ContainerFlush>
      </SProduct.Images>      
      
      <SProduct.Details id="product_detail" className='content'>
        <ContainerFlush>
        <SProduct.Name>
          <div className="brand">{product.brand}</div>
          <div className="name">{product.name}</div>
          <Rating rating={product.rating}/>
          <hr></hr>
        </SProduct.Name>
        <SProduct.ProductDetails>
          {/* <SProduct.Description>{product.description}</SProduct.Description> */}
          <SProduct.Price>
            <div className="total-price">
              <div className="discouted-price">
                <p>
                  R${discountPrice(product.price, product.discountPercentage)}
                  .00
                </p>
              </div>
              <div className="percentage">
                <p>{product.discountPercentage}%</p>
              </div>
            </div>
            <div className="original-price">R$:{product.price}.00</div>
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
            <button onClick={() => addToCartHandler(product._id, quantity, product.price)}>
              <ShoppingCartRounded/> Adicionar ao Carrinho
            </button>
          </div>
        </SProduct.Buttons>
        </ContainerFlush>
      </SProduct.Details>
      <SProduct.DescriptionContainer>
      <ContainerFlush>           
    <Description description={product.description}/>
    </ContainerFlush>
   </SProduct.DescriptionContainer>
    </SProduct.Body>
    </Container>
   
    
    
    
  </>
    ) : (
      <Container>
        <ContainerFlush>
        <NotFound/>
        </ContainerFlush>
      </Container>    
    )}
    
    {/* end content*/}
    
    </ErrorBoundary>        
     </Base>
    </Layout>
  );
}
