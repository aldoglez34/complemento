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
    manager: null,
    isManagerLogged: false
  };

  authListener() {
    firebase.auth().onAuthStateChanged(manager => {
      if (manager) {
        console.log("state changes -> setting manager info");
        console.log("");
        this.setState({ manager: manager, isManagerLogged: true });
      } else {
        console.log("state changes ->  setting manager null");
        console.log("");
        this.setState({ manager: null, isManagerLogged: false });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  ClientRoutes = () => {
    // this will only run when the manager is null
    return (
      <Switch>
        {console.log("entering CLIENT routes")}
        {console.log("")}
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

        <Route exact path="/manager" component={Login} />
        <Redirect from="/manager/" to="/manager" />
        <Route component={NoMatch} />
      </Switch>
    );
  };

  ManagerRoutes = () => {
    // this will only run when the manager is NOT null
    return (
      <Switch>
        {console.log("entering MANAGER routes")}
        {console.log("")}
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
        <Redirect from="/manager" to="/manager/panel" />
        <Route component={NoMatch} />
      </Switch>
    );
  };

  render() {
    console.log(this.state);
    console.log("");
    return (
      <Router>
        <Switch>
          {!this.state.isManagerLogged ? (
            <this.ClientRoutes />
          ) : (
            <this.ManagerRoutes />
          )}
        </Switch>
      </Router>
    );
  }
}

export default ReactRouter;
