import axios from "axios";
//import Cookies from 'js-cookie';
import * as actionTypes from './action-types';
import { CART_CLEAR_ITEMS } from "context/cart-context/action-types";
import * as actionTypesUser from 'context/user-context/action-types';
const getState = ():any => {

};

export const buildActions = (dispatch) => {
  return {
      createOrder: (order:any) => createOrderFn(dispatch, order),
      getOrderDetails: (id:number) => getOrderDetailsFn(dispatch, id),
      payOrder: (orderId:number, paymentResult:any) => payOrderFn(dispatch, orderId, paymentResult),
      listMyOrders: () => listMyOrdersFn(dispatch),
  };
};
// CREATE ORDER
const createOrderFn = async (dispatch,order) => {
  try {
    dispatch({ type: actionTypes.ORDER_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/orders`, order, config);
    dispatch({ type: actionTypes.ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_CLEAR_ITEMS, payload: data });

    localStorage.removeItem("cartItems");
  } catch (error:any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch( actionTypesUser.USER_LOGOUT);
    }
    dispatch({
      type: actionTypes.ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};

// ORDER DETAILS
const getOrderDetailsFn = async (dispatch, id) => {
  try {
    dispatch({ type: actionTypes.ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/orders/${id}`, config);
    dispatch({ type: actionTypes.ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error:any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch( actionTypesUser.USER_LOGOUT);
    }
    dispatch({
      type: actionTypes.ORDER_DETAILS_FAIL,
      payload: message,
    });
  }
};

// ORDER PAY
const payOrderFn = async (dispatch, orderId, paymentResult) => {
    try {
      dispatch({ type: actionTypes.ORDER_PAY_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );
      dispatch({ type: actionTypes.ORDER_PAY_SUCCESS, payload: data });
    } catch (error:any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch( actionTypesUser.USER_LOGOUT);
      }
      dispatch({
        type: actionTypes.ORDER_PAY_FAIL,
        payload: message,
      });
    }
  };

// USER ORDERS
const listMyOrdersFn = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ORDER_LIST_MY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/orders/`, config);
    dispatch({ type: actionTypes.ORDER_LIST_MY_SUCCESS, payload: data });
  } catch (error:any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch( actionTypesUser.USER_LOGOUT);
    }
    dispatch({
      type: actionTypes.ORDER_LIST_MY_FAIL,
      payload: message,
    });
  }
};
