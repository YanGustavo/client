import React from 'react';
import Link from 'next/link';
import Layout from 'components/Layout';
//style base
import { Base } from 'templates/base';
//import FormLogin from "ui/base/pages/login/form";
//hooks
import useLogin from "hooks/useLogin";
//components
import Message from "components/Error";
import Loading from 'components/Loading';
import LoginCard from 'ui/pages/components/cards-model/login';

export default function LoginPage () {
  const { error, loading, redirect, activeLogin, google } = useLogin(); 
  return (
    <Layout title="Login">
    <Base>
      <div className="">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        {/* <Suspense fallback={<Loading/>}>
        <FormLogin activeLogin={activeLogin} google={google}></FormLogin>
        </Suspense>
        */}
        <LoginCard activeLogin={activeLogin} google={google}/>
          <p>
          <Link href={`/register?redirect=${redirect || '/'}`}>Criar Conta</Link>
          </p> 
          
      </div>
    </Base>
    </Layout>
  );
};
