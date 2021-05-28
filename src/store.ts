import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { IProductList, productListReducer } from "./reducers/productReducer";

export interface RootState {
  productList: IProductList;
}

const reducer = combineReducers({ productList: productListReducer });

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
