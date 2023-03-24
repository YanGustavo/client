'use client'
//import Loading from "components/Loading";
import { DebitCardContainer,} from '../../styles';
import CreditCard from "@/ui/base/menu-right/pages/cart/components/credit-card";
import {Container, ContainerFlush} from "templates/base/styles";
//hooks
import useCartPage from "./hooks/useCartPage";

export default function CartPage() {
  const {content} = useCartPage(); 

  return (
    <>    
       <DebitCardContainer>
        <CreditCard name="Yan Gustavo" />
        </DebitCardContainer>
        {content}  
     </>
  );
}