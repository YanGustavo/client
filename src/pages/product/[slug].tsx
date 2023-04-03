'use client'
import React from 'react';
import { useRouter } from 'next/router';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/Error';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container, ContainerFlush,} from 'templates/base/ui/styles';
import * as Sdata from 'styles/styled-components/pages/product-styles';
//hooks
import useProduct from "hooks/useProduct";
import useFeatureOne from "hooks/useFeatureOne";
//components datas
import FeatureOne from 'ui/product/FeatureOne';
import Breadcrumbs from "components/Breadcrumbs";
import Carousel from "@/ui/product/Carousel";
// import Thumbnails from "@/ui/product/Thumbnails";
// import Description from "@/ui/product/Description";
// //Componentes General
// import Rating from "@/ui/Rating";
// //icons
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
// import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//loading
import Loading from "components/Loading";
//Toast
import Toast from "components/Toast";
//NotFound
import NotFound from "ui/NotFound";
//Modal
import CartToZap from "ui/CartToZap"; 
//Typography
//import { H3, P,} from 'components/Typography';
//Products
import {Products, findProductBySlug} from 'lib/Products';
import {Product} from 'lib/types/Product';
interface Query {
  slug?: string;
  
}
interface Props {
  ref: React.RefObject<HTMLImageElement>;
}

export default function ProductPage({}: Props): JSX.Element {
  const [imageWidth, setImageWidth] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [nothingFound, setNothingFound] = React.useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query as Query;
  const slugValue = slug ?? '';
  const ref = React.useRef<HTMLImageElement>(null);
  const product: Product[] = findProductBySlug(Products, slugValue);

  const {quantity, isModalOpen,discountPrice,  quantityHandler, addToCartHandler,} = useProduct({ product: product[0] });
  const {carousel, preview, carouselPosition, setCarousel,  nextHandler, prevHandler, activeImageHandler,setCarouselPosition,} = useFeatureOne({ product: product[0] , ref: ref});
  React.useEffect(() => {
    if (!product) {
      setLoading(true);
      setNothingFound(true);
      // tratamento para o caso de produto não encontrado
    } else {
      // fazer algo com o produto
      setLoading(false);
      console.log(product);
    };
  },[product]);
 
  function handleImageWidthChange(width) {
    setImageWidth(width);
    if(imageWidth !== null){
      setCarouselPosition(imageWidth * preview);
    }    
  }
  

  return (   
    <Layout title={loading ? "Carregando" : product[0] ? product[0].descricao : ""}>
     <Base>
     
    
    {/* start content*/}
      <> 
      {loading && (<Loading/>)} 
      {nothingFound && (<NotFound/>)} 

      {(!loading && product[0] !== undefined) && (
          <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    > 
        <CartToZap setOpen={isModalOpen} title={product[0].descricao} srcImg={product[0].imageThumbnail}  price={parseFloat(product[0].preco)}/>
        {carousel && (
          <Carousel
            images={product[0].imageThumbnail}
            page={preview}
            setCarousel={setCarousel}
          />
        )}
        <Container>
            <Breadcrumbs data={product[0]} subtitle="Saiba Mais" linkHref="/login"/>
        </Container>
        <Toast />
        <Container>
        <FeatureOne
      product={product[0]}
      image={<FeatureOne.Image onChange={handleImageWidthChange} />}
      info={
        <FeatureOne.Info>
          <FeatureOne.Brand />
          <FeatureOne.Title />
          <FeatureOne.Rating />
          <FeatureOne.Price />
        </FeatureOne.Info>
      }
      action={
        <FeatureOne.Button  onClick={() => addToCartHandler(product[0].codigo, quantity, parseFloat(product[0].preco))}>Add to cart</FeatureOne.Button>
      }
    />
        </Container>
        </ErrorBoundary>
      )}       
  </>
     {/* end content*/}
    
            
     </Base>
    </Layout>
  );
}
