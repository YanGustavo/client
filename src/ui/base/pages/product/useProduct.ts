import React from 'react';
//Products
import data from "utils/productTest";

type UseProductProps = {
  params: any;
  ref: any;
}

const useProduct = ({params, ref}: UseProductProps) => {  
  //Images
const minus = "/images/icon-minus.svg";
const plus = "./images/product/icon-plus.svg";
const  prev = "./images/product/icon-previous.svg";
const  next = "./images/product/icon-next.svg";
const cart = "./images/product/icon-cart-white.svg";
  const [quantity, setQuantity] = React.useState(0);
  const [preview, setPreview] = React.useState(0);
  const [carousel, setCarousel] = React.useState(false);


  //Handlers
  const discountPrice = (price, percentage) => {
    return price * (percentage / 100);
  };

  const nextHandler = () => {
    setPreview((prev) => (prev === data[0].images.length - 1 ? 0 : prev + 1));
  };
  const prevHandler = () => {
    setPreview((prev) => (prev === 0 ? data[0].images.length - 1 : prev - 1));
  };

  const quantityHandler = (increment) => {
    if (increment) {
      setQuantity((prev) => (prev === 10 ? prev : prev + 1));
    } else {
      setQuantity((prev) => (prev === 0 ? prev : prev - 1));
    }
  };

  const activeImageHandler = (key) => {
    setPreview(key);
  };

return{
  data,
  quantity,
  carousel,
  preview,
  minus,
  plus,
  prev,
  next,
  cart,
  setCarousel,
  discountPrice,
  nextHandler,
  prevHandler,
  quantityHandler,
  activeImageHandler,
};
}
export default useProduct;