import { useStateValue } from "context/state-provider";
const useIndexPageAnimate = ({cart, total, totalPrice}) => {
  
 React.useEffect(() => {
   if(cart){
     document.querySelector(".addSomeItem").classList.toggle("unactive");
   }
}, [cart, total, totalPrice]); 
return;
}
export default useIndexPageAnimate;