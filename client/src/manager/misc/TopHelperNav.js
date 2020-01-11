import React from "react";
import { Navbar, Nav, Col, Button } from "react-bootstrap";
import ManagerDropdown from "./ManagerDropdown";

function TopHelperNav(props) {
  return (
    <div className="d-none d-md-block">
      <Navbar id="topHelperStyle">
        <Col className="d-flex justify-content-start">
          {props.backBttn ? (
            <Button
              variant="transparent"
              title="Regresar"
              className="p-0"
              href={props.backBttn}
            >
              <i
                className="fas fa-chevron-left text-dark"
                style={{ fontSize: "23px" }}
              />
            </Button>
          ) : null}
        </Col>
        <Col className="d-flex flex-row justify-content-end">
          <Nav.Item className="topHelperItem">
            <ManagerDropdown />
          </Nav.Item>
        </Col>
      </Navbar>
    </div>
  );
}

export default TopHelperNav;
