import React from 'react';
import {PRIVACY_POLICY, EXCHANGE_AND_REFUND_POLICY, SHIPPING_POLICY, SERVICE_TERMS, CONTACT, FAQ, ABOUT_US, NOT_FOUND, LOADING, ERROR } from "constants/about-constants";
import PrivacyPolicyPage from "ui/base/pages/about/pages/privacy_policy";
import ExchangeAndRefundPage from "ui/base/pages/about/pages/exchange_and_refund_policy";
import ShippingPolicyPage from "ui/base/pages/about/pages/shipping_policy";
import ServiceTermsPage from "ui/base/pages/about/pages/service_terms";
import ContactPage from "ui/base/pages/about/pages/contact";
import FAQPage from "ui/base/pages/about/pages/faq";
import AboutUsPage from "ui/base/pages/about/pages/about_us";
import NotFound from "ui/all/not-found";
import Loading from "components/Loading";
//import Error from "components/Error";

const useAbout = (router) => { 
  const [data, setData] = React.useState("Carregando");
  const [page, setPage] = React.useState(LOADING);
  const [content, setContent] = React.useState(<Loading/>);
  const [isPending, startTransition] = React.useTransition(); 

  function navigate (router){
      startTransition(() => {
        setPage(router);       
        }); 
        if (page === PRIVACY_POLICY){
          setData("Politicas de Privacidade");
          setContent(<PrivacyPolicyPage/>);
        
      }else if (page === EXCHANGE_AND_REFUND_POLICY){
            setData("Politicas de Trocas e Reembolso");
            setContent(<ExchangeAndRefundPage/>);
      }else if (page === SHIPPING_POLICY){
          setData("Politicas de Envio");
          setContent( <ShippingPolicyPage/>);
        }else if (page === SERVICE_TERMS){
          setData("Termos de Serviço");
          setContent(<ServiceTermsPage/>);
          }else if (page === CONTACT){
            setData("Contato");
            setContent(<ContactPage/>);
        }else if (page === FAQ){
          setData("FAQ - Perguntas Frenquentes");
          setContent(<FAQPage/>);
        }else if (router === ABOUT_US){
          setData("Sobre Nós");
          setContent(<AboutUsPage/>);
          }else {
            setData("Página Não Encontrada");
            setContent(<NotFound/>);
          }
    };
    

  React.useEffect(() => {        
      navigate(router.keyword);
  }, [router]); 

  return{ 
    data,
    isPending,
    content,
   };
}
export default useAbout;
