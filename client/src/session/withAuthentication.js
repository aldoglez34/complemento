import React from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../firebase";

// higher order component
const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    };

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          authUser
            ? this.setState({ authUser: authUser.displayName })
            : this.setState({ authUser: "Guest" });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return this.state.authUser ? (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      ) : null;
    }
  }
  return withFirebase(WithAuthentication);
};

export default withAuthentication;
