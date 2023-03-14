import React from 'react'; //, {Suspense}
import Layout from 'components/Layout';
import { Base } from 'templates/base';
//import Link from 'next/link';
//import StepCheckout from "@/ui/tests/steps-checkout";
import useTests from "hooks/useTests";
import Loading from 'components/Loading';

export default function TestsPage () {
  useTests(); 
  return (
    <Layout title="Product">
    <Base>
        {/* <Suspense fallback={<Skeleton/>}> */}
        {/* <StepCheckout/> */}
        {/* </Suspense> */}
        <Loading/>
    </Base>
    </Layout>
  );
};
