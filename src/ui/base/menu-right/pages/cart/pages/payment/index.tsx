import {CheckOut,} from '../../styles';
import Button from "components/Button";
export default function PaymentCartPage({actions}) {
  return (
    <>
    <p>Payment Cart Page</p> 
    <Button onClick={() => actions.setCartShippingPage()}>Voltar</Button>
    <Button onClick={() => actions.setCartPlaceOrderPage()}>Finalizar Compra</Button>
     </>
  );
}