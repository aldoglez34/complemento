import React, { Component } from "react";
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
import firebase from "./firebase/Fire";

class ReactRouter extends Component {
  state = {
    manager: {}
  };

  authListener() {
    firebase.auth().onAuthStateChanged(manager => {
      if (manager) {
        this.setState({ manager });
      } else {
        this.setState({ manager: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <Router>
        {/* if there's a manager logged in */}
        {this.state.manager ? (
          <Switch>
            {/* client pages */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
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

            {/* manager pages */}
            <Route
              exact
              path="/manager/panel"
              render={() => <Panel manager={this.state.manager} />}
            />
            <Route
              exact
              path="/manager/newproduct"
              render={() => <NewProduct manager={this.state.manager} />}
            />
            {/* redirect manager to panel */}
            <Redirect from="/manager" to="/manager/panel" />

            {/* no match */}
            <Route component={NoMatch} />
          </Switch>
        ) : (
          // if there's no manager logged in
          <Switch>
            {/* client pages */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
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

            {/* manager login window */}
            <Route exact path="/manager" component={Login} />
            {/* redirect everything from the manager panel to the login */}
            <Redirect from="/manager/panel" to="/manager" />
            <Redirect from="/manager/newproduct" to="/manager" />

            {/* no match */}
            <Route component={NoMatch} />
          </Switch>
        )}
      </Router>
    );
  }
}

export default ReactRouter;
