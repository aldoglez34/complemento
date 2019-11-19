import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import LeftNav from "./LeftNav";
import TopHelperNav from "./TopHelperNav";
import "./manager.scss";

ManagerLayout.propTypes = {
  children: PropTypes.node.isRequired
};

function ManagerLayout(props) {
  return (
    <div className="d-lg-flex flex-row h-100">
      <LeftNav />
      <Container id="containerMargin" fluid>
        <TopHelperNav />
        <Container
          style={{
            paddingTop: "6px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "24px"
          }}
          fluid
        >
          <Row>
            <Col className="pt-2 pb-4">{props.children}</Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ManagerLayout;
