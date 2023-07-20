import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
} from "../constants/productContest";

export const initialState = { products: [] };

export const ProductListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, productList: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, productList: action.payload };
    case PRODUCT_LIST_FAILS:
      return { loading: false, productList: action.payload };
    default:
      return state;
  }
};
