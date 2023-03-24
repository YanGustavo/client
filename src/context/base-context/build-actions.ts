import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
      //Pages Menu Right
      setCartPage: () => dispatch({ type: actionTypes.SET_CART_PAGE }),
      setProfilePage: () => dispatch({ type: actionTypes.SET_PROFILE_PAGE }),
      setLoginPage: () => dispatch({ type: actionTypes.SET_LOGIN_PAGE }),
      //Pages Cart
      setCartItemsPage: () => dispatch({ type: actionTypes.SET_CART_ITEMS_PAGE }),
      setCartShippingPage: () => dispatch({ type: actionTypes.SET_CART_SHIPPING_PAGE }),
      setCartPaymentPage: () => dispatch({ type: actionTypes.SET_CART_PAYMENT_PAGE }),
      setCartPlaceOrderPage: () => dispatch({ type: actionTypes.SET_CART_PLACE_ORDER_PAGE }),
      //Pages Profile
      setOrderPage: () => dispatch({ type: actionTypes.SET_ORDER_PAGE }),      
      setFavoritePage: () => dispatch({ type: actionTypes.SET_FAVORITE_PAGE }),
      setMessagePage: () => dispatch({ type: actionTypes.SET_MESSAGE_PAGE }),      
      setConfigPage: () => dispatch({ type: actionTypes.SET_CONFIG_PAGE }),
      //Pages Login
      setSingInPage: () => dispatch({ type: actionTypes.SET_SIGNIN_PAGE }),
      setRegisterPage: () => dispatch({ type: actionTypes.SET_REGISTER_PAGE }),
      //State Menu Right and ToggleMenu Visibility 
      setMenuRightVisible: () => dispatch({ type: actionTypes.SET_MENU_RIGHT_VISIBLE}),
      setMenuRightHidden: () => dispatch({ type: actionTypes.SET_MENU_RIGHT_HIDDEN}),
      //Media Query
      setSize: (size:string) => dispatch({ type: actionTypes.SET_SIZE, payload: size, }),
      //Counters State
      setCountCartItems: (payload) => dispatch({ type: actionTypes.SET_COUNT_CART_ITEMS, payload: payload}),
      //Reset
      reset: () => dispatch({ type: actionTypes.SET_RESET }),
  };
};