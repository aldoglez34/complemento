import React from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../firebase";
import { connect } from "react-redux";
import API from "../utils/API";
import { loginClient, logoutUser } from "../redux/actions/user";

// higher order component
const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    };

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) =>
        authUser
          ? this.setState({ authUser: authUser.displayName }, () =>
              this.signInRedux(authUser.uid)
            )
          : this.setState({ authUser: "Guest" }, () =>
              this.props.user !== null ? this.props.logoutUser() : null
            )
      );
    }

    signInRedux(uid) {
      switch (this.state.authUser) {
        case "Client":
          if (!this.props.user)
            API.fetchClientByUID(uid)
              .then((res) => {
                this.props.loginClient(res.data);
                alert(`Iniciaste sesión con éxito, ${res.data.name}`);
                window.location.href = "/";
              })
              .catch((err) => {
                // print error
                alert("Ocurrió un error. Vuelve a intentarlo.");
                console.log(err);
              });
          break;
        case "Manager":
          // code block
          break;
        default:
          return null;
      }
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

  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

  const mapDispatchToProps = {
    loginClient,
    logoutUser,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withFirebase(WithAuthentication));
};

export default withAuthentication;
