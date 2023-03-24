import P from 'prop-types';
import React, {useState} from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';
import * as actionTypes from './action-types';

export const initialState = {
  size_media_query: "",
  background_color: "",
  menu_right_page: actionTypes.SET_HOME_PAGE,
  cart_page: actionTypes.SET_CART_ITEMS_PAGE,
  profile_page: actionTypes.SET_ORDER_PAGE,
  login_page: actionTypes.SET_SIGNIN_PAGE,
  menu_right_visible: false,
  toggle_menu_visible: true,
  loading: false,
  count_cart: 0,
  count_order: 0,
  count_message: 0,
};
const Context = React.createContext([initialState]);

export const BaseContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = React.useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};



export const useBaseContext = () => {
  const context = React.useContext(Context);
  return [...context];
};