import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
       //Pages Menu Right
      case actionTypes.SET_CART_PAGE:
        return { ...state, menu_right_visible: true, toggle_menu_visible: false, menu_right_page: actionTypes.SET_CART_PAGE};      
        case actionTypes.SET_PROFILE_PAGE:
        return { ...state,  menu_right_visible: true, toggle_menu_visible: false, menu_right_page: actionTypes.SET_PROFILE_PAGE};        
        case actionTypes.SET_LOGIN_PAGE:
        return { ...state, menu_right_visible: true, toggle_menu_visible: false, menu_right_page: actionTypes.SET_LOGIN_PAGE};
        // Pages Cart
        case actionTypes.SET_CART_ITEMS_PAGE:
        return { ...state,menu_right_page: actionTypes.SET_CART_PAGE, cart_page: actionTypes.SET_CART_ITEMS_PAGE};
        case actionTypes.SET_CART_SHIPPING_PAGE:
        return { ...state,menu_right_page: actionTypes.SET_CART_PAGE, cart_page: actionTypes.SET_CART_SHIPPING_PAGE};
        case actionTypes.SET_CART_PAYMENT_PAGE:
        return { ...state,menu_right_page: actionTypes.SET_CART_PAGE, cart_page: actionTypes.SET_CART_PAYMENT_PAGE};
        case actionTypes.SET_CART_PLACE_ORDER_PAGE:
        return { ...state,menu_right_page: actionTypes.SET_CART_PAGE, cart_page: actionTypes.SET_CART_PLACE_ORDER_PAGE};
        // Pages Profile
        case actionTypes.SET_ORDER_PAGE:
        return { ...state, menu_right_page: actionTypes.SET_PROFILE_PAGE, profile_page: actionTypes.SET_ORDER_PAGE, cart_page: actionTypes.SET_CART_ITEMS_PAGE};
        case actionTypes.SET_FAVORITE_PAGE:
        return { ...state, menu_right_page: actionTypes.SET_PROFILE_PAGE, profile_page: actionTypes.SET_FAVORITE_PAGE};
        case actionTypes.SET_MESSAGE_PAGE:
        return { ...state, menu_right_page: actionTypes.SET_PROFILE_PAGE, profile_page: actionTypes.SET_MESSAGE_PAGE};
        case actionTypes.SET_CONFIG_PAGE:
        return { ...state,menu_right_page: actionTypes.SET_PROFILE_PAGE, profile_page: actionTypes.SET_CONFIG_PAGE};
        // Pages Login
        case actionTypes.SET_SIGNIN_PAGE:
        return { ...state, menu_right_page: actionTypes.SET_LOGIN_PAGE, login_page: actionTypes.SET_SIGNIN_PAGE};
        case actionTypes.SET_REGISTER_PAGE:
        return { ...state, menu_right_page: actionTypes.SET_LOGIN_PAGE, login_page: actionTypes.SET_REGISTER_PAGE};
        //State Menu Right and ToggleMenu Visibility
        case actionTypes.SET_MENU_RIGHT_VISIBLE:
        return { ...state, menu_right_visible: true, toggle_menu_visible: false};
        case actionTypes.SET_MENU_RIGHT_HIDDEN:
        return { ...state, menu_right_visible: false, toggle_menu_visible: true};
        //Media Query
        case actionTypes.SET_SIZE:
        return { ...state, size_media_query: action.payload};
        //Counters State
        case actionTypes.SET_COUNT_CART_ITEMS:
        return { ...state, count_cart_items: action.payload};
        //Reset
        case actionTypes.SET_RESET:
            return { ...initialState };
  }
 throw Error('Unknown action: ' + action.type);
};