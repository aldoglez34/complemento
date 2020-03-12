import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { Button, Modal, Row, Col, Image, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import "./addtobagbutton.scss";

const AddToBagButton = React.memo(({ product, size }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    // close modal
    setShow(false);
    // save the position of the window in the localstorage
    localStorage.setItem("last-ypos", window.pageYOffset);
    // refresh the window
    window.location.reload();
  };

  const handleShow = () => {
    dispatch(cartActions.addItem({ _id: product._id }));
    setShow(true);
  };

  useEffect(() => {
    // scroll after refreshing
    let ypos = localStorage.getItem("last-ypos");
    if (ypos) {
      window.scrollTo(0, ypos);
      localStorage.removeItem("last-ypos");
    }
  }, []);

  const [qty, setQty] = useState(1);

  const handleDecrementQty = () => (qty === 1 ? null : setQty(qty - 1));
  const handleIncrementQty = () =>
    qty === product.stock ? null : setQty(qty + 1);

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
            <i className="fas fa-times ml-auto" onClick={handleClose} />
          </div>
          <Row className="px-2 py-2">
            <Col md={6} className="text-center">
              <Image
                className="addtobagbuttonphoto"
                src={"/images/products/" + product.photo}
              />
              {product.price.discount.hasDiscount ? (
                <Image
                  src="/images/tag.png"
                  className="addtobagbuttondiscount"
                  alt="discount"
                />
              ) : null}
            </Col>
            <Col md={6}>
              <h1 className="mt-1">{product.name}</h1>
              <div className="mb-3">
                El producto <strong>{product.name}</strong> ha sido agregado
                exitosamente a tu canasta de compras.
              </div>
              Elige la cantidad:
              {/* qty picker */}
              <div className="d-flex flex-row mb-4">
                <Button
                  style={{
                    outline: "none",
                    boxShadow: "none"
                  }}
                  onClick={handleDecrementQty}
                  className="rounded-0"
                  variant="dark"
                >
                  <i className="fas fa-minus" />
                </Button>
                <FormControl
                  readOnly
                  className="text-right boder border-secondary rounded-0"
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
                >
                  <i className="fas fa-plus" />
                </Button>
              </div>
              {/* price */}
              <h1 className="mb-3 text-center">
                {product.price.discount.hasDiscount ? (
                  <>
                    <del className="" style={{ color: "gainsboro" }}>
                      {"$" + product.price.salePrice}
                    </del>
                    <strong className="text-danger ml-2">
                      {"$" + product.price.discount.newPrice}
                    </strong>
                  </>
                ) : (
                  <strong className="text-danger">
                    {"$" + product.price.salePrice}
                  </strong>
                )}
              </h1>
              {/* buttons */}
              <Col className="p-0">
                <Button size="lg" block variant="outline-success" onClick={handleClose}>
                  <i className="fas fa-arrow-left mr-1" />
                  Seguir comprando
                </Button>
                <Button size="lg" block variant="outline-danger" href="/cart">
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
  size: PropTypes.string.isRequired
};

export default AddToBagButton;
