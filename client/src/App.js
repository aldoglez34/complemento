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
import Panel from "./pages/manager/Panel";
import NewProduct from "./pages/manager/NewProduct";
import ClientInfo from "./pages/ClientInfo";

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
          {/* CLIENT ROUTES */}
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
          <Route
            exact
            path="/client/:clientId"
            render={props => <ClientInfo routeProps={props} />}
          />
          {this.props.manager.isLogged ? (
            <Switch>
              <Route exact path="/manager/panel" component={Panel} />
              <Route exact path="/manager/newproduct" component={NewProduct} />
              <Redirect from="/manager" to="/manager/panel" />
              <Route component={NoMatch} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/manager" component={Login} />
              <Redirect from="/manager/" to="/manager" />
              <Route component={NoMatch} />
            </Switch>
          )}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    manager: state.manager
  };
};

const mapDispatchToProps = {
  logoutClient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
