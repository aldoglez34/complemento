import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import "./mybreadcrumb.scss";

const MyBreadcrumb = React.memo(function MyBreadcrumb(props) {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#59a49a" }} className="py-2 px-2">
        {props.routes.map(r => {
          if (r.to !== "active") {
            return (
              <span key={r.to}>
                <a href={r.to} className="breadcrumbItem ml-2">
                  {r.name}
                </a>
                <i className="fas fa-chevron-right breadcrumbArrow ml-2" />
              </span>
            );
          } else {
            return (
              <span
                key={r.to}
                href={r.to}
                className="breadcrumbItem active ml-2"
              >
                {r.name}
              </span>
            );
          }
        })}
      </Row>
    </Container>
  );
});

MyBreadcrumb.propTypes = {
  routes: PropTypes.array
};

export default MyBreadcrumb;
