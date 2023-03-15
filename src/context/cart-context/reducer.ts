//import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CART_DETAILS_REQUEST:
      return { ...state, loading: true};
    case actionTypes.CART_ADD_SUCCESS:
      const item:any = action.payload;
      const existItem:any = state.cartItems.find(
        (x:any) => x.product === item.product
        );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x:any) =>
            x.product === existItem.product ? item : x
          ),
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          loading: false,
        };
      }
      case actionTypes.CART_DETAILS_FAIL:
        return { loading: false, error: action.payload };
    case actionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x:any) => x.product !== action.payload),
      };
    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case actionTypes.CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};