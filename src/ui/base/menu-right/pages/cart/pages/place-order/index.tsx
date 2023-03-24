import Button from "components/Button";
export default function PlaceOrderCartPage({actions}) {
  return (
    <> 
    <p>Seu Pedido</p>
    <Button onClick={() => actions.setOrderPage()}>Meus Pedidos</Button>
     </>
  );
}