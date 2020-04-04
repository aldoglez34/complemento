import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navigation";
import { withFirebase } from "./firebase";

class App extends Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    console.log("@componentDidMount", this.props);
    // this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
    //   authUser
    //     ? this.setState({ authUser })
    //     : this.setState({ authUser: null });
    // });
  }

  componentWillUnmount() {
    // this.listener();
  }

  render() {
    return (
      <Router>
        {console.log("@render", this.props)}
        <Navigation authUser={this.state.authUser} />
      </Router>
    );
  }
}

export default withFirebase(App);
