import create from 'zustand';
import Cookies from 'js-cookie';
import { buildActions } from './build-actions';
import * as actionTypes from './action-types';
import { CART_ADD_SUCCESS, CART_CLEAR_ITEMS, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from './action-types';

export const initialState = {
  cartItems: Cookies.get('cartItems')?JSON.parce(Cookies.get('cartItems')): [],
  shippingAdress: Cookies.get('shippingAdress')?JSON.parce(Cookies.get('shippingAdress')): [],
  paymentMethod: Cookies.get('paymentMethod')?JSON.parce(Cookies.get('paymentMethod')): '',
};

export const useCartStore = create((set, get) => ({
  ...buildActions,
  ...initialState,
  dispatch: (action) => {
    set((state) => reducer(state, action));
    Cookies.set('cartItems', JSON.stringify(get().cartItems));
    Cookies.set('shippingAdress', JSON.stringify(get().shippingAdress));
    Cookies.set('paymentMethod', JSON.stringify(get().paymentMethod));
  },
}));