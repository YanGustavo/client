import Loading from "components/Loading";
import {Container, ContainerFlush, DebitCardContainer, AddSomeItem,} from '../../styles';
import CreditCard from "@/ui/base/menu-right/pages/components/credit-card";
import CartItem from "../components/cart-item";
import Button from "components/Button";
import useCartPage from "../hooks/useCartPage";
//icons
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import UndoIcon from '@mui/icons-material/Undo';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function CartPage() {
  const {loading,cart, total,  checkOutHandler,continueToShopping} = useCartPage();
  return (
    <>
      <DebitCardContainer>
        <CreditCard name="Yan Gustavo" />
        </DebitCardContainer>
                  
                <AddSomeItem className="addSomeItem">
                  <img
                  src="img/empty-cart.png"
                  alt="Seu Carrinho está vazio!"
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
    </>
    )}
    <Container>
    <ContainerFlush>
     <h3>Total<span>R$: {total}</span></h3>
     </ContainerFlush>
     </Container>
     <Container>
      <Button onClick={continueToShopping}>Continue Comprando <ShoppingCartCheckoutIcon/></Button>
    </Container>
    {total > 0 && (
    <Container>
      <Button onClick={checkOutHandler}>Prosseguir Compra <KeyboardTabIcon/></Button>
       </Container>
       )}
       
      
     </>
  );
}