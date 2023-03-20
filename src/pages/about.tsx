import React from 'react';
import Layout from 'components/Layout';
import {Base} from 'templates/base';
import useAbout from "hooks/useAbout";
import { useRouter } from 'next/router';
import {Container, ContainerFlush} from 'templates/base/style';

export default function About() {  
  const router = useRouter();
  const  {data,  content}  = useAbout(router.query);  
  return (
    <Layout title={data ? data: ''}>
      <Base>
      <Container>
        <ContainerFlush>
        {content}
        </ContainerFlush>
        </Container>    
      </Base>
      </Layout>
  );
}
