import React from "react";
import { ListGroup } from "react-bootstrap";

const ProductsByCategory = React.memo(() => {
  return (
    <>
      <h4 className="mb-3">Productos por categoría</h4>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </>
  );
});

export default ProductsByCategory;