import React, {Suspense} from 'react';
import Layout from 'components/Layout';
import { Base } from 'templates/base';
import Link from 'next/link';
import Message from "components/Error";
import FormLogin from "ui/base/pages/login/form";
import useLogin from "hooks/useLogin";
import Loading from 'components/Loading';

export default function LoginPage () {
  const { error, loading, redirect, activeLogin, google } = useLogin(); 
  return (
    <Layout title="Login">
    <Base>
      <div className="">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <Suspense fallback={<Loading/>}>
        <FormLogin activeLogin={activeLogin} google={google}></FormLogin>
        </Suspense>
          <p>
          <Link href={`/register?redirect=${redirect || '/'}`}>Criar Conta</Link>
          </p>
      </div>
    </Base>
    </Layout>
  );
};
