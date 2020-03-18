import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Alert, ListGroup, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

const CartErrorsModal = React.memo(
  ({ showModal, notEnoughStock, zeroStock }) => {
    const [show, setShow] = useState(showModal);

    const handleClose = () => setShow(false);

    useEffect(() => {
      setShow(showModal);
    }, [showModal]);

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex flex-row">
            <h4 className="mb-0 text-dark">Advertencia</h4>
            <i
              className="fas fa-times ml-auto"
              style={{ cursor: "pointer" }}
              title="Cerrar"
              onClick={handleClose}
            />
          </div>
          {/* products with stock 0 */}
          {zeroStock.length ? (
            <div>
              <Alert variant="danger" className="my-3">
                Los siguientes productos no se encuentran disponibles.
              </Alert>
              <ListGroup>
                {zeroStock.map(zs => (
                  <ListGroup.Item key={zs._id}>
                    {zs.name}
                    <Badge variant="danger" className="ml-2">
                      Agotado
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ) : null}
          {/* products with stock less than qty */}
          {notEnoughStock.length ? (
            <div>
              <Alert variant="warning" className="my-3">
                No contamos con el número de productos que solicitas en tu
                canasta.
              </Alert>
              <Table bordered size="sm" responsive>
                <thead>
                  <tr>
                    <th className="border-top-0 border-right-0 border-left-0 text-center">
                      Producto
                    </th>
                    <th className="border-top-0 border-right-0 border-left-0 text-center">
                      Solicitaste
                    </th>
                    <th className="border-top-0 border-right-0 border-left-0 text-center">
                      Stock
                    </th>
                    <th className="border-top-0 border-right-0 border-left-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {notEnoughStock.map(e => (
                    <tr key={e._id}>
                      <td className="border-0 py-2">{e.name}</td>
                      <td className="border-0 py-2 text-center">{e.qty}</td>
                      <td className="border-0 py-2 text-center">{e.stock}</td>
                      <td className="border-0 py-2 text-center">
                        <Button
                          variant="warning"
                          size="sm"
                          title={"Ajustar a " + e.stock}
                        >
                          {"Ajustar a " + e.stock}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : null}
          <div></div>
          <Button
            className="p-0 mt-3 text-danger"
            variant="link"
            href="/cart"
            title="Regresar a la canasta"
          >
            <i className="fas fa-arrow-left mr-1" />
            Regresar a canasta
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
);

CartErrorsModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  notEnoughStock: PropTypes.array.isRequired,
  zeroStock: PropTypes.array.isRequired
};

export default CartErrorsModal;
