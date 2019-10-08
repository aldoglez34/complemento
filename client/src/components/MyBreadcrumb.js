import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import "./mybreadcrumb.scss";

MyBreadcrumb.propTypes = {
  routes: PropTypes.array
};

function MyBreadcrumb(props) {
  return (
    <Container className="pl-1 d-none d-md-block" fluid>
      <Row id="breadcrumbStyle">
        <Col>
          {props.routes.map(r => {
            if (r.to !== "active") {
              return (
                <span key={r.to}>
                  <a href={r.to} className="breadcrumbItem">
                    {r.name}
                  </a>
                  <i className="fas fa-chevron-right breadcrumbArrow" />
                </span>
              );
            } else {
              return (
                <span key={r.to}>
                  <span href={r.to} className="breadcrumbItem active">
                    {r.name}
                  </span>
                </span>
              );
            }
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default MyBreadcrumb;
