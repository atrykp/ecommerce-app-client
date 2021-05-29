import { ProductItem } from "../screens/HomeScreen";
import { ActionType } from "../actions/actionTypes";
import { Action } from "../actions/actions";

export interface IProductList {
  products: ProductItem[];
  loading: boolean;
  error?: string;
}
export interface IProductDetails {
  product: ProductItem | null;
  loading?: boolean;
  error?: string;
}

export const productListReducer = (
  state: IProductList = { products: [], loading: false },
  action: Action
) => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ActionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state: IProductDetails = { product: null },
  action: Action
) => {
  switch (action.type) {
    case ActionType.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ActionType.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
