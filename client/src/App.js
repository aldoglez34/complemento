import React, { useEffect } from "react";
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
// store
import Home from "./pages/Home";
import Store from "./store/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
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
import Products from "./manager/products/Products";
import ProductsCreate from "./manager/products/ProductsCreate";
import Sales from "./manager/sales/Sales";

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
          path="/store/category/:category"
          render={props => <Store routeProps={props} />}
        />
        <Route
          exact
          path="/store/brand/:brand"
          render={props => <Store routeProps={props} />}
        />
        <Redirect from="/store/" to="/store" />
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
            {/* users */}
            <Route exact path="/manager/users" component={Users} />
            {/* sales */}
            <Route exact path="/manager/sales" component={Sales} />
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
