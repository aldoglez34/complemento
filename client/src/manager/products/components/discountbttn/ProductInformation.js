import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { formatNumber } from "../../../../utils/formatNumber";

const ProductInformation = React.memo(({ product }) => {
  return (
    <Row className="mb-4">
      <Col md={{ span: 3, offset: 2 }}>
        <Image
          src={"/images/products/" + product.photo}
          width="84"
          height="150"
          alt={product.photo}
        />
      </Col>
      <Col md="auto" className="lead">
        <p className="mb-1">
          <span>Última Compra:</span>
          <span className="ml-2 text-success">
            {formatNumber(product.price.latestPurchasePrice)}
          </span>
        </p>
        <p className="mb-1">
          <span>Venta:</span>
          <span className="ml-2 text-success">
            {formatNumber(product.price.salePrice)}
          </span>
        </p>
        <p className="mb-1">
          <span>Existencia:</span>
          <span className="ml-2 text-success">{product.stock}</span>
        </p>
        <p className="mb-1">
          <span>Vendidos:</span>
          <span className="ml-2 text-success">{product.unitsSold}</span>
        </p>
        <p className="mb-0">
          <span>Activo:</span>
          <span className="ml-2 text-success">
            {product.active ? "Sí" : "No"}
          </span>
        </p>
      </Col>
    </Row>
  );
});

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInformation;
