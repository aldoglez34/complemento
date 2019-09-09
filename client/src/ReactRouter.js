import React from "react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Questions from "./pages/help/Questions";

const ReactRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/store" component={Store} />
			<Route exact path="/cart" component={Cart} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/product/:productId" render={props => (<ProductDetails routeProps={props} />)} />

			<Route exact path="/questions" component={Questions} />

			<Route component={NoMatch} />
		</Switch>
	</Router >
)

export default ReactRouter;