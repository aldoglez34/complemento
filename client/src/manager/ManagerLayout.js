import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import LeftNav from "./misc/LeftNav";
import TopHelperNav from "./misc/TopHelperNav";
import "./manager.scss";

const ManagerLayout = React.memo(
  ({ leftBarActive, backBttn, title, button, children }) => {
    return (
      <div className="d-lg-flex flex-row h-100">
        <LeftNav leftBarActive={leftBarActive} />
        <Container id="containerMargin" fluid>
          <TopHelperNav backBttn={backBttn} />
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
                <h2>{title}</h2>
              </Col>
              <Col md={4} className="mt-1 mt-md-0 text-md-right">
                {button ? (
                  <Button variant="outline-success" href={button.to}>
                    {button.text}
                  </Button>
                ) : null}
              </Col>
            </Row>
            {/* divider */}
            <hr className="myDivider" />
            {/* content */}
            <Row>
              <Col className="pt-2 pb-4">{children}</Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
);

ManagerLayout.propTypes = {
  leftBarActive: PropTypes.string.isRequired,
  backBttn: PropTypes.bool,
  title: PropTypes.string.isRequired,
  button: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default ManagerLayout;
