import React from 'react';
import {useCartContext} from "context/cart-context";


const useCard = () => {
  const [state, actions] = useCartContext();
  const [isFavourite, setFavourite] = React.useState(false);

 
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const setIsFavourite = (value) => {
    setFavourite(value);
  };
  const addToCart = (id) => {
    actions.addToCart(id, 1);
  };
  
 return{
  isFavourite,  
  setIsFavourite,
  handleClick,
  addToCart,
 };   
}
export default useCard;