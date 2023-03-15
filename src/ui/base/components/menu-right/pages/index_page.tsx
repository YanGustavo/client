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
  const {cartItems, subTotal, total, checkOutHandler,continueToShopping} = useIndexPage();
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
              <Container>
           <div className="cartItems">
          <Suspense fallback={<Loading/>}>
        {/* {!(cartItems === [] ) && (
        cartItems.map((data) => (
          <CartItem
            key={data._id}
            itemId={data.id}
            name={data.name}
            imgSrc={data.imgSrc}
            price={data.price}
          />
        )))} */}
         </Suspense>               
    </div>
    </Container>
    <Container>
     <h3>Sub-Total</h3>
     <p> <span>$ </span>{subTotal}</p>
     <h3>Total</h3>
     <p> <span>$ </span>{total}</p>
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
  );
}