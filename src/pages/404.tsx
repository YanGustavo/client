'use client';
import React from 'react';//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/Error';
import Link from 'next/link';
//component head layout
import Layout from 'components/Layout';
import {Base} from 'templates/base';
//styles
import {Container} from 'templates/base/ui/styles';
import Button from 'components/Button';
import NotFound from 'ui/NotFound';

export default function Custom404() { 
  return (
    <Layout title="Pagina Não Encontrada">
     <Base>     
      <Container>
      <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >     
    {/* start content*/}
    <NotFound />
    <Button><Link href="/">ir ao Início</Link></Button>
    {/* end content*/}
    
    </ErrorBoundary>  
    </Container>        
     </Base>
    </Layout>
  );
}
