import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";
import breadcrumbReducers from "./breadcrumb";

const rootReducer = combineReducers({
  client: clientReducers,
  manager: managerReducers,
  breadcrumb: breadcrumbReducers
});

export default rootReducer;
