import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navigation";
import { withAuthentication } from "./session";

const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default withAuthentication(App);
