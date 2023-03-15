import axios from "axios";
import Cookies from 'js-cookie';
import * as actionTypes from './action-types';
import { ORDER_LIST_MY_RESET } from "context/order-context/action-types";

export const buildActions = (state, dispatch) => {
  return {
      login: (email:string, password:string) => loginFn(email, password,dispatch),
     logout: () => logoutFn(dispatch),
     register: (email:string, password:string) => registerFn(email, password,dispatch), 
     getUserDetails: (id:number) => getUserDetailsFn(id, state, dispatch), 
     updateUserProfile: (user:any) => updateUserProfileFn(user, state, dispatch), 
   };
};
// LOGIN
const loginFn = async (email, password,dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config
    );
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error:any) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGOUT
export const logoutFn = (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: actionTypes.USER_LOGOUT });
  dispatch({ type: actionTypes.USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
};

// REGISTER
const registerFn = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users`,
      { name, email, password },
      config
    );
    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error:any) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER DETAILS
const getUserDetailsFn = async (id, dispatch, state) => {
  try {
    dispatch({ type: actionTypes.USER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = state();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);
    dispatch({ type: actionTypes.USER_DETAILS_SUCCESS, payload: data });
  } catch (error:any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      //dispatch(logout());
      logoutFn(dispatch);
    }
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

// UPDATE PROFILE
const updateUserProfileFn =  async (user, dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);
    dispatch({ type: actionTypes.USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error:any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      logoutFn(dispatch);
    }
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};
export default buildActions;

