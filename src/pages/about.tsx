import React from 'react';
import Layout from 'components/Layout';
import { Base } from 'templates/base';
import useAbout from "hooks/useAbout";
import { useRouter } from 'next/router';
import {Container, ContainerFlush} from 'templates/base';
import LayoutTransition from 'components/layoutTransition';

export default function About() {  
  const router = useRouter();
  const  {data, isPending, content}  = useAbout(router.query);  
  return (
    <Layout title={data ? data: ''}>
      <Base>
      <LayoutTransition isPending={isPending}>
      <Container>
        <ContainerFlush>
        {content}
        </ContainerFlush>
        </Container>
                
      </LayoutTransition>
      </Base>  
    </Layout>
  );
}
