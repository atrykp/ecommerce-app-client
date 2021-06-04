import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../store";
import { Action } from "./actions";
import { ActionType } from "./actionTypes";

export const login =
  (email: string, password: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.USER_LOGIN_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password },
        config
      );
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch: Dispatch<Action>) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: ActionType.USER_LOGOUT, payload: {} });
};

export const register =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/users",
        { name, email, password },
        config
      );
      dispatch({
        type: ActionType.USER_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ActionType.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetails =
  (id: string) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({
        type: ActionType.USER_DETAILS_REQUEST,
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

      const { data } = await axios.get(
        `http://localhost:5000/api/users/${id}`,
        config
      );

      dispatch({
        type: ActionType.USER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.USER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
