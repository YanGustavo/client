'use client'
import CreditCard from "ui/base/menu-right/pages/cart/components/credit-card";
import {Container} from "ui/base/menu-right/styles";
import {AddSomeItem, CartCheckOutContianer, CartContainer, CartItems, TotalSection,} from './styles';
import CartItem from "./components/cart-item";
import Button from "components/Button";
import useItemsCartPage from "./hooks/useItemsCartPage";
//icons
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
//import UndoIcon from '@mui/icons-material/Undo';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
export default function ItemsCartPage({actions}) {
  const {loading,cartItems, total,  checkOutHandler,continueToShopping} = useItemsCartPage();
  return (
    <>
        <CreditCard name="Yan Gustavo" />    
           
            <Container><Button onClick={continueToShopping}>Continue Comprando <ShoppingCartCheckoutIcon/></Button></Container>
                        <CartCheckOutContianer>
              <CartContainer>
      {cartItems.length === 0 ? (
        <CartItems>
        <AddSomeItem className="active">
        <img
        src="/img/empty-cart.png"
        alt="Seu Carrinho está vazio!"
        />
      </AddSomeItem> 
      </CartItems>
      ) : (
        <>
        <CartItems>
          {cartItems.map(item => (
            <CartItem
            key={item.product}
            itemId={item.product}
            name={item.name}
            imgSrc={item.image}
            price={item.price}
          />
          ))}
           </CartItems>
               
               
             <TotalSection>
             <h3>Total</h3>
             <p>
               <span>R$: </span> {total},00
             </p>
           </TotalSection>
       <Container><Button onClick={() => actions.setCartShippingPage()}>Prosseguir Compra <KeyboardTabIcon/></Button></Container>
     </>
      )}
      </CartContainer>              
      </CartCheckOutContianer>
     </>
  );
}