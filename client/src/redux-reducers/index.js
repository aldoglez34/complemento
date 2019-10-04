import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";
import discountsReducers from "./discounts";
import bestSellersReducers from "./bestSellers";
import prioritizedReducers from "./prioritized";

const rootReducer = combineReducers({
  client: clientReducers,
  manager: managerReducers,
  discounts: discountsReducers,
  bestSellers: bestSellersReducers,
  prioritized: prioritizedReducers
});

export default rootReducer;
