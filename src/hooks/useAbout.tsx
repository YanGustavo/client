import React from 'react';
import {PRIVACY_POLICY, EXCHANGE_AND_REFUND_POLICY, SHIPPING_POLICY, SERVICE_TERMS, CONTACT, FAQ, ABOUT_US, NOT_FOUND, LOADING, ERROR } from "constants/about-constants";
import {PrivacyPolicyPage, ExchangeAndRefundPage, ShippingPolicyPage, ServiceTermsPage, ContactPage,FAQPage, AboutUsPage }from "lib/about";
import NotFound from "ui/NotFound";
import Loading from "components/Loading";
const useAbout = (router) => { 
  const [data, setData] = React.useState("Carregando");
  const [content, setContent] = React.useState(<Loading/>);

  function navigate (router){
        if (router === PRIVACY_POLICY){
          setData("Politicas de Privacidade");
          setContent(<PrivacyPolicyPage/>);
        
      }else if (router === EXCHANGE_AND_REFUND_POLICY){
            setData("Politicas de Trocas e Reembolso");
            setContent(<ExchangeAndRefundPage/>);
      }else if (router === SHIPPING_POLICY){
          setData("Politicas de Envio");
          setContent( <ShippingPolicyPage/>);
        }else if (router === SERVICE_TERMS){
          setData("Termos de Serviço");
          setContent(<ServiceTermsPage/>);
          }else if (router === CONTACT){
            setData("Contato");
            setContent(<ContactPage/>);
        }else if (router === FAQ){
          setData("FAQ - Perguntas Frequentes");
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
    content,
   };
}
export default useAbout;
