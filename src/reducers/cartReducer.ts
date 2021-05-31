import { Action } from "../actions/actions";
import { ActionType } from "../actions/actionTypes";

export interface CartItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface ICartState {
  cartItems: CartItem[];
}

export const cartReducer = (
  state: ICartState = { cartItems: [] },
  action: Action
) => {
  switch (action.type) {
    case ActionType.CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (elem) => elem.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((elem) =>
            elem.product === existItem.product ? item : elem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case ActionType.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
