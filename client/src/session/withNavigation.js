import React from "react";
import AuthUserContext from "./context";
import { connect } from "react-redux";
import API from "../utils/API";
import APIManager from "../utils/APIManager";
import { loginClient, logoutUser } from "../redux/actions/user";
import firebase from "../firebase/firebase";

// higher order component
const withNavigation = (Component) => {
  class WithNavigation extends React.Component {
    state = {
      navigation: null,
    };

    componentDidMount() {
      firebase.auth().onAuthStateChanged((fbUser) => {
        console.log("fbUser", fbUser);

        fbUser
          ? this.setState({ navigation: fbUser.displayName })
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

    signInRedux(uid) {
      switch (this.state.authUser) {
        case "Client":
          if (!this.props.user)
            API.fetchClientByUID(uid)
              .then((res) => {
                if (res.data) {
                  this.props.loginClient(res.data);
                  alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                  window.location.href = "/";
                }
              })
              .catch((err) => {
                // print error
                alert("Ocurrió un error. Vuelve a intentarlo.");
                console.log(err);
              });
          break;
        case "Manager":
          if (!this.props.user)
            APIManager.mngr_fetchManagerByUID(uid)
              .then((res) => {
                if (res.data) {
                  this.props.loginClient(res.data);
                  alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                  window.location.href = "/manager/dashboard";
                }
              })
              .catch((err) => {
                // print error
                alert("Ocurrió un error. Vuelve a intentarlo.");
                console.log(err);
              });
          break;
        default:
          return null;
      }
    }

    componentWillUnmount() {
      this.listener();
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

  const mapDispatchToProps = {
    loginClient,
    logoutUser,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithNavigation);
};

export default withNavigation;
