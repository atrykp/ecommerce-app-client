import axios from "axios";
import { Dispatch } from "react";
import { IOrder } from "../reducers/orderReducer";
import { RootState } from "../store";
import { Action } from "./actions";
import { ActionType } from "./actionTypes";

export const createOrder =
  (order: IOrder) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({
        type: ActionType.ORDER_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/users/orders`,
        order,
        config
      );

      dispatch({
        type: ActionType.ORDER_CREATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ActionType.ORDER_CREATE_FAIL,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ActionType.USER_UPDATE_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
