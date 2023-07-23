import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstant";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://localhost:8080/api/v1/products/${id}`
  );
  try {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  } catch (err) {
    console.log(err);
  }

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
