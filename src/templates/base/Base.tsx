import React, {Suspense} from 'react';
import useBase from "./useBase";
import Loading from 'components/Loading';
import * as SBase from './styles';
import Header from "ui/base/components/header";
import Footer from "ui/base/components/footer";
import MenuRight from "ui/base/components/menu-right";
import Location from "ui/base/components/header/components/location";

const Base = ({children}: { children: React.ReactNode }) => { 
 useBase(); 
  return (    
    <SBase.BaseTemplate>
    <Suspense fallback={<Loading/>}>
      <Header>
        <Location/>
      </Header>
    </Suspense>       
    <SBase.BaseMain>  
    <Suspense fallback={<Loading/>}> 
      {children}  
    </Suspense> 
    <Footer/>    
    </SBase.BaseMain>      
    {false && (<MenuRight/>)} 
    <MenuRight/>
    {/*
    Suporte

 Qualquer dúvida ou problema pode nos contatar. Botão de Chat no canto inferior direito.

Satisfação ou Reembolso

Se não estiver satisfeito, entre em contato conosco.

Pagamento Seguro

Pagamento Seguro processado pela MERCADO PAGO

Frete Grátis

Válido para todo o Brasil! aproveite!  */}
    
  </SBase.BaseTemplate>
  
  );
}  
export default Base;
