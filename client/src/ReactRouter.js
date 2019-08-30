import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import NoMatch from "./pages/NoMatch/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ReactRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/store" component={Store} />
			<Route exact path="/cart" component={Cart} />
			<Route exact path="/product/:productId" render={props => (<Product routeProps={props} />)} />

			<Route component={NoMatch} />
		</Switch>
	</Router >
)

export default ReactRouter;