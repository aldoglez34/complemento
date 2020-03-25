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
                  className="text-center mb-3"
                  style={{
                    color: "#edcb58",
                    fontFamily: "Lobster",
                    fontSize: "40px"
                  }}
                >
                  Tu Complemento
                  <i
                    className="fas fa-leaf ml-2"
                    style={{
                      color: "#edcb58",
                      fontSize: "37px"
                    }}
                  />
                </h1>
                <h3 className="text-center mb-4">
                  ¡Gracias, {order.buyer.name}!
                </h3>
              </Col>
            </Row>
            {/* icons */}
            <Row>
              <Col>
                <Table>
                  <tbody>
                    <tr>
                      <td className="text-center border-top-0">
                        <Image
                          style={{ height: "55px", width: "55px" }}
                          src="https://image.flaticon.com/icons/svg/456/456900.svg"
                        />
                      </td>
                      <td className="border-top-0">
                        Te notificaremos al correo{" "}
                        <strong>{order.buyer.email}</strong> cuando tus
                        productos hayan sido enviados.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border-top-0">
                        <Image
                          style={{ height: "55px", width: "55px" }}
                          src="https://image.flaticon.com/icons/svg/1028/1028931.svg"
                        />
                      </td>
                      <td className="border-top-0">
                        Estamos a tus órdenes al número{" "}
                        <strong>2281112031</strong> o al correo{" "}
                        <strong>tucomplemento@gmail.com</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border-top-0">
                        <Image
                          style={{ height: "55px", width: "55px" }}
                          src="https://image.flaticon.com/icons/svg/166/166143.svg"
                        />
                      </td>
                      <td className="border-top-0">
                        Tu número de pedido es <strong>{order._id}</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            {/* order summary */}
            <Row>
              <Col>
                <h4>Resumen del pedido</h4>
                <ListGroup className="mb-2 pt-3">
                  {order.products.map(p => {
                    return (
                      <ListGroup.Item variant="success" key={p._id}>
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
                {/* <p className="mb-1">Totales: </p> */}
                <ListGroup>
                  <ListGroup.Item variant="light">
                    <div className="d-flex flex-row">
                      <strong>SUBTOTAL</strong>
                      <strong className="text-danger ml-auto">
                        {formatNumber(order.subTotal)}
                      </strong>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    <div className="d-flex flex-row">
                      <strong>ENVÍO</strong>
                      <strong className="text-danger ml-auto">
                        {formatNumber(order.shipment)}
                      </strong>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    <div className="d-flex flex-row">
                      <strong>GRAN TOTAL</strong>
                      <strong className="text-danger ml-auto">
                        {formatNumber(order.grandTotal)}
                      </strong>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            {/* address */}
            <Row className="mt-4">
              <Col>
                <h4>Dirección de envío</h4>
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
              </Col>
            </Row>
            {/* payment */}
            <Row className="mt-4">
              <Col>
                <h4>Forma de pago</h4>
                <p className="mb-0">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </Col>
            </Row>
            <div className="text-center text-muted pt-2">
              (Recibirás una copia de este resumen a tu correo)
            </div>
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
