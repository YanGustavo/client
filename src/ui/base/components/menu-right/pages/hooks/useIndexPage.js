import React from "react";
import {useCartContext} from "context/cart-context";
import {useBaseContext} from "context/base-context";

const useIndexPage = () => {
  const [{cart: { cartItems },}, actions] = useCartContext();
  const [baseState, baseActions] = useBaseContext();
  const total = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const subTotal = cartItems.reduce((a, c) => a + c.quantity, 0);
  React.useEffect(() => {
   if(!cartItems === []){
     document.querySelector(".addSomeItem").classList.remove("active");
   }else{
    document.querySelector(".addSomeItem").classList.add("active");
   }
}, [cartItems, total]); 
const checkOutHandler = () => {
  history.push("/login?redirect=shipping");
};
const continueToShopping = () => {
  baseActions.setMenuRightHidden();
};
return {
  cartItems,  
  subTotal,
  total,
  checkOutHandler,
  continueToShopping,
}
}
export default useIndexPage;