import {CheckOut,} from '../../styles';
import Button from "components/Button";
export default function ShippingCartPage({actions}) {
  return (
    <> 
    <p>Shipping Cart Page</p>
    <Button onClick={() => actions.setCartItemsPage()}>Voltar ao Carrinho</Button>
    <Button onClick={() => actions.setCartPaymentPage()}>Pagamento</Button>
     </>
  );
}