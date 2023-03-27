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


// type PageProps = {
//   params?: any;
//   children?: React.ReactNode;
//   product: any;
// };

const DescriptionProps = `
<div>
  <h1>Descrição</h1>
  <p>O iPhone XR é um dos modelos de smartphones da Apple lançados em 2018.</p>
  <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr__dazdnq0bwz2i_large.svg" alt="iPhone XR" width="500"/>
  <p>Ele possui uma tela Liquid Retina de 6.1 polegadas com resolução de 1792 x 828 pixels.</p>
  <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_display__c204cj3q8e6y_large.svg" alt="Tela do iPhone XR" width="500"/>
  <p>O iPhone XR vem com o processador A12 Bionic, que proporciona desempenho rápido e eficiente.</p>
  <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_performance__ey2vwyylfom6_large.svg" alt="Processador do iPhone XR" width="500"/>
  <p>Ele conta ainda com uma câmera de 12 megapixels com abertura f/1.8 e estabilização óptica de imagem, além de gravação de vídeo em 4K.</p>
  <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_camera__dc5lmnop1kwy_large.svg" alt="Câmera do iPhone XR" width="500"/>
  <p>O iPhone XR também é resistente à água e poeira, com certificação IP67.</p>
  <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_waterresistance__cau6dnj9d4wy_large.svg" alt="Resistência à água e poeira do iPhone XR" width="500"/>
</div>
`;
export default function  ProductPage({ params }) { //: PageProps
  const router= useRouter();
  const  pathname = router.pathname;  
  const ref = React.useRef(null);
  const [carouselPosition, setCarouselPosition] = React.useState(0);
  const {data,quantity, carousel,  preview, setCarousel, discountPrice, nextHandler, prevHandler, quantityHandler, activeImageHandler,addToCartHandler,} = useProduct(params, ref);

  useProductAnimation();
  console.log("router"+pathname);
 
  React.useEffect(() => {
    const imageWidth = ref.current.offsetWidth;
    setCarouselPosition(imageWidth * preview);
  }, [preview]);

  return (
    <Layout title={data[0].name}>
     <Base>
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
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
        <SProduct.Images>
        <ContainerFlush>
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
          </ContainerFlush>
        </SProduct.Images>      
        
        <SProduct.Details id="product_detail" className='content'>
          <ContainerFlush>
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
          </ContainerFlush>
        </SProduct.Details>
        
      </SProduct.Body>
      </Container>
     <SProduct.DescriptionContainer>
<Container>
        <ContainerFlush> 
          
      <Description description={DescriptionProps}/>
      </ContainerFlush>
      </Container>
     </SProduct.DescriptionContainer>
      
      
      
    </>
    {/* end content*/}
    
    </ErrorBoundary>        
     </Base>
    </Layout>
  );
}
