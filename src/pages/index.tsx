import React, {Suspense} from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//hooks
import useHome from "hooks/useHome";
import useMenuRight from "ui/base/menu-right/hooks/useMenuRight";
//component head layout
import Layout from 'components/Layout';
//styles
import {Template, Main, Container, ContainerFlush, ToggleMenu,} from 'templates/base';
//context
import * as actionTypes from 'context/base-context/action-types';
//components
import Loading from 'components/Loading';
import BannerName from "ui/pages/home/banner-name";
import ShopSection from "ui/pages/home/shop-section";
import Pagination from "components/Pagination";
import Card from "ui/pages/home/shop-section/components/card-modern";
import Error from "components/Error";
import Team from "ui/pages/components/cards-model/team";
import MenuRight from "ui/base/menu-right";
import MenuBottomItem from "@/ui/base/menu-right/components/menu-bottom-item";
//icons menu right 
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

import LoginIcon from '@mui/icons-material/Login';
//icons header
import BarChart from "@mui/icons-material/BarChart";
//import LogoutIcon from '@mui/icons-material/Logout';


import Header from "ui/base/header";
import Footer from "ui/base/footer";

type HomeProps = {
  keyword: string;
  pagenumber: string;
}

export default function HomePage({keyword, pagenumber}: HomeProps) { 
  const { loading, error, products, page, pages, } = useHome(keyword, pagenumber);
  const {count_cart_items, setNewPage,} = useMenuRight(); 
  return (
    <Layout title="">
     <Template>
     <Header>
     <ToggleMenu>
        <BarChart className="toggleIcon"/>
      </ToggleMenu> 
      </Header>
      <Main>
      <Container>
    <Suspense fallback={<Loading/>}> 
    <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense> 
      </Container>
      <Container>
        <ContainerFlush>
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
      <ShopSection>
      {loading && (<div className="mb-5"><Loading /></div>)}
                { error && (<Error variant="alert-danger">{error}</Error>)}
                {(products.length > 0) ? (
                  <>
                    {products.map((product,index) => (
                      <Card key={index} product={product}/>
                    ))} 
                  </>
                ): (
                  <div> Nada Encontrado, Erro no servidor</div>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
      </ShopSection>
    {/* end content*/}
    
    </ErrorBoundary>  
    </ContainerFlush>
    </Container> 
    <Container><ContainerFlush><Team/></ContainerFlush></Container>
    <Footer/> 
    </Main>
    <MenuRight>
         {/* prettier-ignore */}
         <MenuBottomItem handleClick={setNewPage} param={actionTypes.CART} link={'#'} icon={<ShoppingCartRounded/>} counter ={count_cart_items} title= {"Carrinho"} isHome={true}/>
          {/* prettier-ignore */}
          <MenuBottomItem  handleClick={setNewPage} param={actionTypes.PROFILE} link={'#'} icon={<AccountBoxIcon/>}  title= {"Perfil"}/>
          {/* prettier-ignore */}
          <MenuBottomItem handleClick={setNewPage} param={actionTypes.LOGIN} link={'#'} icon={<LoginIcon/>}  title= {"Login"}/>
    </MenuRight>
     
     </Template>
    </Layout>
  );
}
