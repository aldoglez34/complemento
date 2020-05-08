import React from "react";
import { Navbar, Container } from "react-bootstrap";
import BagDropdown from "./bagDropdown";

const NavSM = React.memo(() => {
  return (
    <div className="d-block d-md-none w-100">
      <Navbar.Collapse id="top-navbar">
        <Container className="my-2 bg-light rounded" fluid>
          <BagDropdown size="small" />
        </Container>
      </Navbar.Collapse>
    </div>
  );
});

export default NavSM;
