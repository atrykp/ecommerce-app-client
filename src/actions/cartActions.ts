import axios from "axios";
import { Dispatch } from "react";
import { IShippingAddress } from "../reducers/cartReducer";
import { RootState } from "../store";

import { Action } from "./actions";
import { ActionType } from "./actionTypes";

export const addToCart =
  (id: string, qty: number) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    dispatch({
      type: ActionType.CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
export const removeFromCart =
  (id: string) => (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const saveShippingAddress =
  (data: IShippingAddress) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };
export const savePaymentMethod =
  (data: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });

    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };
