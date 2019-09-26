import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";
import breadcrumbReducers from "./breadcrumb";
import discountsReducers from "./discounts";
import bestSellersReducers from "./bestSellers";
import categoriesReducers from "./categories";
import sufferingsReducers from "./sufferings";

const rootReducer = combineReducers({
  client: clientReducers,
  manager: managerReducers,
  discounts: discountsReducers,
  bestSellers: bestSellersReducers,
  breadcrumb: breadcrumbReducers,
  categories: categoriesReducers,
  sufferings: sufferingsReducers
});

export default rootReducer;
