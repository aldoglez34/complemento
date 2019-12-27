import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";
import cartReducers from "./cart";

const rootReducer = combineReducers({
  cart: cartReducers,
  client: clientReducers,
  manager: managerReducers
});

export default rootReducer;
