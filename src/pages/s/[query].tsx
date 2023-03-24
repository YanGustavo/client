import React, {Suspense} from 'react';
import Layout from 'components/Layout';
import { Base } from 'templates/base/styles';
import Product from "ui/base/pages/product";
import {useRouter} from 'next/navigation'
type PageProps = {
  params?: any;
  children?: React.ReactNode;
  product: any;
};
export default function  ProductPage({ params }: PageProps) {
  const router:any = useRouter();
  const  pathname = router.pathname;
  console.log("router"+pathname);
  return (
    <Layout title="">
     <Base>
        <Product params = {params} />
     </Base>
    </Layout>
  );
}