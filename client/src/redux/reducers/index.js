import { combineReducers } from "redux";
import cartReducers from "./cart";
import userReducers from "./user";

const rootReducer = combineReducers({
  cart: cartReducers,
  user: userReducers
});

export default rootReducer;
