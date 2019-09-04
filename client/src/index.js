import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactRouter from "./ReactRouter";
import registerServiceWorker from "./registerServiceWorker";

// redux stuff
import { createStore } from "redux";
import allReducers from "./redux-reducers";
import { Provider } from "react-redux";
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <ReactRouter />
    </Provider>
    , document.getElementById("root")
);

registerServiceWorker();
