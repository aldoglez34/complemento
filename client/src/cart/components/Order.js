import React, { useState, useEffect } from "react";
import {
  Table,
  Row,
  Col,
  Modal,
  Spinner,
  ListGroup,
  Image
} from "react-bootstrap";
import PropTypes from "prop-types";

const Order = React.memo(({ order }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.href = "/";
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (order) handleShow();
  }, [order]);

  const formatNumber = num =>
    num !== undefined
      ? "$" +
        num
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {order ? (
          <>
            {/* top */}
            <Row>
              <Col>
                <div className="d-flex flex-row mb-3">
                  <i
                    className="fas fa-times ml-auto"
                    style={{ cursor: "pointer" }}
                    title="Cerrar"
                    onClick={handleClose}
                  />
                </div>
                <h1
                  className="text-center"
                  style={{
                    color: "#edcb58",
                    fontFamily: "Lobster",
                    fontSize: "45px"
                  }}
                >
                  Tu Complemento
                  <i
                    className="fas fa-leaf ml-2"
                    style={{
                      color: "#edcb58",
                      fontSize: "45px"
                    }}
                  />
                </h1>
                <h4 className="text-center mb-4">
                  ¡Gracias por tu compra, {order.buyer.name}!
                </h4>
              </Col>
            </Row>
            {/* icons */}
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <Image
                          style={{ height: "40px", width: "40px" }}
                          src="https://image.flaticon.com/icons/svg/456/456900.svg"
                        />
                      </td>
                      <td>
                        Te notificaremos a <strong>{order.buyer.email}</strong>{" "}
                        cuando tus productos hayan sido enviados.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <Image
                          style={{ height: "40px", width: "40px" }}
                          src="https://image.flaticon.com/icons/svg/1028/1028931.svg"
                        />
                      </td>
                      <td>
                        Estamos a tus órdenes al 2281112031 o
                        ayuda@tucomplemento.com
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            {/* order summary */}
            <Row>
              <Col>
                <h5>Resumen del pedido</h5>
                <p className="text-muted mb-3">
                  Número de pedido: <em>{order._id}</em>
                </p>
                <ListGroup className="mb-3 mt-2">
                  {order.products.map(p => {
                    return (
                      <ListGroup.Item key={p._id}>
                        <div className="d-flex flex-row">
                          <strong>{p.name}</strong>
                          <span className="text-muted ml-1">
                            {"(" + p.qty + ")"}
                          </span>
                          <strong className="text-danger ml-auto">
                            {formatNumber(p.totalByProduct)}
                          </strong>
                        </div>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
                <div className="d-flex flex-column justify-center-start mb-2">
                  <strong>
                    SUBTOTAL:{" "}
                    <strong className="text-danger">
                      {formatNumber(order.subTotal)}
                    </strong>
                  </strong>
                  <strong>
                    ENVÍO:{" "}
                    <strong className="text-danger">
                      {formatNumber(order.shipment)}
                    </strong>
                  </strong>
                  <strong>
                    GRAN TOTAL:{" "}
                    <strong className="text-danger">
                      {formatNumber(order.grandTotal)}
                    </strong>
                  </strong>
                </div>
              </Col>
            </Row>
            {/* address */}
            <Row>
              <Col>
                <h5>Dirección de envío</h5>
                <p className="mb-0">{order.buyer.address.street}</p>
                <p className="mb-0">
                  {order.buyer.address.municipality +
                    ", " +
                    order.buyer.address.neighborhood +
                    " " +
                    order.buyer.address.zipCode}
                </p>
                <p className="mb-4">
                  {order.buyer.address.city + ", " + order.buyer.address.state}
                </p>
                <div className="text-center text-muted pt-3">
                  (Recibirás una copia de este resumen a tu correo)
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div className="h-100 d-flex align-items-center justify-content-center">
            <Spinner variant="warning" animation="grow" role="status" />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
});

Order.propTypes = {
  order: PropTypes.object
};

export default Order;
