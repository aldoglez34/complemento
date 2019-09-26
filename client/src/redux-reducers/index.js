import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";
import breadcrumbReducers from "./breadcrumb";
import discountsReducers from "./discounts";
import bestSellersReducers from "./bestSellers";

const rootReducer = combineReducers({
  client: clientReducers,
  manager: managerReducers,
  discounts: discountsReducers,
  bestSellers: bestSellersReducers,
  breadcrumb: breadcrumbReducers
});

export default rootReducer;
