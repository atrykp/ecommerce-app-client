import { Action } from "../actions/actions";
import { ActionType } from "../actions/actionTypes";
import { CartItem, IShippingAddress } from "./cartReducer";
import { IUser } from "./userReducers";

interface UserInfo {
  name: string;
  email: string;
  _id: string;
}
export interface IOrder {
  _id?: string;
  user?: UserInfo;
  isPaid?: boolean;
  paidAt?: Date | null;
  isDelivered?: boolean;
  deliveredAt?: Date | null;
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
      _id: "",
      user: { name: "", _id: "", email: "" },
      isPaid: false,
      paidAt: null,
      isDelivered: false,
      deliveredAt: null,
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

interface IOrderDetails {
  loading: boolean;
  orderItems: IOrder[];
  shippingAddress: IShippingAddress;
}

export const orderDetailsReducer = (
  state: IOrderDetails = {
    loading: true,
    orderItems: [],
    shippingAddress: { address: "", city: "", postalCode: "", country: "" },
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ActionType.ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case ActionType.ORDER_DETAILS_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
