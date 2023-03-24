'use client'
import {CheckOut,} from '../../styles';
import {AddSomeItem, CartCheckOutContianer, CartContainer, CartItems, TotalSection,} from './styles';
import CreditCard from "@/ui/base/menu-right/pages/cart/components/credit-card";
import CartItem from "./components/cart-item";
import Button from "components/Button";
import useItemsCartPage from "./hooks/useItemsCartPage";
//icons
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
//import UndoIcon from '@mui/icons-material/Undo';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
export default function ItemsCartPage({actions}) {
  const {loading,cart, total,  checkOutHandler,continueToShopping} = useItemsCartPage();
  return (
    <>
     {false? (
            <AddSomeItem className="active">
            <img
            src="img/empty-cart.png"
            alt="Seu Carrinho está vazio!"
            />
          </AddSomeItem> 
          ) : (
            <>
            <CartCheckOutContianer>
              <CartContainer>

                <CartItems>
                <CartItem
                        key={1}
                        itemId={1}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                       <CartItem
                        key={2}
                        itemId={2}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                       <CartItem
                        key={3}
                        itemId={4}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                       <CartItem
                        key={4}
                        itemId={4}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                       <CartItem
                        key={5}
                        itemId={5}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                       <CartItem
                        key={1}
                        itemId={1}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                       <CartItem
                        key={6}
                        itemId={6}
                        name="Camisa Polo"
                        imgSrc="images/1.png"
                        price={"255.00"}
                      />
                  {/* {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))} */}
                </CartItems>
              </CartContainer>              
            </CartCheckOutContianer>
            <TotalSection>
            <h3>Total</h3>
            <p>
              <span>$ </span> {total}
            </p>
          </TotalSection>
          {/* <CheckOut>Check Out</CheckOut> */}
          <CheckOut>
          <Button onClick={continueToShopping}>Continue Comprando <ShoppingCartCheckoutIcon/></Button>
    {total > -1 && (
      <Button onClick={() => actions.setCartShippingPage()}>Prosseguir Compra <KeyboardTabIcon/></Button>
       )}
          
          </CheckOut>
          
          </> )}  
     </>
  );
}