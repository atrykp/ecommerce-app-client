import { Action } from "../actions/actions";
import { ActionType } from "../actions/actionTypes";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
  password?: string;
}

export const userLoginReducer = (state: IUser | {} = {}, action: Action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true };
    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
