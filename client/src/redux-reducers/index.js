import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";

const rootReducer = combineReducers({
  client: clientReducers,
  manager: managerReducers
});

export default rootReducer;
