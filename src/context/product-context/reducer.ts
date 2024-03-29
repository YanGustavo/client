import { initialState } from '.';
import * as actionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        error:false,
        pages: action.payload.pages,
        page: action.payload.page,
        products: action.payload.products,
      };
    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
      case actionTypes.PRODUCT_DETAILS_REQUEST:
      return { ...state, product: { reviews: [] }, loading: true };
    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
      case actionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};