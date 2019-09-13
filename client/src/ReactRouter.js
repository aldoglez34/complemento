import React, { Component } from "react";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Questions from "./pages/help/Questions";
import Complaints from "./pages/help/Complaints";
import Payment from "./pages/help/Payment";
import About from "./pages/about/About";
import Contact from "./pages/about/Contact";
import Location from "./pages/about/Location";

class ReactRouter extends Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/store" component={Store} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/product/:productId" render={props => (<ProductDetails routeProps={props} />)} />

					<Route exact path="/questions" component={Questions} />
					<Route exact path="/complaints" component={Complaints} />
					<Route exact path="/payment" component={Payment} />

					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/location" component={Location} />

					<Route component={NoMatch} />
				</Switch>
			</Router>
		)
	}

}

export default ReactRouter;
