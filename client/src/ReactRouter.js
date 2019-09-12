import React, { Component } from "react";
import firebase from "./firebase/Fire";
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
import API from "./utils/API";
import { connect } from "react-redux";
import { saveLoggedClient } from "./redux-actions";

class ReactRouter extends Component {

	state = {
		user: {}
	}

	// listening if the user signs in
	authListener() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				// if user logged in, save it into the state and into redux
				this.setState({ user }, () => this.getClientAndSaveItToRedux(this.state.user.uid));
				// localStorage.setItem("user", user.uid);
			} else {
				// else set null
				this.setState({ user: null });
				// localStorage.removeItem("user");
			}
		});
	}

	getClientAndSaveItToRedux = uid => {
		// get the client info from the db and save it to redux
		API.getClientInfo(uid)
			.then(res => {
				// dispatch an action
				this.props.saveLoggedClient(res.data[0])
			})
			.catch(err => console.log(err))
	}

	componentDidMount() {
		this.authListener();
	}

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

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = {
	saveLoggedClient
}

// export default ReactRouter;
export default connect(mapStateToProps, mapDispatchToProps)(ReactRouter);
