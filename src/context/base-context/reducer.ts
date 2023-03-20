import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
       //Pages Menu Right
      case actionTypes.SET_CART:
        return { ...state, menu_right_page: actionTypes.CART};      
        case actionTypes.SET_PROFILE:
        return { ...state, menu_right_page: actionTypes.PROFILE};        
        case actionTypes.SET_LOGIN:
        return { ...state, menu_right_page: actionTypes.LOGIN};
        // Pages Profile
        case actionTypes.SET_ORDER:
        return { ...state, profile_page: actionTypes.ORDER};
        case actionTypes.SET_FAVORITE:
        return { ...state, profile_page: actionTypes.FAVORITE};
        case actionTypes.SET_MESSAGE:
        return { ...state, profile_page: actionTypes.MESSAGE};
        case actionTypes.SET_CONFIG:
        return { ...state, profile_page: actionTypes.CONFIG};
        //State Menu Right and ToggleMenu Visibility
        case actionTypes.SET_MENU_RIGHT_VISIBLE:
        return { ...state, menu_right_visible: 1};
        case actionTypes.SET_MENU_RIGHT_HIDDEN:
        return { ...state, menu_right_visible: 0};
        case actionTypes.SET_SIZE:
        return { ...state, size_media_query: action.payload};
        //counters State
        case actionTypes.SET_COUNT_CART_ITEMS:
        return { ...state, count_cart_items: action.payload};
        case actionTypes.SET_RESET:
            return { ...initialState };
  }
 throw Error('Unknown action: ' + action.type);
};