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
      <Col md="auto">
        <p className="mb-1">
          <strong>Última Compra:</strong>
          <strong className="ml-2 text-success">
            {formatNumber(product.price.latestPurchasePrice)}
          </strong>
        </p>
        <p className="mb-1">
          <strong>Venta:</strong>
          <strong className="ml-2 text-success">
            {formatNumber(product.price.salePrice)}
          </strong>
        </p>
        <p className="mb-1">
          <strong>Existencia:</strong>
          <strong className="ml-2 text-success">{product.stock}</strong>
        </p>
        <p className="mb-1">
          <strong>Vendidos:</strong>
          <strong className="ml-2 text-success">{product.unitsSold}</strong>
        </p>
        <p className="mb-0">
          <strong>Activo:</strong>
          <strong className="ml-2 text-success">
            {product.active ? "Sí" : "No"}
          </strong>
        </p>
      </Col>
    </Row>
  );
});

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInformation;
