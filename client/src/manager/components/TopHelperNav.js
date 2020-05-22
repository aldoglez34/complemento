import React from "react";
import { Navbar, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import ManagerDropdown from "./ManagerDropdown";

const TopHelperNav = React.memo(({ backBttn, topBttn }) => {
  return (
    <Navbar className="pb-0" id="topHelperStyle">
      <Col className="d-flex justify-content-start align-items-center pl-0">
        {/* back button */}
        {backBttn ? (
          <Button
            variant="transparent"
            className="p-0 text-light shadow-sm"
            href={backBttn}
          >
            <i className="fas fa-chevron-left mr-1" />
            Atrás
          </Button>
        ) : null}
      </Col>
      <Col className="d-flex flex-row px-0 justify-content-end align-items-center">
        {/* right button */}
        {topBttn ? topBttn : null}
        <div className="ml-2" />
        {/* manager dropdow */}
        <ManagerDropdown />
      </Col>
    </Navbar>
  );
});

TopHelperNav.propTypes = {
  backBttn: PropTypes.string,
  topBttn: PropTypes.node,
};

export default TopHelperNav;
