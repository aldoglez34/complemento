import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";
import cartReducers from "./cart";
import storeReducers from "./store";

const rootReducer = combineReducers({
  cart: cartReducers,
  client: clientReducers,
  manager: managerReducers,
  store: storeReducers
});

export default rootReducer;
