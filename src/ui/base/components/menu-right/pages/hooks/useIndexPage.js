import React from "react";
import { useStateValue } from "context/state-provider";
const useIndexPage = () => {
  const [{ cart, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = React.useState(0);
 React.useEffect(() => {
   if(cart){
     document.querySelector(".addSomeItem").classList.toggle("unactive");
   }
}, [cart, total, totalPrice]); 
return {
  cart,
  total,
  totalPrice,
}
}
export default useIndexPage;