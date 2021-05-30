import axios from "axios";
import { Dispatch } from "react";
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