import React from "react";
import { Breadcrumb } from "react-bootstrap";

const styles = {
  breadcrumb: {
    color: "white !important"
  }
};

function MyBreadcrumb() {
  return (
    <Breadcrumb
      style={styles.breadcrumb}
      className="d-none d-md-block"
    >
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="/store">Tienda</Breadcrumb.Item>
      <Breadcrumb.Item active>Alimentos Terapéuticos</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default MyBreadcrumb;
