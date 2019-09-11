// import firebase from "firebase";
const firebase = require("firebase/app");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyAZi7ajjaW05v1OQs6M6Od3JgJ-bsHYvCw",
    authDomain: "complemento-b0dc6.firebaseapp.com",
    databaseURL: "https://complemento-b0dc6.firebaseio.com",
    projectId: "complemento-b0dc6",
    storageBucket: "",
    messagingSenderId: "417170068615",
    appId: "1:417170068615:web:758e2affc5328e15ef9422"
};

const fire = firebase.initializeApp(config);

// setting session as persistence
fire.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default fire;