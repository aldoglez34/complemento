import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./redux/reducers";
import Firebase, { FirebaseContext } from "./firebase";
// dotenv
// import dotenv from "dotenv";

// // dotenv
// // require("dotenv").config();
// dotenv.config();

const persistConfig = {
  key: "primary",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
