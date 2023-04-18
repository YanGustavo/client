'use client';
//icons
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from 'components/Button';
import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
import CreditCard from 'templates/base/ui/menu-right/pages/cart/components/credit-card';
import { Container } from 'templates/base/ui/menu-right/styles';
import CartItem from './components/cart-item';
import useItemsCartPage from './hooks/useItemsCartPage';

const AddSomeItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  justify-content: center;
  align-items: center;
  ${this}.active {
    transform: translateX(0%);
  }
`;
const CartCheckOutContianer = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  min-height: 280px;
  max-height: 320px;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.header_text_color}
    ${(props) => props.theme.colors.header_text_color};
  ${this}::-webkit-scrollbar {
    width: 0.4rem;
    border-radius: 3rem; /* width of the entire scrollbar */
  }
  ${this}::-webkit-scrollbar-track {
    background: transparent;
  }
  ${this}::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.header_text_color};
    border-radius: 6px;
    border: 3px solid ${(props) => props.theme.colors.header_text_color};
  }
`;
const CartContainer = styled.div`
  width: 100%;
  flex: 1;
  min-width: 320px;
  padding: 0px 10px;
  margin-top: 10px;
`;
const CartItems = styled.div`
  width: 100%;
  height: auto;
  ${this}::-webkit-scrollbar {
    display: none;
  }
`;
const TotalSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  margin-bottom: 20px;
  ${this} h3 {
    font-size: 18px;
    font-weight: 600;
    color: #2a2b3c;
  }
  ${this} p {
    font-size: 18px;
    font-weight: 600;
    color: #2a2b3c;
  }
  ${this} p span {
    font-size: 14px;
    color: ${theme.colors.header_text_color};
  }
`;
export default function ItemsCartPage({ actions }) {
  const { loading, cartItems, subTotal, HandlerCheckOut ,continueToShopping } =
    useItemsCartPage();
  return (
    <>
      {/* <CreditCard name="Yan Gustavo" />

      <Container>
        <Button onClick={continueToShopping}>
          Continue Comprando <ShoppingCartCheckoutIcon />
        </Button>
      </Container> */}
      <CartCheckOutContianer>
        <CartContainer>
          {subTotal === 0  ? (
            <CartItems>
              <AddSomeItem className="active">
                <img src="/img/empty-cart.png" alt="Seu Carrinho está vazio!" />
              </AddSomeItem>
            </CartItems>
          ) : (
            <>
              <CartItems>
                {cartItems.map((item) => (
                  <CartItem
                    sku={item.sku}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                   stock={item.stock}
                    quantity={item.quantity}
                  />
                ))}
              </CartItems>
              <TotalSection>
                <h3>Total</h3>
                <p>
                  <span>R$: </span> {subTotal},00
                </p>
              </TotalSection>
              <Container>
                <Button onClick={() => actions.setCartShippingPage()}>
                  Prosseguir Compra <KeyboardTabIcon />
                </Button>
              </Container>
            </>
          )}
        </CartContainer>
      </CartCheckOutContianer>
    </>
  );
}
