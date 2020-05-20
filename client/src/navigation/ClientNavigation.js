import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout/Checkout";
import ForgotPassword from "../pages/client/ForgotPassword";
import NoMatch from "../pages/NoMatch";
import Login from "../manager/Login";
// footer
import Terms from "../pages/footer/Terms";
import FAQ from "../pages/footer/FAQ";
import About from "../pages/footer/About";
import Contact from "../pages/footer/Contact";
import Payment from "../pages/footer/Payment";
import Tracker from "../pages/footer/Tracker";
// client
import ClientInfo from "../pages/client/ClientInfo";
import ClientOrders from "../pages/client/ClientOrders";
import ClientFavorites from "../pages/client/ClientFavorites";

const ClientNavigation = () => {
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
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      {/* footer */}
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/tracker" component={Tracker} />
      {/* auth client only */}
      <Route exact path="/client/info" component={ClientInfo} />
      <Route exact path="/client/orders" component={ClientOrders} />
      <Route exact path="/client/favorites" component={ClientFavorites} />
      {/*  manager login page */}
      <Route exact path="/manager" component={Login} />
      <Redirect from="/manager/" to="/manager" />
      {/* 404 not found */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export default ClientNavigation;
