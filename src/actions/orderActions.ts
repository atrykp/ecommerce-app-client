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
        `http://localhost:5000/api/orders`,
        order,
        config
      );

      dispatch({
        type: ActionType.ORDER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getOrderById =
  (id: string) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({
        type: ActionType.ORDER_DETAILS_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/orders/${id}`,
        config
      );

      dispatch({
        type: ActionType.ORDER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ORDER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export interface IPaymentResult {
  id: string;
  status: boolean;
  update_time: Date;
  email_address: string;
}

export const payOrder =
  (orderId: string, paymentResult: IPaymentResult) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({
        type: ActionType.ORDER_PAY_REQUEST,
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

      const { data } = await axios.put(
        `http://localhost:5000/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch({
        type: ActionType.ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userOrderListAction =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({
        type: ActionType.USER_ORDER_LIST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/orders/myorders`,
        config
      );

      dispatch({
        type: ActionType.USER_ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.USER_ORDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
