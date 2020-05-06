import React from "react";
import { Navbar, Col, Button } from "react-bootstrap";
import ManagerDropdown from "./ManagerDropdown";
import PropTypes from "prop-types";

const TopHelperNav = React.memo(({ backBttn, newBttn }) => {
  return (
    <Navbar className="pb-0" id="topHelperStyle">
      <Col className="d-flex justify-content-start align-items-center">
        {/* back button */}
        {backBttn ? (
          <Button
            variant="transparent"
            title="Regresar"
            className="p-0 shadow-sm"
            href={backBttn}
          >
            <i
              className="fas fa-chevron-left text-dark"
              style={{ fontSize: "23px" }}
            />
          </Button>
        ) : null}
      </Col>
      <Col className="d-flex flex-row px-0 justify-content-end align-items-center">
        {/* new button */}
        {newBttn ? newBttn : null}
        {/* manager (user) dropdow */}
        <ManagerDropdown />
      </Col>
    </Navbar>
  );
});

TopHelperNav.propTypes = {
  backBttn: PropTypes.string,
  newBttn: PropTypes.node,
};

export default TopHelperNav;
