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
export type Action =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;
