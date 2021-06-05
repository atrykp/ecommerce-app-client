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

export interface IUserState {
  loading: boolean;
  userInfo: IUser;
  error: Error;
}

export const userLoginReducer = (
  state: IUserState | {} = {},
  action: Action
) => {
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

export const userRegisterReducer = (
  state: IUserState | {} = {},
  action: Action
) => {
  switch (action.type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { loading: true };
    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ActionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export interface IUserDetailState {
  user: IUser;
  loading?: boolean;
  error?: Error;
}

export const userDetailsReducer = (
  state: IUserDetailState = {
    user: {
      _id: "",
      name: "",
      email: "",
      isAdmin: false,
      token: "",
      password: "",
    },
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case ActionType.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export interface IUpdateProfile {
  success?: boolean;
  userInfo: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
}
export const userUpdateProfileReducer = (
  state: IUpdateProfile = {
    success: false,
    userInfo: {
      id: "",
      name: "",
      email: "",
      password: "",
    },
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case ActionType.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case ActionType.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case ActionType.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
