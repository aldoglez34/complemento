import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as clientActions from "./redux/actions/client";
import * as managerActions from "./redux/actions/manager";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import fire from "./firebase/fire";
import API from "./utils/API";
// store
import Home from "./pages/Home";
import Store from "./store/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import ClientInfo from "./pages/ClientInfo";
import ClientFavorites from "./pages/ClientFavorites";
// manager
import Login from "./manager/Login";
import Dashboard from "./manager/Dashboard";
import Categories from "./manager/categories/Categories";
import CategoriesCreate from "./manager/categories/CategoriesCreate";
import Discounts from "./manager/discounts/Discounts";
import DiscountsCreate from "./manager/discounts/DiscountsCreate";
import Providers from "./manager/providers/Providers";
import ProvidersCreate from "./manager/providers/ProvidersCreate";
import Users from "./manager/users/Users";
import Messages from "./manager/messages/Messages";
import Products from "./manager/products/Products";
import ProductsCreate from "./manager/products/ProductsCreate";
import Sales from "./manager/sales/Sales";
import Purchases from "./manager/purchases/Purchases";

const App = () => {
  const client = useSelector(state => state.client);
  const manager = useSelector(state => state.manager);

  const dispatch = useDispatch();

  const [fireUserType, setFireUserType] = useState();

  useEffect(() => {
    fire.auth().signOut();
    // console.log("@App, currentUser", fire.auth().currentUser);
    // if the auth state changes, logout the client or manager
    fire.auth().onAuthStateChanged(fireUser => {
      console.log("@onAuthStateChanged", fireUser);

      if (fireUser) {
        console.log("fireUser is NOT null");
        // depending on whether it's a Client or a Manager
        switch (fireUser.displayName) {
          // CLIENT ======================================
          case "Client":
            console.log("user is a CLIENT");
            // if client is NOT signed in on redux, sign the client
            if (!client.isLogged) {
              // fetch client from the db and set it on redux
              console.log("client is NOT logged in on redux");
              API.fetchClientByUID(fireUser.uid)
                .then(res => {
                  console.log("loggin client");
                  dispatch(clientActions.loginClient(res.data));
                  alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                  window.location.href = "/";
                  setFireUserType("Client");
                })
                .catch(error => {
                  alert(
                    "Hubo un error al intentar iniciar sesión, por favor intenta de nuevo."
                  );
                  console.log(error);
                });
            }
            break;
          // MANAGER ======================================
          case "Manager":
            console.log("user is a MANAGER");
            // if client is NOT signed in on redux, sign the client
            if (!manager.isLogged) {
              console.log("manager is NOT logged in on redux");
            }
            break;
        }
      }

      // what if firebase user is undefined
      // it could mean he just logged out or that he never signed in
      if (!fireUser) {
        // if either the client or the manager are logged in, sign them out
        if (client.isLogged) dispatch(clientActions.logoutClient());
        if (manager.isLogged) dispatch(managerActions.logoutManager());
        setFireUserType(null);
      }

      console.log(
        "======================================================================"
      );
    });
  }, []);

  return (
    <Router>
      <Switch>
        {/* common routes (accessible for everyone) */}
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/store"
          render={props => <Store routeProps={props} />}
        />
        <Route
          exact
          path="/store/category/:category"
          render={props => <Store routeProps={props} />}
        />
        <Route
          exact
          path="/store/brand/:brand"
          render={props => <Store routeProps={props} />}
        />
        <Route
          exact
          path="/store/ingredient/:ingredient"
          render={props => <Store routeProps={props} />}
        />
        <Redirect from="/store/" to="/store" />
        <Route
          exact
          path="/product/details/:productId"
          render={props => <ProductDetails routeProps={props} />}
        />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signup" component={SignUp} />
        {/* client routes */}
        {fireUserType === "Client" ? (
          <>
            <Route exact path="/client/info" component={ClientInfo} />
            <Route exact path="/client/favorites" component={ClientFavorites} />
          </>
        ) : (
          <Redirect from="/client/" to="/" />
        )}
        {/* manager routes */}
        {fireUserType === "Manager" ? (
          <>
            <Route exact path="/manager/dashboard" component={Dashboard} />
            {/* categories */}
            <Route exact path="/manager/categories" component={Categories} />
            <Route
              exact
              path="/manager/categories/create"
              component={CategoriesCreate}
            />
            {/* products */}
            <Route exact path="/manager/products" component={Products} />
            <Route
              exact
              path="/manager/products/create"
              component={ProductsCreate}
            />
            {/* discounts */}
            <Route exact path="/manager/discounts" component={Discounts} />
            <Route
              exact
              path="/manager/discounts/create"
              component={DiscountsCreate}
            />
            {/* providers */}
            <Route exact path="/manager/providers" component={Providers} />
            <Route
              exact
              path="/manager/providers/create"
              component={ProvidersCreate}
            />
            {/* users */}
            <Route exact path="/manager/users" component={Users} />
            <Route exact path="/manager/messages" component={Messages} />
            {/* sales */}
            <Route exact path="/manager/sales" component={Sales} />
            {/* purchases */}
            <Route exact path="/manager/purchases" component={Purchases} />
          </>
        ) : (
          <>
            <Route exact path="/manager" component={Login} />
            <Redirect from="/manager/" to="/manager" />
          </>
        )}
        {/* last routes */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
