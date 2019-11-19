import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Col, Button } from "react-bootstrap";

function TopHelperNav() {
  //   const user = useSelector(state => state.user);
  //   const audit = useSelector(state => state.audit);
  const manager = useSelector(state => state.manager);

  return (
    <div className="d-none d-md-block">
      <Navbar id="topHelperStyle">
        <Col className="d-flex justify-content-start">
          {/* {audit.backBttn ? (
            <Button variant="transparent" href={audit.backBttn} className="p-0">
              <i className="fas fa-chevron-left backArrow" />
            </Button>
          ) : null} */}
        </Col>
        <Col className="d-flex justify-content-center">
          {/* {audit.isOpen ? (
            <Nav.Item className="topHelperAuditOpened">
              <i className="fas fa-project-diagram mr-2" />
              <strong>Complemento Natural</strong>
            </Nav.Item>
          ) : null} */}
        </Col>
        <Col className="d-flex flex-row justify-content-end">
          <Nav.Item className="topHelperItem">
            <i className="fas fa-user mr-2" />
            {manager.email}
          </Nav.Item>
          {/* <Nav.Item className="topHelperItem">
            <i className="fas fa-shield-alt mr-2" />
            {user.role}
          </Nav.Item> */}
        </Col>
      </Navbar>
    </div>
  );
}

export default TopHelperNav;
