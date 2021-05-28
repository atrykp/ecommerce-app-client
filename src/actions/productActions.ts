import axios from "axios";
import { ActionType } from "./actionTypes";

export const listProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: ActionType.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
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
