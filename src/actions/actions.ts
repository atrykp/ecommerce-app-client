import { CartItem, IShippingAddress } from "../reducers/cartReducer";
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
export interface SaveShippingAddressCart {
  type: ActionType.CART_SAVE_SHIPPING_ADDRESS;
  payload: IShippingAddress;
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

export interface UserRegisterRequestAction {
  type: ActionType.USER_REGISTER_REQUEST;
}
export interface UserRegisterSuccessAction {
  type: ActionType.USER_REGISTER_SUCCESS;
  payload: IUser;
}
export interface UserRegisterFailAction {
  type: ActionType.USER_REGISTER_FAIL;
  payload: Error;
}
export interface UserDetailsRequestAction {
  type: ActionType.USER_DETAILS_REQUEST;
}
export interface UserDetailsSuccessAction {
  type: ActionType.USER_DETAILS_SUCCESS;
  payload: IUser;
}
export interface UserReDetailsFailAction {
  type: ActionType.USER_DETAILS_FAIL;
  payload: Error;
}
export interface UserUpdateRequestAction {
  type: ActionType.USER_UPDATE_PROFILE_REQUEST;
}
export interface UserUpdateSuccessAction {
  type: ActionType.USER_UPDATE_PROFILE_SUCCESS;
  payload: IUser;
}
export interface UserUpdateFailAction {
  type: ActionType.USER_UPDATE_PROFILE_FAIL;
  payload: Error;
}

export interface UserUpdateResetAction {
  type: ActionType.USER_UPDATE_PROFILE_RESET;
  payload: Error;
}
export interface SavePaymentMethodAction {
  type: ActionType.CART_SAVE_PAYMENT_METHOD;
  payload: string;
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
  | SaveShippingAddressCart
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserReDetailsFailAction
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateFailAction
  | UserUpdateResetAction
  | SavePaymentMethodAction;
