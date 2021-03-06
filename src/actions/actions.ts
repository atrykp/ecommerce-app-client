import { CartItem, IShippingAddress } from "../reducers/cartReducer";
import { ProductItem } from "../screens/HomeScreen";
import { IUser } from "../reducers/userReducers";
import { ActionType } from "./actionTypes";
import { IOrder } from "../reducers/orderReducer";
import { IPaymentResult } from "./orderActions";

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
export interface UserDetailsReserAction {
  type: ActionType.USER_DETAILS_RESET;
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

export interface OrderCreaterRequestAction {
  type: ActionType.ORDER_CREATE_REQUEST;
}
export interface OrderCreaterSuccessAction {
  type: ActionType.ORDER_CREATE_SUCCESS;
  payload: IOrder;
}

export interface OrderCreaterFailAction {
  type: ActionType.ORDER_CREATE_FAIL;
  payload: Error;
}
export interface OrderDetailsRequestAction {
  type: ActionType.ORDER_DETAILS_REQUEST;
}
export interface OrderDetailsSuccessAction {
  type: ActionType.ORDER_DETAILS_SUCCESS;
  payload: IOrder;
}

export interface OrderDetailsFailAction {
  type: ActionType.ORDER_DETAILS_FAIL;
  payload: Error;
}
export interface OrderPayRequestAction {
  type: ActionType.ORDER_PAY_REQUEST;
}
export interface OrderPaySuccessAction {
  type: ActionType.ORDER_PAY_SUCCESS;
  payload: IPaymentResult;
}

export interface OrderPayFailAction {
  type: ActionType.ORDER_PAY_FAIL;
  payload: Error;
}
export interface OrderPayResetAction {
  type: ActionType.ORDER_PAY_RESET;
}

export interface userOrderListRequestAction {
  type: ActionType.USER_ORDER_LIST_REQUEST;
}
export interface userOrderListSuccessAction {
  type: ActionType.USER_ORDER_LIST_SUCCESS;
  payload: IPaymentResult;
}

export interface userOrderListFailAction {
  type: ActionType.USER_ORDER_LIST_FAIL;
  payload: Error;
}
export interface userOrderListResetAction {
  type: ActionType.USER_ORDER_LIST_RESET;
}

export interface userListRequestAction {
  type: ActionType.USER_LIST_REQUEST;
}
export interface userListSuccessAction {
  type: ActionType.USER_LIST_SUCCESS;
  payload: IUser[];
}

export interface userListFailAction {
  type: ActionType.USER_LIST_FAIL;
  payload: Error;
}
export interface userListResetAction {
  type: ActionType.USER_LIST_RESET;
}

export interface userDeleteRequestAction {
  type: ActionType.USER_DELETE_REQUEST;
}
export interface userDeleteSuccessAction {
  type: ActionType.USER_DELETE_SUCCESS;
}

export interface userDeleteFailAction {
  type: ActionType.USER_DELETE_FAIL;
  payload: Error;
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
  | SavePaymentMethodAction
  | OrderCreaterRequestAction
  | OrderCreaterSuccessAction
  | OrderCreaterFailAction
  | OrderDetailsRequestAction
  | OrderDetailsSuccessAction
  | OrderDetailsFailAction
  | OrderPayRequestAction
  | OrderPaySuccessAction
  | OrderPayFailAction
  | OrderPayResetAction
  | userOrderListRequestAction
  | userOrderListSuccessAction
  | userOrderListFailAction
  | userOrderListResetAction
  | UserDetailsReserAction
  | userListRequestAction
  | userListSuccessAction
  | userListFailAction
  | userListResetAction
  | userDeleteRequestAction
  | userDeleteSuccessAction
  | userDeleteFailAction;
