// firebase
const firebase = require("firebase/app");
require("firebase/auth");

// environment variables
require("dotenv").config();

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const config = {
  apiKey: "AIzaSyAZi7ajjaW05v1OQs6M6Od3JgJ-bsHYvCw",
  authDomain: "complemento-b0dc6.firebaseapp.com",
  databaseURL: "https://complemento-b0dc6.firebaseio.com",
  projectId: "complemento-b0dc6",
  storageBucket: "complemento-b0dc6.appspot.com",
  messagingSenderId: "417170068615",
  appId: "1:417170068615:web:758e2affc5328e15ef9422"
};

const fire = firebase.initializeApp(config);

export default fire;
