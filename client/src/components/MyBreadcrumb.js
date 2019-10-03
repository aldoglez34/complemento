import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";

function MyBreadcrumb() {
  const category = useSelector(state => state.breadcrumb.cat);
  const suffering = useSelector(state => state.breadcrumb.suff);
  const product = useSelector(state => state.breadcrumb.product);

  return (
    <Breadcrumb className="d-none d-md-block" id="mybreadcrumb">
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="/store">Tienda</Breadcrumb.Item>

      {/* with redux */}
      {category ? <Breadcrumb.Item active>{category}</Breadcrumb.Item> : null}
      {suffering && suffering !== "Todos" ? (
        <Breadcrumb.Item active>{suffering}</Breadcrumb.Item>
      ) : null}
      {product ? <Breadcrumb.Item active>{product}</Breadcrumb.Item> : null}

      {/* with props */}
      {/* <Breadcrumb.Item active>{props.category}</Breadcrumb.Item> */}
      {/* {props.suffering !== "Todos" ? (
        <Breadcrumb.Item active>{props.suffering}</Breadcrumb.Item>
      ) : null} */}
    </Breadcrumb>
  );
}

export default MyBreadcrumb;
