import P from 'prop-types';
import React, {useState} from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';
import * as actionTypes from './action-types';
import Cookies from 'js-cookie';

export const initialState = {
  cartItems: Cookies.get('cartItems')?JSON.parce(Cookies.get('cartItems')): [],
  shippingAdress: Cookies.get('shippingAdress')?JSON.parce(Cookies.get('shippingAdress')): [],
  paymentMethod: Cookies.get('paymentMethod')?JSON.parce(Cookies.get('paymentMethod')): '',
};

const Context = React.createContext([initialState]);

export const CartContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = React.useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};



export const useCartContext = () => {
  const context = React.useContext(Context);
  return [...context];
};