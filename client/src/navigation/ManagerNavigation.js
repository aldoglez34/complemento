import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/cart/Checkout";
import SignUp from "../pages/client/SignUp";
import NoMatch from "../pages/NoMatch";
import Dashboard from "../manager/Dashboard";
import Categories from "../manager/categories";
import Providers from "../manager/providers";
import Users from "../manager/users";
import Messages from "../manager/messages";
import Products from "../manager/products";
import Sales from "../manager/sales";

const ManagerNavigation = () => {
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
      {/*  manager pages */}
      <Route exact path="/manager/dashboard" component={Dashboard} />
      <Route exact path="/manager/categories" component={Categories} />
      <Route exact path="/manager/products" component={Products} />
      <Route exact path="/manager/providers" component={Providers} />
      <Route exact path="/manager/users" component={Users} />
      <Route exact path="/manager/messages" component={Messages} />
      <Route exact path="/manager/sales" component={Sales} />
      <Redirect from="/manager" to="/manager/dashboard" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export default ManagerNavigation;
