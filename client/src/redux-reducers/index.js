import { combineReducers } from "redux";
import clientReducers from "./client";

const allReducers = combineReducers({
    client: clientReducers
});

export default allReducers;
