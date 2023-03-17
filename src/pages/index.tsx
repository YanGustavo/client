import React, {Suspense} from 'react';
import Layout from 'components/Layout';
import { Base } from 'templates/base';
import BannerName from "ui/base/pages/home/banner-name";
import Loading from 'components/Loading';

export default function HomePage() { 
  return (
    <Layout title="Home">
     <Base>
      <Suspense fallback={<Loading/>}>
      <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense>  
       <Suspense fallback={<Loading/>}>          
       </Suspense>         
     </Base>
    </Layout>
  );
}
