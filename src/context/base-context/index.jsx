import P from 'prop-types';
import React, {useState} from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';
import * as actionTypes from './action-types';

export const initialState = {
  size_media_query: "",
  menu_right_page: actionTypes.HOME,
  menu_right_visibility: 0,
  loading: false,
  count_cart_items: 0,
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