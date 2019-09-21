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
import Questions from "./pages/help/Questions";
import Complaints from "./pages/help/Complaints";
import Payment from "./pages/help/Payment";
import About from "./pages/about/About";
import Contact from "./pages/about/Contact";
import Location from "./pages/about/Location";
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
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/complaints" component={Complaints} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/location" component={Location} />

          {this.props.manager.isLogged ? (
            <Switch>
              {console.log("manager is logged YAY!!!!!!!!!!!")}
              {console.log("")}
              <Route exact path="/manager/panel" component={Panel} />
              <Route exact path="/manager/newproduct" component={NewProduct} />
              <Redirect from="/manager" to="/manager/panel" />
              <Route component={NoMatch} />
            </Switch>
          ) : (
            <Switch>
              {console.log("entering routes where manager is NOT logged")}
              {console.log("")}
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
