import React from "react";
import MyNavbar from "./navbar/MyNavbar";
import MyFooter from "./footer/MyFooter";
import PropTypes from "prop-types";

const Layout = React.memo(({ children, hideBag = false }) => {
  return (
    <div className="d-flex flex-column h-100">
      <MyNavbar hideBag={hideBag} />
      {children}
      <MyFooter />
    </div>
  );
});

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideBag: PropTypes.bool
};

export default Layout;
