import axios from "axios";
import api from "services/api";
import {useQuery} from "@tanstack/react-query";
import * as actionTypes from './action-types';
// import { logoutFn } from "context/user-context/build-actions";

export const buildActions = (dispatch,getState) => {
  return {
    listProduct: (keyword:string, pageNumber:string) => listProductFn(keyword, pageNumber, dispatch),
    listProductDetails: (id) => listProductDetailsFn(id, dispatch),
    createProductReview:(productId:number, review:number) => createProductReviewFn(productId, review,dispatch, getState),
  };
};
type ProductsProps = {
  _id: number;
  name: string;
  brand: string;
  price: number; 

 }
// PRODUCT LIST
const listProductFn = async (keyword, pageNumber, dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
      const response = await api.get<ProductsProps[]>(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
      dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: response.data});
    } catch (error:any) {
      dispatch({
        type: actionTypes.PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE PRODUCT
const listProductDetailsFn = async (id, dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/products/${id}`);
    dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error:any) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// PRODUCT REVIEW CREATE
const createProductReviewFn =async (productId, review,dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/products/${productId}/review`, review, config);
      dispatch({ type: actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error:any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
       // logoutFn(dispatch);
      }
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };
