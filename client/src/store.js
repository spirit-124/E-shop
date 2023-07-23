import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListReducer,
  productDetailReducer,
} from "./reducers/ProductList_Reducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const reducers = combineReducers({
  productList: ProductListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
});

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
