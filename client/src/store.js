import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListReducer,
  productDetailReducer,
} from "./reducers/ProductList_Reducer";

const reducers = combineReducers({
  productList: ProductListReducer,
  productDetails: productDetailReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
