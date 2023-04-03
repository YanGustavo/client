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
import {Container} from 'templates/base/ui/styles';
interface HomeProps {
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
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
 
    {/* end content*/}
    
    </ErrorBoundary>  
    </Container>        
     </Base>
    </Layout>
  );
}
