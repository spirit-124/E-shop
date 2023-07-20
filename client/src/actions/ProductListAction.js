import axios from "axios";

import {
  PRODUCT_DETAILS_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productContest";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
