import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { Button, Modal, Row, Col, Image, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import "./addtobagbutton.scss";

const AddToBagButton = React.memo(({ product, size }) => {
  const formatNumber = num => {
    return num !== undefined
      ? "$" +
          num
            .toFixed(2)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  };

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
        variant="success"
        block
        onClick={handleShow}
        size={size}
        title={
          product.stock > 0
            ? "Agregar a canasta"
            : "Este producto no se encuentra disponible"
        }
        disabled={product.stock > 0 ? false : true}
      >
        Agregar
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
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
              {product.price.discount.hasDiscount ? (
                <Image
                  src="/images/tag.png"
                  className="addtobagbuttondiscount"
                  alt="discount"
                />
              ) : null}
            </Col>
            {/* right col */}
            <Col md={5}>
              <h2 className="text-center mt-2 mt-md-0">{product.name}</h2>
              <hr />
              <div className="mb-3">
                Estás por agregar el producto <strong>{product.name}</strong> a
                tu canasta de compras.
              </div>
              <hr />
              {/* qty picker */}
              <strong>Cantidad</strong>
              <div className="d-flex flex-row mb-4 mt-2">
                <Button
                  style={{
                    outline: "none",
                    boxShadow: "none"
                  }}
                  onClick={handleDecrementQty}
                  className="rounded-0"
                  variant="dark"
                  title="Quitar uno"
                >
                  <i className="fas fa-minus" />
                </Button>
                <FormControl
                  readOnly
                  className="text-right border border-secondary rounded-0"
                  style={{
                    fontSize: "19px",
                    outline: "none",
                    boxShadow: "none"
                  }}
                  value={qty}
                />
                <Button
                  style={{
                    outline: "none",
                    boxShadow: "none"
                  }}
                  onClick={handleIncrementQty}
                  className="rounded-0"
                  variant="dark"
                  title="Agregar uno"
                >
                  <i className="fas fa-plus" />
                </Button>
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
              {/* <hr /> */}
              <Col className="mt-3 p-0">
                <Button
                  size="lg"
                  variant="success"
                  block
                  onClick={() => updateRedux().then(() => handleClose())}
                  title="Agregar y seguir comprando"
                >
                  <i className="fas fa-arrow-left mr-2" />
                  Agregar y seguir comprando
                </Button>
                <Button
                  className="mt-2"
                  block
                  size="lg"
                  variant="danger"
                  onClick={() =>
                    updateRedux().then(() => (window.location = "/cart"))
                  }
                  title="Agregar e ir a canasta"
                >
                  Agregar e ir a canasta
                  <i className="fas fa-arrow-right ml-2" />
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
  size: PropTypes.string.isRequired
};

export default AddToBagButton;
