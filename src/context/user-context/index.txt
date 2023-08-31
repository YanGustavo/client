import P from 'prop-types';
import React, {useState} from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';
import * as actionTypes from './action-types';
import Cookies from 'js-cookie';

export const initialState = {
  User: Cookies.get('User')
    ? JSON.parse(Cookies.get('User'))
    : { UserItems: [], shippingAddress: {}, paymentMethod: '' },
};

const Context = React.createContext([initialState]);

export const UserContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = React.useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};



export const useUserContext = () => {
  const context = React.useContext(Context);
  return [...context];
};