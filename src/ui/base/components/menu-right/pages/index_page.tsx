import {Suspense} from "react";
import Loading from "components/Loading";
import Link from 'next/link';
import {Container} from 'templates/base/styles';
import * as SMenuRight from '../styles';
import CreditCard from "ui/base/components/menu-right/components/credit-card";
import CartItem from "../components/cart-item";
import Button from "components/Button";
import useIndexPage from "./hooks/useIndexPage";

export default function IndexPage() {
  const {loading,cart, total, checkOutHandler,continueToShopping} = useIndexPage();
  return (
    <>
      <SMenuRight.DebitCardContainer>
        <CreditCard name="Yan Gustavo" />
        </SMenuRight.DebitCardContainer>
                  
                <SMenuRight.AddSomeItem className="addSomeItem">
                  <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                  alt=""
                  />
                </SMenuRight.AddSomeItem> 
                {loading ? (<Loading/>): ( 
                  <>          
              <Container>
           <div className="cartItems">
           
            <Suspense fallback={<Loading/>}>            
            {cart.length > 0 && (
            cart.map((data,index) => (
              <CartItem  key={index} data = {data}/>
            )))}
             </Suspense>          
                         
    </div>
    </Container>
    <Container>
     <h3>Total:<span>R$: </span>{total}</h3>
     </Container>
     <Container>
      <Button onClick={continueToShopping}>Continue Comprando</Button>
    </Container>
    {total > 0 && (
    <Container>
      <Button onClick={checkOutHandler}>Check Out</Button>
       </Container>
       )}
       </>
      )}
     </>
  );
}