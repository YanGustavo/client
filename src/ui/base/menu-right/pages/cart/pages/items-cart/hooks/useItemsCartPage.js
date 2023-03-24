import React from "react";
import {useCartContext} from "context/cart-context";
import {useBaseContext} from "context/base-context";

const useItemsCartPage = () => {
  const [loading, setLoading] = React.useState(true);
   const [cart, setCart] = React.useState([{}]);
  const [total, setTotal] = React.useState(0);
  const [{cartItems}, actions] = useCartContext(); 
  const [baseState, baseActions] = useBaseContext();
  
  const checkOutHandler = () => {
   // history.push("/login?redirect=shipping");
  };
  const continueToShopping = () => {
    baseActions.setMenuRightHidden();
  };
  const  getCartItems = () => {
    if(cartItems !== undefined){
      setCart(cartItems);
      if(!cartItems === undefined && cartItems.length && cartItems.length !== 0 && cartItems !== null){
      baseActions.setCountCartItems(cartItems.length);
      setTotal(cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2));
      //document.querySelector(".addSomeItem").classList.remove("active"); 
      setLoading(false); 
      }    
    }else{
     document.querySelector(".addSomeItem").classList.add("active");
    }
    }

  React.useEffect(() => {
   getCartItems();
}, [cartItems]); 

return {
  loading,
  cart, 
  total,
  checkOutHandler,
  continueToShopping,
}

}
export default useItemsCartPage;