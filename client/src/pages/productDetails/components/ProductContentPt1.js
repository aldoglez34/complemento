import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const ProductContentPt1 = React.memo(({ content, brand, description }) => {
  return (
    <Col>
      <h5 className="mb-1">Contenido</h5>
      <p className="mb-2">{content}</p>
      <h5 className="mb-1">Marca</h5>
      <p className="mb-2">{brand}</p>
      <h5 className="mb-1">Descripción</h5>
      <p className="mb-2">{description}</p>
    </Col>
  );
});

ProductContentPt1.propTypes = {
  content: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductContentPt1;
