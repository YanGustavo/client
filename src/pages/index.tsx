import React, {Suspense} from 'react';
import Layout from 'components/Layout';
import * as SHome from './styles';
import { Base } from 'templates/base';
import BannerName from "ui/base/pages/home/banner-name";
 import ShopSection from "ui/base/pages/home/shop-section";
import Loading from 'components/Loading';

export default function HomePage() { 
  return (
    <Layout title="Home">
     <Base>
     <SHome.HomeStyle> 
      <Suspense fallback={<Loading/>}>
      <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense>  
       <Suspense fallback={<Loading/>}>          
        {/* <ShopSection keyword="" pagenumber=""/> */}
       </Suspense> 
        </SHome.HomeStyle>         
     </Base>
    </Layout>
  );
}
