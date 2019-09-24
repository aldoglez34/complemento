import React, { Component } from "react";
import { connect } from "react-redux";
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

class App extends Component {
  render() {
    // console.log(this.props.manager);
    return (
      <Router>
        <Switch>
          {/* client routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/product/:productId"
            render={props => <ProductDetails routeProps={props} />}
          />

          {this.props.manager.isLogged ? (
            <Switch>
              {/* {console.log("manager is logged YAY!!!!!!!!!!!")}
              {console.log("")} */}
              <Route exact path="/manager/panel" component={Panel} />
              <Route exact path="/manager/newproduct" component={NewProduct} />
              <Redirect from="/manager" to="/manager/panel" />
              <Route component={NoMatch} />
            </Switch>
          ) : (
            <Switch>
              {/* {console.log("entering routes where manager is NOT logged")}
              {console.log("")} */}
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

export default connect(mapStateToProps)(App);
