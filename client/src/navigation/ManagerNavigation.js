import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../store/Store";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../cart/Cart";
import Checkout from "../cart/Checkout";
import SignUp from "../pages/SignUp";
import NoMatch from "../pages/NoMatch";
import Login from "../manager/Login";
import Dashboard from "../manager/Dashboard";
import Categories from "../manager/categories/Categories";
import CategoriesCreate from "../manager/categories/CategoriesCreate";
import Discounts from "../manager/discounts/Discounts";
import DiscountsCreate from "../manager/discounts/DiscountsCreate";
import Providers from "../manager/providers/Providers";
import ProvidersCreate from "../manager/providers/ProvidersCreate";
import Users from "../manager/users/Users";
import Messages from "../manager/messages/Messages";
import Products from "../manager/products/Products";
import ProductsCreate from "../manager/products/ProductsCreate";
import Sales from "../manager/sales/Sales";
import Purchases from "../manager/purchases/Purchases";

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
      <Route exact path="/manager" component={Login} />
      <Route exact path="/manager/dashboard" component={Dashboard} />
      <Route exact path="/manager/categories" component={Categories} />
      <Route
        exact
        path="/manager/categories/create"
        component={CategoriesCreate}
      />
      <Route exact path="/manager/products" component={Products} />
      <Route exact path="/manager/products/create" component={ProductsCreate} />
      <Route exact path="/manager/discounts" component={Discounts} />
      <Route
        exact
        path="/manager/discounts/create"
        component={DiscountsCreate}
      />
      <Route exact path="/manager/providers" component={Providers} />
      <Route
        exact
        path="/manager/providers/create"
        component={ProvidersCreate}
      />
      <Route exact path="/manager/users" component={Users} />
      <Route exact path="/manager/messages" component={Messages} />
      <Route exact path="/manager/sales" component={Sales} />
      <Route exact path="/manager/purchases" component={Purchases} />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export default ManagerNavigation;
