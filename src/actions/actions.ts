import { CartItem } from "../reducers/cartReducer";
import { ProductItem } from "../screens/HomeScreen";
import { IUser } from "../reducers/userReducers";
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
export interface RemoveProductFromCart {
  type: ActionType.CART_REMOVE_ITEM;
  payload: string;
}

export interface UserLoginRequestAction {
  type: ActionType.USER_LOGIN_REQUEST;
}
export interface UserLoginSuccessAction {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: IUser;
}
export interface UserLoginFailAction {
  type: ActionType.USER_LOGIN_FAIL;
  payload: Error;
}

export interface UserLogoutAction {
  type: ActionType.USER_LOGOUT;
  payload: {};
}

export type Action =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction
  | AddProductToCart
  | RemoveProductFromCart
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction;
