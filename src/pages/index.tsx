import React, {Suspense} from 'react';
import Layout from 'components/Layout';
import * as SHome from './styles';
import { Base } from 'templates/base';
import BannerName from "ui/base/pages/home/banner-name";
 import MenuCard from "ui/tests/home/menu-card";
 import Card from "ui/base/pages/home/card";
import useHome from "hooks/useHome";
import Loading from 'components/Loading';
import { toast } from 'react-toastify';

export default function HomePage() { 
  const { data, isLoading, products, MenuItems, setData } = useHome(); // isMainData,
  toast.error("Seja bem vindo!");
  return (
    <Layout title="Home">
     <Base>
     <SHome.HomeStyle>  
      <Suspense fallback={<Loading/>}>
      <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense>            
             <section className="container">
                  <Suspense fallback={<Loading/>}>
                  {MenuItems &&
                  MenuItems.map((data:any) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />                    
                  </div>
                ))}
                </Suspense>
            </section> 
            <section>
            </section>           
            <section className="container container--flush">
               <Suspense fallback={<Loading/>}>                
               {products &&
                products.map((product:any) => (                
               <Card key={product.id} product={product}/>      
           ))}
            </Suspense>            
            </section>
            <section className="container container--flush">
               <Suspense fallback={<Loading/>}>                
               {isLoading ? (
                <p> Loading...</p>
               ) : (
                <>
                {data?.map((todo) => (
                    <div key={todo.id}>
                      <p>{todo.title}</p>
                    </div>
                ))}
                </>
               )
}
            </Suspense>            
            </section>
        </SHome.HomeStyle>         
     </Base>
    </Layout>
  );
}
