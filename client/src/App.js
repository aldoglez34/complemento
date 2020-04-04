import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navigation";
import { withFirebase } from "./firebase";
import Firebase, { FirebaseContext } from "./firebase";

class App extends Component {
  state = {
    authUser: null,
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
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <Navigation authUser={this.state.authUser} />
        </Router>
      </FirebaseContext.Provider>
    );
  }
}

export default withFirebase(App);
