import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "./addtobagbutton.scss";
import QtyPicker from "../QtyPicker";
import { formatNumber } from "../../utils/formatNumber";

const AddToBagButton = React.memo(({ product, size }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(
    () =>
      setPrice(
        product.price.discount.hasDiscount
          ? product.price.discount.newPrice
          : product.price.salePrice
      ),
    [product.price]
  );

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState();

  const handleDecrementQty = () => (qty === 1 ? null : setQty(qty - 1));
  const handleIncrementQty = () => setQty(qty + 1);

  const updateRedux = async () =>
    dispatch(cartActions.addItem({ _id: product._id, qty }));

  return (
    <>
      <Button
        className="shadow-sm"
        variant="success"
        block
        onClick={handleShow}
        size={size}
        title={product.stock > 0 ? "Agregar a canasta" : "No disponible"}
        disabled={product.stock > 0 ? false : true}
      >
        {product.stock > 0 ? "Agregar" : "Agotado"}
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <div className="d-flex flex-row px-2 pt-2">
            <i
              className="fas fa-times ml-auto"
              style={{ cursor: "pointer" }}
              title="Cerrar"
              onClick={handleClose}
            />
          </div>
          <Row className="px-2 px-md-3 py-2 py-md-3">
            {/* left col - image */}
            <Col md={7} className="text-center">
              <Image
                className="addtobagbuttonphoto"
                src={"/images/products/" + product.photo}
                title={product.name}
              />
            </Col>
            {/* right col */}
            <Col md={5}>
              <h1 className="text-center mt-2 mt-md-0 mb-3">{product.name}</h1>
              <div className="mb-3">
                Estás por agregar el producto <strong>{product.name}</strong> a
                tu canasta de compras.
              </div>
              {/* <hr /> */}
              {/* qty picker */}
              <strong>Cantidad</strong>
              <div className="mb-4 mt-2">
                <QtyPicker
                  handleDecrementQty={handleDecrementQty}
                  handleIncrementQty={handleIncrementQty}
                  qty={qty}
                />
              </div>
              {/* price */}
              <div className="d-flex flex-row">
                <strong>Precio</strong>
                <span className="ml-auto lead">{formatNumber(price)}</span>
              </div>
              <div className="d-flex flex-row">
                <strong>Subtotal</strong>
                <span className="ml-auto lead text-danger">
                  {formatNumber(qty * price)}
                </span>
              </div>
              {/* buttons */}
              <Col className="mt-3 p-0 text-center">
                <Button
                  variant="success"
                  block
                  onClick={() =>
                    updateRedux().then(() => {
                      setQty(1);
                      handleClose();
                    })
                  }
                  title="Seguir comprando"
                  className="py-2 shadow-sm"
                >
                  <i className="fas fa-arrow-left mr-1" />
                  Seguir comprando
                </Button>
                <Button
                  className="py-2 shadow-sm"
                  block
                  variant="danger"
                  onClick={() =>
                    updateRedux().then(() => (window.location = "/cart"))
                  }
                  title="Ir a canasta"
                >
                  Ir a canasta
                  <i className="fas fa-arrow-right ml-1" />
                </Button>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
});

AddToBagButton.propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
};

export default AddToBagButton;
