import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";
import es from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";
registerLocale("es", es);

const NoDiscount = React.memo(({ product, terminateDiscount }) => {
  return (
    <>
      <Row className="mt-3 mb-4">
        <Col className="d-flex flex-column">
          <h4>INICIO</h4>
          <span className="text-muted">
            {moment(product.price.discount.startDate).format("dddd")}
          </span>
          <span className="text-muted">
            {moment(product.price.discount.startDate).format("LL")}
          </span>
        </Col>
        <Col className="d-flex flex-column">
          <h4>TÉRMINO</h4>
          <span className="text-muted">
            {moment(product.price.discount.endDate).format("dddd")}
          </span>
          <span className="text-muted">
            {moment(product.price.discount.endDate).format("LL")}
          </span>
        </Col>
        <Col className="d-flex flex-column">
          <h4>DESCUENTO</h4>
          <h1 className="text-secondary">
            {product.price.discount.percentage + "%"}
          </h1>
        </Col>
      </Row>
      <div className="text-center">
        <Button
          className="shadow-sm"
          variant="danger"
          onClick={terminateDiscount}
        >
          Terminar Descuento
        </Button>
      </div>
    </>
  );
});

NoDiscount.propTypes = {
  product: PropTypes.object.isRequired,
  terminateDiscount: PropTypes.func.isRequired,
};

export default NoDiscount;
