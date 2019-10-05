import React from "react";
import { Breadcrumb } from "react-bootstrap";

function MyBreadcrumb() {
  return (
    <Breadcrumb className="d-none d-md-block">
      <span className="mr-4">Usted está aquí:</span>
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="/store">Tienda</Breadcrumb.Item>
      {/* <Breadcrumb.Item active>{props.category}</Breadcrumb.Item> */}
      {/* {props.suffering !== "Todos" ? (
        <Breadcrumb.Item active>{props.suffering}</Breadcrumb.Item>
      ) : null} */}
    </Breadcrumb>
  );
}

export default MyBreadcrumb;
