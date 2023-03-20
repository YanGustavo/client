import Loading from "components/Loading";
import {Container, ContainerFlush, DebitCardContainer, AddSomeItem,} from '../styles/styles';
import CreditCard from "@/ui/base/menu-right/pages/components/credit-card";
import CartItem from "./components/cart-item";
import Button from "components/Button";
import useCartPage from "./hooks/useCartPage";

export default function CartPage() {
  const {loading,cart, total, checkOutHandler,continueToShopping} = useCartPage();
  return (
    <>
      <DebitCardContainer>
        <CreditCard name="Yan Gustavo" />
        </DebitCardContainer>
                  
                <AddSomeItem className="addSomeItem">
                  <img
                  src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                  alt=""
                  />
                </AddSomeItem> 
                {loading ? (<Loading/>): ( 
                  <>          
              <Container>
           <div className="cartItems">          
            {cart.length > 0 && (
            cart.map((data,Cart) => (
              <CartItem  key={Cart} data = {data}/>
            )))}       
                         
    </div>
    </Container>
    <Container>
    <ContainerFlush>
     <h3>Total:<span>R$: </span>{total}</h3>
     </ContainerFlush>
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