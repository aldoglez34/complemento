import React from "react";
import AuthUserContext from "./context";
import { connect } from "react-redux";
import firebase from "../firebase/firebase";
import { logoutUser } from "../redux/actions/user";
import API from "../utils/API";

// higher order component
const withNavigation = (Component) => {
  class WithNavigation extends React.Component {
    state = {
      navigation: null,
    };

    isClient(uid) {
      API.isClient(uid)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    isManager() {
      API.isManager(uid)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    componentDidMount() {
      firebase
        .auth()
        .onAuthStateChanged((fbUser) =>
          fbUser
            ? this.setState({ navigation: fbUser.displayName })
            : this.props.user
            ? this.setState({ navigation: "Guest" }, () =>
                this.props.logoutUser()
              )
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

  const mapDispatchToProps = {
    logoutUser,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithNavigation);
};

export default withNavigation;
