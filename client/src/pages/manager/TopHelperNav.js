import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Col, Button } from "react-bootstrap";

function TopHelperNav() {
  const manager = useSelector(state => state.manager);

  return (
    <div className="d-none d-md-block">
      <Navbar id="topHelperStyle">
        <Col className="d-flex justify-content-start">
          {manager.backBttn ? (
            <Button
              variant="transparent"
              href={manager.backBttn}
              className="p-0"
              style={{ color: "darkslategray" }}
            >
              <i className="fas fa-chevron-left backArrow" />
            </Button>
          ) : null}
        </Col>
        <Col className="d-flex flex-row justify-content-end">
          <Nav.Item className="topHelperItem p-0">
            <i className="fas fa-user mr-1" />
            {manager.email}
          </Nav.Item>
        </Col>
      </Navbar>
    </div>
  );
}

export default TopHelperNav;
