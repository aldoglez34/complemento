import React, { useState, useEffect } from "react";
import { Modal, Spinner, ListGroup } from "react-bootstrap";
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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {order ? (
          <>
            {/* title */}
            <div className="d-flex flex-row mb-3">
              <h4 className="mb-0">¡Gracias por tu compra!</h4>
              <i
                className="fas fa-times ml-auto"
                style={{ cursor: "pointer" }}
                title="Cerrar"
                onClick={handleClose}
              />
            </div>
            <p className="text-muted">
              Número de pedido: <em>{order._id}</em>
            </p>
            <div className="mb-3">
              <strong>{order.buyer.name}</strong>, tu orden ha sido registrada
              con éxito. Te notificaremos a <strong>{order.buyer.email}</strong>{" "}
              cuando tus productos hayan sido enviados.
            </div>
            <h5>Resumen del pedido</h5>
            <ListGroup variant="flush" className="mb-3">
              {order.products.map(p => {
                return (
                  <ListGroup.Item key={p._id}>
                    <div className="d-flex flex-row">
                      <strong>{p.name}</strong>
                      <span className="text-muted ml-1">
                        {"(" + p.qty + ")"}
                      </span>
                      <strong className="text-danger ml-auto">
                        {"$" + p.totalByProduct}
                      </strong>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <div className="d-flex flex-column justify-center-start px-3 mb-3">
              <span>
                SUBTOTAL:{" "}
                <strong className="text-danger">{"$" + order.subTotal}</strong>
              </span>
              <span>
                ENVÍO:{" "}
                <strong className="text-danger">{"$" + order.shipment}</strong>
              </span>
              <span>
                GRAN TOTAL:{" "}
                <strong className="text-danger">
                  {"$" + order.grandTotal}
                </strong>
              </span>
            </div>
            <h5>Datos de envío</h5>
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
