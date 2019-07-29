import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ReactRouter = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/store" component={Store} />

				{/* <Route exact path="/dashboard" component={Dashboard} />
				<Route component={NoMatch} /> */}
			</Switch>
		</div>
	</Router >
)

export default ReactRouter;