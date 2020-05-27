import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout/Checkout";
import SignUp from "../pages/client/SignUp";
import NoMatch from "../pages/NoMatch";
// footer
import Terms from "../pages/footer/Terms";
import FAQ from "../pages/footer/FAQ";
import About from "../pages/footer/About";
import Contact from "../pages/footer/Contact";
import Payment from "../pages/footer/Payment";
import Tracker from "../pages/footer/Tracker";
// manager
import Dashboard from "../manager/Dashboard";
import Categories from "../manager/categories";
import Providers from "../manager/providers";
import Users from "../manager/users";
import Messages from "../manager/messages";
import Products from "../manager/products";
import NewProduct from "../manager/products/pages/NewProduct";
import EditProduct from "../manager/products/pages/EditProduct";
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
      {/* footer */}
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/tracker" component={Tracker} />
      {/*  manager pages */}
      <Route exact path="/manager/dashboard" component={Dashboard} />
      <Route exact path="/manager/categories" component={Categories} />
      <Route exact path="/manager/products" component={Products} />
      <Route exact path="/manager/products/new" component={NewProduct} />
      <Route
        exact
        path="/manager/products/edit/:productId"
        render={(props) => <EditProduct routeProps={props} />}
      />
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
