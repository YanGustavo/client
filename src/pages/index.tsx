import React, {Suspense} from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//hooks
import useHome from "hooks/useHome";

//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container, ContainerFlush} from 'templates/base/styles';
//components
import Loading from 'components/Loading';
import BannerName from "ui/pages/home/banner-name";
import ShopSection from "ui/pages/home/shop-section";
import Pagination from "components/Pagination";
//import Error from "components/Error";
import Team from "ui/pages/components/cards-model/team";
import FeatureOne from "ui/pages/components/cards-model/feature-one";
import ProductPreview from "ui/pages/components/cards-model/product-preview";
import MenuDropDown from "ui/pages/home/menu-drop-down";



type HomeProps = {
  keyword: string;
  pagenumber: string;
}

export default function HomePage({keyword, pagenumber}: HomeProps) { 
  //const [state, actions] = useBaseContext();
  const { loading, error, products, page, pages,} = useHome(keyword, pagenumber);
  
  console.log("Products:" + products);
  return (
    <Layout title="">
     <Base>     
      <Container>
    <Suspense fallback={<Loading/>}> 
    <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense> 
      </Container>
      <Container>
        <MenuDropDown/>
      </Container>
      <FeatureOne/>
      <Container>
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
      <ShopSection>
      {/* {loading && (<div className="mb-5"><Loading /></div>)}
                { error && (<Error variant="alert-danger">{error}</Error>)}
                {!(products === undefined && products === null) ? (
                  <>
                    {/* {products.map((product,index) => (
                      <Card key={index} product={product}/>
                    ))}  *}
                  </>
                ): (
                  <div> Nada Encontrado, Erro no servidor</div>
                )} */}
              <ProductPreview/>
                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
      </ShopSection>
    {/* end content*/}
    
    </ErrorBoundary>  
    </Container> 
    <Container><ContainerFlush><Team/></ContainerFlush></Container>   
       
     </Base>
    </Layout>
  );
}
