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
          {this.props.client.isLogged ? (
            // if the client is logged, he has access to these routes
            <Switch>
              <Route
                exact
                path="/client/info/:clientId"
                render={props => <ClientInfo routeProps={props} />}
              />
              <Route
                exact
                path="/client/favorites"
                component={ClientFavorites}
              />
              <Route component={NoMatch} />
            </Switch>
          ) : (
            // if not then just redirect him back to home page
            <Switch>
              <Redirect from="/client/" to="/" />
              <Route component={NoMatch} />
            </Switch>
          )}

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
    manager: state.manager,
    client: state.client
  };
};

const mapDispatchToProps = {
  logoutClient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
