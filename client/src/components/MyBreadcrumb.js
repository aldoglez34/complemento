import React from "react";
import { Breadcrumb } from "react-bootstrap";
import PropTypes from "prop-types";

MyBreadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
  suffering: PropTypes.string
};

function MyBreadcrumb(props) {
  return (
    <Breadcrumb className="d-none d-md-block">
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="/store">Tienda</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.category}</Breadcrumb.Item>
      {props.suffering !== "Todos" ? (
        <Breadcrumb.Item active>{props.suffering}</Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
}

export default MyBreadcrumb;
