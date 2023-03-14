import P from 'prop-types';
import React, {useState} from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';
import * as actionTypes from './action-types';

export const initialState = {
  value: actionTypes.HOME,
  loading: false,
};
const Context = React.createContext([initialState]);

export const ProductContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = React.useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};



export const useProductContext = () => {
  const context = React.useContext(Context);
  return [...context];
};