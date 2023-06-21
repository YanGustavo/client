'use client'
import React, {Suspense} from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/Error';
//hooks
import useHome from "hooks/useHome";

//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container, ContainerFlush, ContainerDrawable,} from 'templates/base/ui/styles';
import {Categories} from "lib/Categories";
import MenuCategoryWrapper from '@/ui/MenuCategory';
//components
import Loading from 'components/Loading';
import BannerName from "ui/BannerName";
import ShopSection from "ui/ShopSection";
import Feature from "@/ui/Feature";
//import Pagination from "components/Pagination";
//import Error from "components/Error";
import Team from "@/ui/Team";
//import FeatureOne from "@/ui/pages/product/";
//import MenuDropDown from "ui/pages/home/menu-drop-down";




type HomeProps = {
  keyword: string;
  pagenumber: string;
}

export default function TestPage({keyword, pagenumber}: HomeProps) { 
  //const [state, actions] = useBaseContext();
  const { loading, error, products, page, pages,} = useHome(keyword, pagenumber);

  return (
    <Layout title="Test Page">
     <Base>  
     <Container>
      <ContainerDrawable>
        <MenuCategoryWrapper Categories={Categories}/>
      </ContainerDrawable>
     
    </Container>   
      
      <Container>
        {/* <MenuDropDown/> */}
      {/* </Container>
      <FeatureOne/>
      <Container> */}
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
      <ShopSection>
        <ContainerFlush>
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
                {/* Pagination */}
                {/* <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                /> */}
                </ContainerFlush>
      </ShopSection>
    {/* end content*/}

    <Feature
      title="My Feature Title"
      imageUrl="images/6.png"
    >
     <ContainerDrawable><Team/></ContainerDrawable>
    </Feature>

    
    </ErrorBoundary>  
    </Container> 
    <Container><ContainerFlush><ContainerDrawable><Team/></ContainerDrawable></ContainerFlush></Container>  
    <Container>
    <Suspense fallback={<Loading/>}> 
    <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense> 
      </Container>
     </Base>
    </Layout>
  );
}
