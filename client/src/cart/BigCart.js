import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const BigCart = React.memo(({ formatNumber }) => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6}></Col>
        <Col md={6}></Col>
      </Row>
    </React.Fragment>
  );
});

BigCart.propTypes = {
  formatNumber: PropTypes.func.isRequired
};

export default BigCart;
