import React, {Suspense} from 'react';
import Layout from 'components/Layout';
import { Base } from 'templates/base';
import Product from "ui/base/pages/product";

type PageProps = {
  params?: any;
  children?: React.ReactNode;
  product: any;
};
export default function  ProductPage({ params }: PageProps) {
  return (
    <Layout title="">
     <Base>
        <Product params = {params} />
     </Base>
    </Layout>
  );
}
