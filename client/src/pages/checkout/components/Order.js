import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Row,
  Col,
  Modal,
  Spinner,
  Image,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { formatNumber } from "../../../utils/formatNumber";

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
                    fontSize: "40px",
                  }}
                >
                  Tu Complemento
                  <i
                    className="fas fa-leaf ml-2"
                    style={{
                      color: "#edcb58",
                      fontSize: "37px",
                    }}
                  />
                </h1>
                <h3 className="text-center mb-0">
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
                          src="./images/checkout/inventory.png"
                        />
                      </td>
                      <td className="border-top-0 align-middle">
                        Te notificaremos al correo{" "}
                        <strong>{order.buyer.email}</strong> cuando tus
                        productos hayan sido enviados
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border-top-0">
                        <Image
                          style={{ height: "55px", width: "55px" }}
                          src="./images/checkout/courier.png"
                        />
                      </td>
                      <td className="border-top-0 align-middle">
                        Estamos a tus órdenes al número{" "}
                        <strong>2281112031</strong> o al correo{" "}
                        <strong>tucomplemento@gmail.com</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border-top-0">
                        <Image
                          style={{ height: "55px", width: "55px" }}
                          src="./images/checkout/seo.png"
                        />
                      </td>
                      <td className="border-top-0 align-middle">
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
                <h4 className="mb-4">Resumen del pedido</h4>
                <div className="p-3 border rounded border-warning">
                  {order.products.map((p) => {
                    return (
                      <div key={p._id} className="d-flex flex-row">
                        <strong className="text-dark">{p.name}</strong>
                        <span className="text-muted ml-1">
                          {"(" + p.qty + ")"}
                        </span>
                        <strong className="text-danger ml-auto">
                          {formatNumber(p.totalByProduct)}
                        </strong>
                      </div>
                    );
                  })}
                  <hr />
                  {/* totals */}
                  <div className="d-flex flex-row">
                    <strong className="text-dark">SUBTOTAL</strong>
                    <strong className="text-danger ml-auto">
                      {formatNumber(order.subTotal)}
                    </strong>
                  </div>
                  <div className="d-flex flex-row">
                    <strong className="text-dark">ENVÍO</strong>
                    <strong className="text-danger ml-auto">
                      {formatNumber(order.shipment)}
                    </strong>
                  </div>
                  <div className="d-flex flex-row">
                    <strong className="text-dark">GRAN TOTAL</strong>
                    <strong className="text-danger ml-auto">
                      {formatNumber(order.grandTotal)}
                    </strong>
                  </div>
                </div>
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
                <p className="mb-0">
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
            <div className="pt-4 pb-3 text-center">
              <Button
                variant="warning"
                href="/store"
                className="shadow-sm"
                title="Regresa a la tienda"
              >
                <i className="fas fa-arrow-left mr-2" />
                Volver a la tienda
              </Button>
            </div>
            <div className="text-center text-muted">
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
  order: PropTypes.object,
};

export default Order;
