import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import DiscountPercentages from "./DiscountPercentages";
import { formatNumber } from "../../../../utils/formatNumber";
import DatePicker from "react-datepicker";

const NoDiscount = React.memo(
  ({
    percentage,
    setPercentage,
    startDate,
    onChangeStartDate,
    endDate,
    onChangeEndDate,
    product,
    applyDiscount,
  }) => {
    const date = new Date();

    return (
      <>
        {/* percentage */}
        <Row className="mt-3 mb-4">
          <Col>
            <h4>PORCENTAJE</h4>
            <div className="text-center mt-3">
              <DiscountPercentages
                percentage={percentage}
                setPercentage={setPercentage}
              />
            </div>
          </Col>
        </Row>
        {/* date pickers */}
        <Row className="mb-4">
          <Col className="d-flex flex-column">
            <h4>INICIO</h4>
            <DatePicker
              disabled
              className="mt-2 p-2 pl-3 border rounded"
              selected={startDate}
              onChange={onChangeStartDate}
              selectsStart
              locale="es"
              dateFormat="dd/MM/yyyy"
            />
          </Col>
          <Col className="d-flex flex-column">
            <h4>TÉRMINO</h4>
            <DatePicker
              className="mt-2 p-2 pl-3 border rounded"
              todayHighlight={true}
              minDate={
                new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate() + 1
                )
              }
              selected={endDate}
              selectsEnd
              onChange={onChangeEndDate}
              locale="es"
              dateFormat="dd/MM/yyyy"
            />
          </Col>
        </Row>
        {/* new prices */}
        <Row className="mb-4">
          <Col className="d-flex flex-column">
            <h4>NUEVO PRECIO</h4>
            <h2 className="text-success">
              {formatNumber(
                product.price.salePrice -
                  (product.price.salePrice * percentage) / 100
              )}
            </h2>
          </Col>
          <Col className="d-flex flex-column">
            <h4>NUEVA UTILIDAD</h4>
            <h2 className="text-success">
              {formatNumber(
                product.price.salePrice -
                  (product.price.salePrice * percentage) / 100 -
                  product.price.latestPurchasePrice
              )}
            </h2>
          </Col>
        </Row>
        {/* button */}
        <div className="text-center">
          <Button
            className="shadow-sm"
            variant="warning"
            onClick={applyDiscount}
          >
            Aplicar
          </Button>
        </div>
      </>
    );
  }
);

NoDiscount.propTypes = {
  percentage: PropTypes.number.isRequired,
  setPercentage: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  onChangeStartDate: PropTypes.func.isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  onChangeEndDate: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  applyDiscount: PropTypes.func.isRequired,
};

export default NoDiscount;
