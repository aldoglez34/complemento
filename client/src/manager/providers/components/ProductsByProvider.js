import React, { useState } from "react";
import PropTypes from "prop-types";
import APIManager from "../../../utils/APIManager";
import { Spinner, Button, Modal } from "react-bootstrap";

const ProductsByProvider = React.memo(({ providerId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    APIManager.mngr_fetchProductsByProvider(providerId)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
        err.data
          ? alert(err.data.msg)
          : alert(
              "Ocurrió un error al cargar los productos para la bolsa de compras."
            );
      });
  };

  const [products, setProducts] = useState();

  return (
    <>
      <Button
        variant="warning"
        size="sm"
        title="Productos"
        onClick={handleShow}
        className="shadow-sm"
      >
        Productos
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {products ? (
            products.length ? (
              <h3>aquí van los productos</h3>
            ) : (
              <em>Lista de productos vacía</em>
            )
          ) : (
            <div className="text-center py-4 my-4">
              <Spinner variant="warning" animation="grow" role="status" />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});

ProductsByProvider.propTypes = {
  providerId: PropTypes.string.isRequired,
};

export default ProductsByProvider;
