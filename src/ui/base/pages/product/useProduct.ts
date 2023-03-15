import React from 'react';
import { toast } from 'react-toastify';
import {useCartContext} from "context/cart-context";
import {useBaseContext} from "context/base-context";
//Products
import data from "utils/productTest";

type UseProductProps = {
  params: any;
  ref: any;
}

const useProduct = ({params, ref}: UseProductProps) => {  
  const [state, actions] = useCartContext();
  const [baseState, baseActions] = useBaseContext();
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
  const addToCartHandler = async (id, qty) => {
    actions.addToCart(id, qty);
    // const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    // const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/products/${product._id}`);

    // if (data.countInStock < quantity) {
    //   return toast.error('Sorry. Product is out of stock');
    // }

    // dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    // router.push('/cart');
    baseActions.setMenuRightVisible();
    return toast.error('Sorry. Product is out of stock');
  };


return{
  data,
  quantity,
  carousel,
  preview,
  setCarousel,
  discountPrice,
  nextHandler,
  prevHandler,
  quantityHandler,
  activeImageHandler,
  addToCartHandler,
};
}
export default useProduct;