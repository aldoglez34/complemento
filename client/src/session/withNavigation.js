import React from "react";
import AuthUserContext from "./context";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";

// higher order component
const withNavigation = (Component) => {
  class WithNavigation extends React.Component {
    state = {
      navigation: null,
    };

    componentDidMount() {
      firebase
        .auth()
        .onAuthStateChanged((fbUser) =>
          fbUser
            ? this.setState({ navigation: fbUser.displayName })
            : this.setState({ navigation: "Guest" })
        );
    }

    render() {
      return this.state.navigation ? (
        <AuthUserContext.Provider value={this.state.navigation}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      ) : null;
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

  return connect(mapStateToProps, null)(WithNavigation);
};

export default withNavigation;
