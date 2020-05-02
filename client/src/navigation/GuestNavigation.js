import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/cart/Checkout";
import SignUp from "../pages/client/SignUp";
import NoMatch from "../pages/NoMatch";
import Login from "../manager/Login";
import Terms from "../pages/footer/Terms";

const GuestNavigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/store"
        render={(props) => <Store routeProps={props} />}
      />
      <Route
        exact
        path="/store/category/:category"
        render={(props) => <Store routeProps={props} />}
      />
      <Route
        exact
        path="/store/brand/:brand"
        render={(props) => <Store routeProps={props} />}
      />
      <Route
        exact
        path="/store/ingredient/:ingredient"
        render={(props) => <Store routeProps={props} />}
      />
      <Redirect from="/store/" to="/store" />
      <Route
        exact
        path="/product/details/:productId"
        render={(props) => <ProductDetails routeProps={props} />}
      />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/signup" component={SignUp} />
      {/* footer */}
      <Route exact path="/terms" component={Terms} />
      {/* manager login page */}
      <Route exact path="/manager" component={Login} />
      <Redirect from="/manager/" to="/manager" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export default GuestNavigation;
