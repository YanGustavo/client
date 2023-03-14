import React from 'react';
import { actionType } from "redux/reducer-temp";
import { useStateValue } from "context/state-provider";
import { Items } from "utils/data";

const useCard = () => { //itemId, imgSrc, name, price, ratings,
  // const {itemId, imgSrc, name, price, ratings,} = React.useState(itemId, imgSrc, name, price, ratings,);
  //const [currentValue, setCurrentValue] = React.useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = React.useState(false);
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = React.useState(null);

  React.useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });         
    }
  }, [isCart]);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const setIsFavourite = (value) => {
    setFavourite(value);
  };
  // itemId,
  // imgSrc,
  // name,
  // price,
  // ratings,
 return{
  isFavourite,  
  //currentValue,
  setIsFavourite,
  setIsFavourite,
  setCart,
  handleClick,
 };   
}
export default useCard;