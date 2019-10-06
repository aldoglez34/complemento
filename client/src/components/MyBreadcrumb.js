import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mybreadcrumb.scss";

function MyBreadcrumb() {
  return (
    <Container className="pl-1 d-none d-md-block" fluid>
      <Row id="breadcrumbStyle">
        <Col>
          <a href="/" className="breadcrumbItem">
            Inicio
          </a>
          <i className="fas fa-chevron-right breadcrumbArrow" />
          <a href="/store" className="breadcrumbItem">
            Tienda
          </a>
          <i className="fas fa-chevron-right breadcrumbArrow" />
          <span href="/store" className="breadcrumbItem active">
            Todas las categorías
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default MyBreadcrumb;
