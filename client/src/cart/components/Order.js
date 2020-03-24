import React, { useState, useEffect } from "react";
import { Modal, Spinner, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import API from "../../utils/API";

const Order = React.memo(({ showOrder, saleId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [order, setOrder] = useState();

  useEffect(() => {
    handleShow(showOrder);
    if (saleId)
      API.fetchOrder(saleId)
        .then(res => {
          console.log("@fetchOrder, order", order);
          setOrder(res.data[0]);
        })
        .catch(err => {
          console.log(err.response);
          alert(err.response.data.msg);
        });
  }, [showOrder]);

  return (
    <Modal show={showOrder} onHide={handleClose}>
      <Modal.Body>
        {order ? (
          <>
            {/* title */}
            <div className="d-flex flex-row mb-2">
              <h4 className="mb-0">¡Gracias por tu compra!</h4>
              <i
                className="fas fa-times ml-auto"
                style={{ cursor: "pointer" }}
                title="Cerrar"
                onClick={() => (window.location.href = "/cart")}
              />
            </div>
            <p className="text-muted">
              Número de pedido: <em>{order._id}</em>
            </p>
            <div className="mb-3">
              <strong>{order.buyer.name}</strong>, tu orden ha sido registrada
              con éxito. Te notificaremos cuando tus productos hayan sido
              enviados.
            </div>
            <h5>Resumen del pedido</h5>
            <Table striped hover>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
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
  showOrder: PropTypes.bool.isRequired,
  saleId: PropTypes.string
};

export default Order;
