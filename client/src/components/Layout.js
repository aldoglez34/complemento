import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";

const Layout = (props) => (

    <div className="d-flex flex-column h-100">
        <MyNavbar />
        {props.children}
        <MyFooter />
    </div>

);

export default Layout;