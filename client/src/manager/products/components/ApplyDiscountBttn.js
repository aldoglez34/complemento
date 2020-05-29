import React, { useState } from "react";
import { Modal, Button, Col, Image, Row, ListGroup } from "react-bootstrap";
import { formatNumber } from "../../../utils/formatNumber";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import moment from "moment";
registerLocale("es", es);

const ApplyDiscountBttn = React.memo(({ product }) => {
  const [show, setShow] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [percentage, setPercentage] = useState(5);

  const onChangeStartDate = (date) => setStartDate(date);
  const onChangeEndDate = (date) => setEndDate(date);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShow}>
        <i className="fas fa-plus-square mr-1" />
        Descuento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h3 className="text-center mb-4">{product.name}</h3>
          {/* product information */}
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
                <strong>Precio de la última compra:</strong>
                <span className="ml-2">
                  {formatNumber(product.price.latestPurchasePrice)}
                </span>
              </p>
              <p className="mb-1">
                <strong>Precio de venta:</strong>
                <span className="ml-2">
                  {formatNumber(product.price.salePrice)}
                </span>
              </p>
              <p className="mb-1">
                <strong>Unidades vendidas:</strong>
                <span className="ml-2">{product.unitsSold}</span>
              </p>
              <p className="mb-0">
                <strong>Existencia:</strong>
                <span className="ml-2">{product.stock}</span>
              </p>
            </Col>
          </Row>
          {/* star date and end date */}
          <Row className="mb-3">
            <Col>
              <strong className="mb-2">Fecha de inicio</strong>
              <DatePicker
                className="p-2 pl-3 border rounded"
                selected={startDate}
                onChange={onChangeStartDate}
                locale="es"
                dateFormat="dd/MM/yyyy"
              />
            </Col>
            <Col>
              <strong className="mb-2">Fecha de término</strong>
              <DatePicker
                className="p-2 pl-3 border rounded"
                selected={endDate}
                onChange={onChangeEndDate}
                locale="es"
                dateFormat="dd/MM/yyyy"
              />
            </Col>
          </Row>
          {/* percentages */}
          <Row className="mb-3">
            <Col>
              <strong>Porcentaje</strong>
              <ListGroup horizontal>
                <ListGroup.Item
                  className="text-center"
                  action
                  onClick={() => setPercentage(5)}
                  active={percentage === 5 ? true : false}
                >
                  5%
                </ListGroup.Item>
                <ListGroup.Item
                  className="text-center"
                  action
                  onClick={() => setPercentage(10)}
                  active={percentage === 10 ? true : false}
                >
                  10%
                </ListGroup.Item>
                <ListGroup.Item
                  className="text-center"
                  action
                  onClick={() => setPercentage(15)}
                  active={percentage === 15 ? true : false}
                >
                  15%
                </ListGroup.Item>
                <ListGroup.Item
                  className="text-center"
                  action
                  onClick={() => setPercentage(20)}
                  active={percentage === 20 ? true : false}
                >
                  20%
                </ListGroup.Item>
                <ListGroup.Item
                  className="text-center"
                  action
                  onClick={() => setPercentage(25)}
                  active={percentage === 25 ? true : false}
                >
                  25%
                </ListGroup.Item>
                <ListGroup.Item
                  className="text-center"
                  action
                  onClick={() => setPercentage(30)}
                  active={percentage === 30 ? true : false}
                >
                  30%
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          {/* new prices */}
          <Row className="mb-3">
            <Col>
              <p className="mb-1">
                <strong>Nuevo precio de venta:</strong>
                <strong className="ml-2 text-danger">
                  {formatNumber(product.price.salePrice)}
                </strong>
              </p>
              <p className="mb-1">
                <strong>Nueva utilidad:</strong>
                <strong className="ml-2 text-danger">
                  {formatNumber(product.price.salePrice)}
                </strong>
              </p>
            </Col>
          </Row>
          {/* button */}
          <Row>
            <Col>
              <Button
                className="shadow-sm"
                variant="warning"
                onClick={() =>
                  alert(
                    `start date: ${moment(startDate).format(
                      "DD MM YY"
                    )}, end date: ${endDate}, percentage: ${percentage}`
                  )
                }
              >
                Aplicar Descuento
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
});

ApplyDiscountBttn.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ApplyDiscountBttn;
