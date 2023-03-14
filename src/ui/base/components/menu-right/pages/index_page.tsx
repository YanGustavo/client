//import { Suspense } from 'react';
//import Loading from 'components/Loading';
import Link from 'next/link';
import {Container} from 'templates/base/styles';
import * as SMenuRight from '../styles';
import CreditCard from "ui/base/components/menu-right/components/credit-card";
import CartItem from "../components/cart-item";
import Button from "components/Button";
//import useIndexPage from "./hooks/useIndexPage";
//import useIndexPageAnimate from "./hooks/useIndexPageAnimate";
export default function IndexPage() {
  //const {cart, total, totalPrice} = useIndexPage();
  const cart = false;
  const totalPrice = false;
 // useIndexPageAnimate();
  return (
    <>
                  <CreditCard name="Yan Gustavo" />
                <SMenuRight.AddSomeItem>
                  <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                  alt=""
                  />
                </SMenuRight.AddSomeItem>               
              <Container>
                 <CartItem
            key={1}
            itemId={1}
            name="iPhone 8"
            imgSrc="/images/1.png"
            price="2.200,00"
          />  
                <h3>Total</h3>
                <p>
                  <span>$ </span>10,00 {totalPrice}
                </p>
                </Container>
                
                <Container>
                  <Button ><Link href="">Check Out</Link></Button>
                  {/* color='custom' variant='secondary' size='large' */}
                </Container>
    <div className="cartItems">
   {/*  <Suspense fallback={<Loading/>}>
        {cart &&
        cart.map((data) => (
          <CartItem
            key={data.id}
            itemId={data.id}
            name={data.name}
            imgSrc={data.imgSrc}
            price={data.price}
          />
        ))}
         </Suspense>  */}
               
    </div>
  </>
  );
}