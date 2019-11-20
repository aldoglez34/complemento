import React, { Component } from "react";
import { connect } from "react-redux";
import fire from "./firebase/Fire";
import { logoutClient } from "./redux-actions/client";
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
import Login from "./pages/manager/Login";
import Dashboard from "./pages/manager/Dashboard";
import NewProduct from "./pages/manager/NewProduct";
import ClientInfo from "./pages/ClientInfo";
import ClientFavorites from "./pages/ClientFavorites";

class App extends Component {
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.logoutClient();
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
              <Redirect from="/manager" to="/manager/dashboard" />
              <Route exact path="/manager/newproduct" component={NewProduct} />
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
  logoutClient
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
