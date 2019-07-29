import React from "react";
import MyNavbar from "../MyNavbar/MyNavbar";
import MyFooter from "../MyFooter/MyFooter";
import Container from "react-bootstrap/Container";

const Layout = (props) => (
    <div>
        <MyNavbar />
        <Container className="p-0" fluid="true">
            {props.children}
        </Container>
        <MyFooter />
    </div>
);

export default Layout;