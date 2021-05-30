import { CartItem } from "../reducers/cartReducer";
import { ProductItem } from "../screens/HomeScreen";
import { ActionType } from "./actionTypes";

export interface ProductListRequestAction {
  type: ActionType.PRODUCT_LIST_REQUEST;
}
export interface ProductListSuccessAction {
  type: ActionType.PRODUCT_LIST_SUCCESS;
  payload: ProductItem[];
}
export interface ProductListFailAction {
  type: ActionType.PRODUCT_LIST_FAIL;
  payload: Error;
}

export interface ProductDetailsRequestAction {
  type: ActionType.PRODUCT_DETAILS_REQUEST;
}
export interface ProductDetailsSuccessAction {
  type: ActionType.PRODUCT_DETAILS_SUCCESS;
  payload: ProductItem;
}
export interface ProductDetailsFailAction {
  type: ActionType.PRODUCT_DETAILS_FAIL;
  payload: Error;
}

export interface AddProductToCart {
  type: ActionType.CART_ADD_ITEM;
  payload: CartItem;
}

export type Action =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction
  | AddProductToCart;
