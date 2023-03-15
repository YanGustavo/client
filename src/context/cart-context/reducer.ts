//import { initialState } from '.';
import Cookies from 'js-cookie';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CART_DETAILS_REQUEST:
      return { ...state, loading: true};
    case actionTypes.CART_ADD_SUCCESS:{
      const newItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => Number(item._id) === Number(newItem._id)
      );
      const cartItems = existItem
        ? state.cartItems.map((item) =>
            Number(item._id) === Number(existItem._id) ? newItem : item
          )
        : [...state.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state, cartItems }));
      return { ...state, cartItems,};
    }
      case actionTypes.CART_DETAILS_FAIL:
        return { loading: false, error: action.payload };
    case actionTypes.CART_REMOVE_ITEM:
      return { ...state, cartItems: [], };
    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {...state, shippingAddress: {...action.payload},};
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {...state, paymentMethod: action.payload,};
    case actionTypes.CART_CLEAR_ITEMS:
      return {...state, shippingAddress: { location: {} }, paymentMethod: '',};
    default:
      return state;
  }
};