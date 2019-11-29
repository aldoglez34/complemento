import React, { Component } from "react";
import { connect } from "react-redux";
import fb from "./firebase/fb";
import { logoutClient } from "./redux-actions/client";
import { logoutManager } from "./redux-actions/manager";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ClientInfo from "./pages/ClientInfo";
import ClientFavorites from "./pages/ClientFavorites";
import Login from "./pages/manager/Login";
import Dashboard from "./pages/manager/Dashboard";
import Categories from "./pages/manager/Categories";
import CategoriesCreate from "./pages/manager/CategoriesCreate";
import Discounts from "./pages/manager/Discounts";
import DiscountsCreate from "./pages/manager/DiscountsCreate";
import Providers from "./pages/manager/Providers";
import ProvidersCreate from "./pages/manager/ProvidersCreate";
import Clients from "./pages/manager/Clients";
import Products from "./pages/manager/Products";
import ProductsCreate from "./pages/manager/ProductsCreate";

class App extends Component {
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    // if the auth state changes, logout the client or manager
    fb.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.logoutClient();
        this.props.logoutManager();
      }
    });
  }

  render() {
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
          {this.props.client.isLogged ? (
            <>
              <Route exact path="/client/info" component={ClientInfo} />
              <Route
                exact
                path="/client/favorites"
                component={ClientFavorites}
              />
            </>
          ) : (
            <Redirect from="/client/" to="/" />
          )}

          {/* manager routes */}
          {this.props.manager.isLogged ? (
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
}

const mapStateToProps = state => {
  return {
    manager: state.manager,
    client: state.client
  };
};

const mapDispatchToProps = {
  logoutClient,
  logoutManager
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
