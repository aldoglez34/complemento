import API from "../utils/API";

// firebase app
import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    console.log("config", config);
  }

  //////// auth api ////////
  _createUserWithEmailAndPassword = (email, password, values) => {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        // set client type
        u.user.updateProfile({
          displayName: "Client",
        });
        // add client to db
        values.firebaseUID = u.user.uid;
        API.newClient(values)
          .then(() => (window.location.href = "/"))
          .catch((err) => {
            console.log(err.response);
            err.response.data.msg
              ? alert(err.response.data.msg)
              : alert("Ocurrió un error al crear nuevo cliente en la BD.");
          });
      })
      .catch(() =>
        alert(
          "Ocurrió un error al intentar iniciar sesión. Verifica tus datos y vuelve a intentarlo."
        )
      );
  };

  _signInWithEmailAndPassword = (email, password, rememberMe) => {
    const firebase = require("firebase/app");
    this.auth
      .setPersistence(
        rememberMe
          ? firebase.auth.Auth.Persistence.LOCAL
          : firebase.auth.Auth.Persistence.SESSION
      )
      .then(() => this.auth.signInWithEmailAndPassword(email, password))
      .catch(() =>
        alert(
          "Ocurrió un error al intentar iniciar sesión. Verifica tus datos y vuelve a intentarlo."
        )
      );
  };

  _signOut = () => this.auth.signOut();

  _passwordReset = (email) => this.auth.sendPasswordResetEmail(email);
  _passwordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
