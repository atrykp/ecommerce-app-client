import axios from "axios";
import { Dispatch } from "react";
import { Action } from "./actions";
import { ActionType } from "./actionTypes";

export const listProducts = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/products");
    dispatch({
      type: ActionType.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.PRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      dispatch({
        type: ActionType.PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
