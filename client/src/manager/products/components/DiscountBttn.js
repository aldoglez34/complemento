import React, { useState } from "react";
import { Modal, Button, Col, Image, Row, ListGroup } from "react-bootstrap";
import { formatNumber } from "../../../utils/formatNumber";
import APIManager from "../../../utils/APIManager";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import moment from "moment";
registerLocale("es", es);

const DiscountBttn = React.memo(({ product }) => {
  const [show, setShow] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [percentage, setPercentage] = useState(5);

  const onChangeStartDate = (date) => setStartDate(date);
  const onChangeEndDate = (date) => setEndDate(date);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const applyDiscount = () => {
    APIManager.mngr_newDiscount({
      productId: product._id,
      percentage: percentage,
      newPrice:
        product.price.salePrice - (product.price.salePrice * percentage) / 100,
      formattedStartDate: moment(startDate).format("YYYY/MM/DD"),
      formattedEndDate: moment(endDate).format("YYYY/MM/DD"),
    })
      .then((res) => {
        console.log(res);
        alert(
          res.data.msg ? res.data.msg : "El descuento fue aplicado con éxito."
        );
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al aplicar el descuento.");
      });
  };

  const terminateDiscount = (productId) => {
    APIManager.mngr_terminateDiscount(productId)
      .then((res) => {
        console.log(res);
        alert(
          res.data.msg ? res.data.msg : "El descuento fue aplicado con éxito."
        );
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al aplicar el descuento.");
      });
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant="warning"
        size="sm"
        title="Descuento"
        className="ml-3 shadow-sm"
      >
        <i className="fas fa-tags pt-1" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="pb-4">
          <h1 className="text-center mb-4 mt-2">
            <u>{product.name}</u>
          </h1>
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
                <strong className="ml-2 text-success">
                  {product.unitsSold}
                </strong>
              </p>
              <p className="mb-0">
                <strong>Activo:</strong>
                <strong className="ml-2 text-success">
                  {product.active ? "Sí" : "No"}
                </strong>
              </p>
            </Col>
          </Row>
          {product.price.discount.hasDiscount ? (
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
                  onClick={() => terminateDiscount(product._id)}
                >
                  Terminar Descuento
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* star date and end date */}
              <Row className="mb-3">
                <Col>
                  <strong>Fecha de inicio</strong>
                  <DatePicker
                    className="mt-2 p-2 pl-3 border rounded"
                    selected={startDate}
                    onChange={onChangeStartDate}
                    locale="es"
                    dateFormat="dd/MM/yyyy"
                  />
                </Col>
                <Col>
                  <strong>Fecha de término</strong>
                  <DatePicker
                    className="mt-2 p-2 pl-3 border rounded"
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
                  <ListGroup className="mt-2" horizontal>
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
                      {formatNumber(
                        product.price.salePrice -
                          (product.price.salePrice * percentage) / 100
                      )}
                    </strong>
                  </p>
                  <p className="mb-1">
                    <strong>Nueva utilidad:</strong>
                    <strong className="ml-2 text-danger">
                      {formatNumber(
                        product.price.salePrice -
                          (product.price.salePrice * percentage) / 100 -
                          product.price.latestPurchasePrice
                      )}
                    </strong>
                  </p>
                </Col>
              </Row>
              {/* button */}
              <Row>
                <Col className="text-center">
                  <Button
                    className="shadow-sm"
                    variant="warning"
                    onClick={applyDiscount}
                  >
                    Aplicar Descuento
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});

DiscountBttn.propTypes = {
  product: PropTypes.object.isRequired,
};

export default DiscountBttn;
