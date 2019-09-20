import { combineReducers } from "redux";
import clientReducers from "./client";
import managerReducers from "./manager";

const allReducers = combineReducers({
  client: clientReducers,
  manager: managerReducers
});

export default allReducers;
