import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
      // case actionTypes.SET_HOME:
      //   return { ...state, value: actionTypes.HOME};
      // case actionTypes.SET_ORDER:
      //   return { ...state, value: actionTypes.ORDER};
      //   case actionTypes.SET_RESET:
      //       return { ...initialState };
  }
 throw Error('Unknown action: ' + action.type);
};