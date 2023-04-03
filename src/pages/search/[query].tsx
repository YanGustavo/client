import React, {Suspense} from 'react';
import {useRouter} from 'next/navigation';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/Error';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';

// type PageProps = {
//   params?: any;
//   children?: React.ReactNode;
//   product: any;
// };
export default function  SearchPage({ params }) { //: PageProps


  return (
    <Layout title="Pesquisa">
     <Base>
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
    <>
     
    </>
    {/* end content*/}
    
    </ErrorBoundary>        
     </Base>
    </Layout>
  );
}