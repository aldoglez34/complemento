import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import LeftNav from "./misc/LeftNav";
import TopHelperNav from "./misc/TopHelperNav";
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
          {/* title */}
          <Row className="mb-1">
            <Col md={8} className="d-flex align-items-center">
              <h1 style={{ color: "#264341" }}>
                {props.title}
              </h1>
            </Col>
            <Col md={4} className="mt-1 mt-md-0 text-md-right">
              {props.button ? (
                <Button variant="success" href={props.button.to}>
                  <i className="fas fa-plus-circle mr-1" />
                  {props.button.text}
                </Button>
              ) : null}
            </Col>
          </Row>
          {/* divider */}
          <hr className="myDivider" />
          {/* content */}
          <Row>
            <Col className="pt-2 pb-4">{props.children}</Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ManagerLayout;
