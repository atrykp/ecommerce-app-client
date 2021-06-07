import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  IProductDetails,
  IProductList,
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducer";
import { cartReducer, ICartState } from "./reducers/cartReducer";
import {
  IUpdateProfile,
  IUserDetailState,
  IUserState,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import { IOrderReducer, orderReducer } from "./reducers/orderReducer";

export interface RootState {
  productList: IProductList;
  productDetails: IProductDetails;
  cart: ICartState;
  userLogin: IUserState;
  userRegister: IUserState;
  userDetails: IUserDetailState;
  userUpdate: IUpdateProfile;
  order: IOrderReducer;
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateProfileReducer,
  order: orderReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress")!)
  : { address: "", city: "", postalCode: "", country: "" };

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: "",
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
