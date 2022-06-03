import { combineReducers } from "redux";
import { cartReducer } from "./Cart";
import userReducer from "./userRegister";

const rootReducers = combineReducers({
  cartReducer,
  userReducer,
});

export default rootReducers;
