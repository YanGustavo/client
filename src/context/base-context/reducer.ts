import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
      case actionTypes.SET_HOME:
        return { ...state, menu_right_page: actionTypes.HOME};
      case actionTypes.SET_ORDER:
        return { ...state, menu_right_page: actionTypes.ORDER};
        case actionTypes.SET_FAVORITE:
        return { ...state, menu_right_page: actionTypes.FAVORITE};
        case actionTypes.SET_MENU_RIGHT_VISIBLE:
        return { ...state, menu_right_visible: 1};
        case actionTypes.SET_MENU_RIGHT_HIDDEN:
        return { ...state, menu_right_visible: 0};
        case actionTypes.SET_SIZE:
        return { ...state, size_media_query: action.payload};
        case actionTypes.SET_RESET:
            return { ...initialState };
  }
 throw Error('Unknown action: ' + action.type);
};