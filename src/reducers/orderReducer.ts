import { Action } from "../actions/actions";
import { ActionType } from "../actions/actionTypes";
import { CartItem, IShippingAddress } from "./cartReducer";

export interface IOrder {
  orderItems: CartItem[];
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

export interface IOrderReducer {
  loading?: boolean;
  success?: boolean;
  error?: Error;
  order: IOrder;
}

export const orderReducer = (
  state: IOrderReducer = {
    order: {
      orderItems: [],
      shippingAddress: { address: "", city: "", postalCode: "", country: "" },
      paymentMethod: "",
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    },
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.ORDER_CREATE_REQUEST:
      return { loading: true };
    case ActionType.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ActionType.ORDER_CREATE_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
