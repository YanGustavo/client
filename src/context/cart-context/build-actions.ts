import axios from "axios";
//import Cookies from 'js-cookie';
import * as actionTypes from './action-types';


export const buildActions = (dispatch) => {
  return {

      addToCart: (id:number, qty:number) => addToCartFn(dispatch, id, qty),
      removeFromCart: (id:number) => removeFromCartFn(dispatch, id),
      saveShippingAddress:(data:any) => saveShippingAddressFn(dispatch, data),
      savePaymentMethod: (data:any) => savePaymentMethodFn(dispatch, data),
      
  };
};

const addToCartFn =  async (dispatch, id, qty) =>  {
  try{
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
  }catch (error:any){
    dispatch({
      type: actionTypes.CART_DETAILS_FAIL,
      payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
     }); 
  } 
};
const removeFromCartFn = async (dispatch, id) => {
  dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: id,
  });

};
const saveShippingAddressFn = async (dispatch, data) => {
  dispatch({
    type: actionTypes.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

};
const savePaymentMethodFn = async (dispatch, data) => {
  dispatch({
    type: actionTypes.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });    
};