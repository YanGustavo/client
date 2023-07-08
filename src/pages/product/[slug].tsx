'use client';
import Carousel from '@/ui/product/FeatureOne/image/Carousel';
// import Thumbnails from "@/ui/product/Thumbnails";
import Description from '@/ui/product/ProductDescription';
import Breadcrumbs from 'components/Breadcrumbs';
import ErrorFallback from 'components/Error';
//component head layout
import Layout from 'components/Layout';
// //Componentes General
// import Rating from "@/ui/Rating";
//icons
// import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//loading
import Loading from 'components/Loading';
//Toast
import Toast from 'components/Toast';
//hooks
import useProduct from 'hooks/useProduct';
//Products
import { useRouter } from 'next/router';
import React from 'react';
//error
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { Base } from 'templates/base';
//styles
import { Container, ContainerFlush } from 'templates/base/ui/styles';
//NotFound
import NotFound from 'ui/NotFound';
//components datas
import FeatureOne from 'ui/product/FeatureOne';
import {P} from 'components/Typography';
import Space from 'components/Space';
//import theme from 'styles/styled-components/theme';
export const BreadcrumbsContainer = styled.div`
  position: relative;
  grid-row: 1; /* ocupa a segunda linha */
  grid-column: 3 / 6; /* ocupa da segunda coluna até a quarta coluna */
`;
export const FeatureOneContainer = styled.div`
  grid-column-start: first;
  grid-row: 2;
  grid-column: 1 / 6;
  margin-bottom: 1rem;
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
`;
export const DescriptionContainer = styled.div`
  position: relative;
  grid-row: 2; /* ocupa a segunda linha */
  grid-column: 1 / 6; /* ocupa da segunda coluna até a quarta coluna */
`;
export const ProductContainer = styled.div`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));
  grid-template-columns: [first] 10% [line2] 30% [line3] auto [col4-start] 30% [five] 10% [end];
  grid-template-rows: auto auto auto;
  column-gap: 1rem;
  position: relative;
  hr {
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;
  }
  img {
    cursor: pointer;
    user-select: none;
  }
  @media screen and (min-width: 541px) {
  }
  @media screen and (min-width: 650px) {
    grid-template-columns: [first] 5% [line2] 35% [line3] auto [col4-start] 35% [five] 5% [end];
    ${FeatureOneContainer} {
      grid-column: 2 / 5;
    }
  }
  @media screen and (min-width: 950px) {
    grid-template-columns: [first] 5% [line2] 35% [line3] auto [col4-start] 20% [five] 20% [end];
    ${FeatureOneContainer} {
      grid-column: 2 / 6;
    }
    ${DescriptionContainer} {
      grid-row: 3; /* ocupa a segunda linha */
      grid-column: 2 / 4; /* ocupa da segunda coluna até a quarta coluna */
    }
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: [first] 1% [line2] 39% [line3] auto [col4-start] 20% [five] 20% [end];
    ${FeatureOneContainer} {
      grid-column: 2 / 6;
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
  width: 90%;
  z-index: 10;
  user-select: none;
  .next,
  .prev {
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
interface Query {
  slug?: string;
}
interface Props {
  ref: React.RefObject<HTMLImageElement>;
}

export default function ProductPage({}: Props): JSX.Element {
  const [carousel, setCarousel] = React.useState(false);
  const [imageWidth, setImageWidth] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [nothingFound, setNothingFound] = React.useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query as Query;
  const slugValue = slug ?? '';
  const ref = React.useRef<HTMLImageElement>(null);
  /* Verifique se existem elementos filhos */
  const { onlineUsers, discountPrice, handleSubmitCalculate, getOnlineUsers, findProductBySlug} = useProduct();
  const product = findProductBySlug(slugValue);
  React.useEffect(() => {
    console.log("resultado de product"+product);
    if (!product) {
      setLoading(true);
      setNothingFound(true);
      // tratamento para o caso de produto não encontrado
    } else {
      // fazer algo com o produto
      setLoading(false);
      
    }
  }, [product]);

  function handleImageWidthChange(width) {
    // setImageWidth(width);
    // if(imageWidth !== null){
    //   setCarouselPosition(imageWidth * preview);
    // }
  }

  return (
    <Layout title={loading ? 'Carregando' : product[0] ? product[0].name : ''}>
      <Base>
        {/* start content*/}
        {loading && <Loading />}
        {nothingFound && <NotFound />}
        {!loading && product[0] !== undefined && (
          <Container>
            <ProductContainer>
              <ErrorBoundary
                fallbackRender={({ error, resetErrorBoundary }) => (
                  <ErrorFallback
                    error={error}
                    resetErrorBoundary={resetErrorBoundary}
                  />
                )}
              >
                <Toast />
                 {/*Start Breadcrumbs*/}
                 <BreadcrumbsContainer>
                 <Breadcrumbs
                    data={product[0]}
                    subtitle="Saiba Mais"
                    linkHref="/login"
                  />
                  </BreadcrumbsContainer>
                  {/*End Breadcrumbs*/}
                <FeatureOneContainer>
                  
                  {/*Start Carousel*/}
                  {carousel && <Carousel isOpen={carousel} />}
                  {/*End Carousel*/}
                  {/*Start FeatureOne*/}
                  <FeatureOne
                    product={product[0]}
                    image={
                      <FeatureOne.Image
                        onChange={handleImageWidthChange}
                        click={() => setCarousel(true)}
                      />
                    }
                    info={
                      <FeatureOne.Info>
                        <FeatureOne.Rating />                        
                       <FeatureOne.Brand />
                       <FeatureOne.Price />
                        <FeatureOne.Title />  
                       {/* <FeatureOne.Hr>---</FeatureOne.Hr> */}   
                       <hr/>               
                        <FeatureOne.Variant />
                        <hr/>     
                        <FeatureOne.Quantity>
                          <FeatureOne.QuantityDesc />
                          <FeatureOne.QuantityCurrent />
                          <FeatureOne.QuantityInc />
                        </FeatureOne.Quantity><Space size={5} /><FeatureOne.SubTotal />
                        <hr/>   
                        <FeatureOne.ShippingCalculator
                          onCalculateShipping={handleSubmitCalculate}
                        />
                        <FeatureOne.Total />
                        <FeatureOne.OnlineUsers onlineUsers={onlineUsers} />
                      </FeatureOne.Info>
                    }
                    action={
                      <FeatureOne.BuyButton>
                        Adicionar ao Carrinho
                      </FeatureOne.BuyButton>
                    }
                  />
                  {/*End FeatureOne*/}
                </FeatureOneContainer>
                <DescriptionContainer>
                  <ContainerFlush>
                    <Description
                      title="Descrição do Produto"
                      description={product[0].complementaryDescription}
                    />
                  </ContainerFlush>
                </DescriptionContainer>
              </ErrorBoundary>
            </ProductContainer>
          </Container>
        )}

        {/* end content*/}
      </Base>
    </Layout>
  );
}
