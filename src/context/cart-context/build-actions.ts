import axios from "axios";
import Cookies from 'js-cookie';
import * as actionTypes from './action-types';


export const buildActions = (dispatch, getState) => {
  return {

      addToCart: (id:number, qty:number) => addToCartFn(id, qty, dispatch, getState),
      removeFromCart: (id:number) => removeFromCartFn(id, dispatch, getState),
      saveShippingAddress:(data:any) => saveShippingAddressFn(data, dispatch),
      savePaymentMethod: (data:any) => savePaymentMethodFn(data, dispatch),
      cartClearItems: () => dispatch({ type: actionTypes.CART_CLEAR_ITEMS }),
      
  };
};

const addToCartFn =  async (id, qty, dispatch, getState) =>  {
  console.log("CHegou aqui"+id+qty);
  try{
    console.log("entrou no try"+id+qty);
    dispatch({ type: actionTypes.CART_DETAILS_REQUEST });
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/products/${id}`);
    console.log(data);
    dispatch({
      type: actionTypes.CART_ADD_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    }); 
    //localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); 
    //Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
    Cookies.set('cart', JSON.stringify(getState().cart.cartItems));
  }catch (error:any){
    console.log("entrou no catch"+id+qty);
    dispatch({
      type: actionTypes.CART_DETAILS_FAIL,
      payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
     }); 
  } 
};
const removeFromCartFn =  async (id, dispatch, getState) =>  {
  dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: id,
  });
  Cookies.set('cart', JSON.stringify(getState().cart.cartItems));
};
const saveShippingAddressFn =  async (data, dispatch) => {
  dispatch({
    type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  Cookies.set('shippingAddress', JSON.stringify(data));
};
const savePaymentMethodFn =  async (data, dispatch) => {
  dispatch({
    type: actionTypes.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  }); 
  Cookies.set('paymentMethod', JSON.stringify(data));   
};