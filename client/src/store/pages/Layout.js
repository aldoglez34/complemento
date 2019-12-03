import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import PropTypes from "prop-types";

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

function Layout(props) {
    return (
        <div className="d-flex flex-column h-100">
            <MyNavbar />
            {props.children}
            <MyFooter />
        </div>
    );
}

export default Layout;
