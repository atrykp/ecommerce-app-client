import { ProductItem } from "../screens/HomeScreen";
import { ActionType } from "../actions/actionTypes";

interface IProductList {
  products: ProductItem[];
  loading: boolean;
}

export const productListReducer = (
  state: IProductList = { products: [], loading: false },
  action: any
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
