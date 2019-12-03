import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as clientActions from "./redux-actions/client";
import * as managerActions from "./redux-actions/manager";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import fire from "./firebase/fire";
// store
import Home from "./store/pages/Home";
import Store from "./store/pages/Store";
import ProductDetails from "./store/pages/ProductDetails";
import Cart from "./store/pages/Cart";
import SignUp from "./store/pages/SignUp";
import NoMatch from "./store/pages/NoMatch";
import ClientInfo from "./store/pages/ClientInfo";
import ClientFavorites from "./store/pages/ClientFavorites";
// manager
import Login from "./store/pages/Login";
import Dashboard from "./store/pages/Dashboard";
import Categories from "./store/pages/categories/Categories";
import CategoriesCreate from "./store/pages/categories/CategoriesCreate";
import Discounts from "./store/pages/discounts/Discounts";
import DiscountsCreate from "./store/pages/discounts/DiscountsCreate";
import Providers from "./store/pages/providers/Providers";
import ProvidersCreate from "./store/pages/providers/ProvidersCreate";
import Clients from "./store/pages/clients/Clients";
import Products from "./store/pages/products/Products";
import ProductsCreate from "./store/pages/products/ProductsCreate";

function App() {
  const client = useSelector(state => state.client);
  const manager = useSelector(state => state.manager);

  const dispatch = useDispatch();

  useEffect(() => {
    // if the auth state changes, logout the client or manager
    fire.auth().onAuthStateChanged(user => {
      if (!user) {
        dispatch(clientActions.logoutClient());
        dispatch(managerActions.logoutManager());
      }
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
          path="/store/:cat"
          render={props => <Store routeProps={props} />}
        />
        <Route
          exact
          path="/product/details/:productId"
          render={props => <ProductDetails routeProps={props} />}
        />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/signup" component={SignUp} />

        {/* client routes */}
        {client.isLogged ? (
          <>
            <Route exact path="/client/info" component={ClientInfo} />
            <Route exact path="/client/favorites" component={ClientFavorites} />
          </>
        ) : (
          <Redirect from="/client/" to="/" />
        )}

        {/* manager routes */}
        {manager.isLogged ? (
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
            {/* clients */}
            <Route exact path="/manager/clients" component={Clients} />
            {/* <Redirect from="/manager" to="/manager/dashboard" /> */}
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
}

export default App;
