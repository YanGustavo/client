import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
      cart: () => dispatch({ type: actionTypes.SET_CART }),
      order: () => dispatch({ type: actionTypes.SET_ORDER }),
      profile: () => dispatch({ type: actionTypes.SET_PROFILE }),
      favorite: () => dispatch({ type: actionTypes.SET_FAVORITE }),
      message: () => dispatch({ type: actionTypes.SET_MESSAGE }),
      login: () => dispatch({ type: actionTypes.SET_LOGIN }),
      config: () => dispatch({ type: actionTypes.SET_CONFIG }),
      reset: () => dispatch({ type: actionTypes.SET_RESET }),
      setSize: (size:string) => dispatch({ type: actionTypes.SET_SIZE, payload: size, }),
      setMenuRightVisible: () => dispatch({ type: actionTypes.SET_MENU_RIGHT_VISIBLE }),
      setMenuRightHidden: () => dispatch({ type: actionTypes.SET_MENU_RIGHT_HIDDEN }),
      setCountCartItems: (payload) => dispatch({ type: actionTypes.SET_COUNT_CART_ITEMS, payload: payload}),
  };
};