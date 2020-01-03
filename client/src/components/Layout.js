import React from "react";
import MyNavbar from "./navbar/MyNavbar";
import MyFooter from "./footer/MyFooter";
import PropTypes from "prop-types";

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

function Layout(props) {
  return (
    <div className="d-flex flex-column h-100">
      <MyNavbar hideBag={props.hideBag} />
      {props.children}
      <MyFooter />
    </div>
  );
}

export default Layout;
