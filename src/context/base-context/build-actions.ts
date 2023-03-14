import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
      home: () => dispatch({ type: actionTypes.SET_HOME }),
      order: () => dispatch({ type: actionTypes.SET_ORDER }),
      favorite: () => dispatch({ type: actionTypes.SET_FAVORITE }),
      reset: () => dispatch({ type: actionTypes.SET_RESET }),
      setSize: (size:string) => dispatch({ type: actionTypes.SET_SIZE, payload: size, }),
      setMenuRightVisible: () => dispatch({ type: actionTypes.SET_MENU_RIGHT_VISIBLE }),
      setMenuRightHidden: () => dispatch({ type: actionTypes.SET_MENU_RIGHT_HIDDEN }),
  };
};