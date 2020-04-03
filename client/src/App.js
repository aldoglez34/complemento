import React, { useState, useEffect } from "react";
import Firebase, { FirebaseContext } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "./redux/actions/user";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import Firebase from "./firebase/Firebase";
import API from "./utils/API";
// store
import Home from "./pages/Home";
import Store from "./store/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import ClientInfo from "./pages/ClientInfo";
import ClientFavorites from "./pages/ClientFavorites";
// manager
import Login from "./manager/Login";
import Dashboard from "./manager/Dashboard";
import Categories from "./manager/categories/Categories";
import CategoriesCreate from "./manager/categories/CategoriesCreate";
import Discounts from "./manager/discounts/Discounts";
import DiscountsCreate from "./manager/discounts/DiscountsCreate";
import Providers from "./manager/providers/Providers";
import ProvidersCreate from "./manager/providers/ProvidersCreate";
import Users from "./manager/users/Users";
import Messages from "./manager/messages/Messages";
import Products from "./manager/products/Products";
import ProductsCreate from "./manager/products/ProductsCreate";
import Sales from "./manager/sales/Sales";
import Purchases from "./manager/purchases/Purchases";

const App = () => {
  // const userRedux = useSelector(state => state.user);

  // const dispatch = useDispatch();

  // const [loggedUser, setLoggedUser] = useState(null);

  // useEffect(() => {
  //   // fire.auth().signOut();
  //   fire.auth().onAuthStateChanged(fireUser => {
  //     //
  //     console.log("@fireUser", fireUser);
  //     console.log("@loggedUser", loggedUser);
  //     console.log("@userRedux", userRedux);

  //     if (fireUser) {
  //       // if logged user is null, set it
  //       // if (loggedUser === null) setLoggedUser(fireUser.displayName);
  //       // if user in redux is null, set it
  //       if (userRedux === null) {
  //         switch (fireUser.displayName) {
  //           // CLIENT ======================================
  //           case "Client":
  //             API.fetchClientByUID(fireUser.uid)
  //               .then(res => {
  //                 setLoggedUser(fireUser.displayName);
  //                 dispatch(userActions.loginClient(res.data));
  //                 alert(`Iniciaste sesión con éxito, ${res.data.name}`);
  //                 window.location.href = "/";
  //               })
  //               .catch(error => {
  //                 alert("Ocurrió un error, inténtalo nuevamente.");
  //                 console.log(error);
  //               });
  //             break;
  //           // MANAGER ======================================
  //           case "Manager":
  //             setLoggedUser("Manager");
  //             break;
  //         }
  //       }
  //     } else {
  //       dispatch(userActions.logoutUser());
  //       setLoggedUser(null);
  //     }

  //     console.log("===================================");
  //   });
  // }, []);

  return (
    <FirebaseContext.Provider value={new Firebase()}>
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
            path="/store/category/:category"
            render={props => <Store routeProps={props} />}
          />
          <Route
            exact
            path="/store/brand/:brand"
            render={props => <Store routeProps={props} />}
          />
          <Route
            exact
            path="/store/ingredient/:ingredient"
            render={props => <Store routeProps={props} />}
          />
          <Redirect from="/store/" to="/store" />
          <Route
            exact
            path="/product/details/:productId"
            render={props => <ProductDetails routeProps={props} />}
          />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signup" component={SignUp} />
          {/* client routes */}
          {/* {loggedUser === "Client" ? (
          <>
            <Route exact path="/client/info" component={ClientInfo} />
            <Route exact path="/client/favorites" component={ClientFavorites} />
          </>
        ) : (
          <>
            <Redirect from="/client/" to="/" />
          </>
        )} */}
          {/* manager routes */}
          {/* {loggedUser === "Manager" ? (
          <>
            <Route exact path="/manager/dashboard" component={Dashboard} />
            <Route exact path="/manager/categories" component={Categories} />
            <Route
              exact
              path="/manager/categories/create"
              component={CategoriesCreate}
            />
            <Route exact path="/manager/products" component={Products} />
            <Route
              exact
              path="/manager/products/create"
              component={ProductsCreate}
            />
            <Route exact path="/manager/discounts" component={Discounts} />
            <Route
              exact
              path="/manager/discounts/create"
              component={DiscountsCreate}
            />
            <Route exact path="/manager/providers" component={Providers} />
            <Route
              exact
              path="/manager/providers/create"
              component={ProvidersCreate}
            />
            <Route exact path="/manager/users" component={Users} />
            <Route exact path="/manager/messages" component={Messages} />
            <Route exact path="/manager/sales" component={Sales} />
            <Route exact path="/manager/purchases" component={Purchases} />
          </>
        ) : (
          <>
            <Route exact path="/manager" component={Login} />
            <Redirect from="/manager/" to="/manager" />
          </>
        )} */}
          <Route exact path="/manager" component={Login} />
          <Redirect from="/manager/" to="/manager" />
          {/* no match 404 */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
};

export default App;
