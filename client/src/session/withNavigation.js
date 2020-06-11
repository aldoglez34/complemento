import React from "react";
import AuthUserContext from "./context";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";
import { logoutUser } from "../redux/actions/user";

// higher order component
const withNavigation = (Component) => {
  class WithNavigation extends React.Component {
    state = {
      navigation: null,
    };

    componentDidMount() {
      firebase.auth().onAuthStateChanged((fbUser) => {
        fbUser
          ? this.setState({ navigation: fbUser.displayName })
          : this.props.user
          ? this.setState({ navigation: "Guest" }, () =>
              this.props.logoutUser()
            )
          : this.setState({ navigation: "Guest" });
      });
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

  const mapDispatchToProps = {
    logoutUser,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithNavigation);
};

export default withNavigation;
