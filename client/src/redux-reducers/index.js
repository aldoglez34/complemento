import { combineReducers } from "redux";
import clientReducers from "./client";

const allReducers = combineReducers({
    loggedClient: clientReducers
});

export default allReducers;
