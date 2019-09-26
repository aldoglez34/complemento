import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, OverlayTrigger, Modal, Tooltip } from "react-bootstrap";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

function ProductCard(props) {
  const BttnNoStock = () => {
    return (
      <>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">
              No disponible por el momento.
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              disabled
              variant="outline-secondary"
              style={{ pointerEvents: "none" }}
            >
              Agregar
              <i className="fas fa-shopping-cart ml-1" />
            </Button>
          </span>
        </OverlayTrigger>
      </>
    );
  };

  const AddToCartButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
      // close modal
      setShow(false);
      // refresh page so the cart counter updates
      window.location.reload();
    };
    const handleShow = () => {
      // get the counter and increase it
      let counter = localStorage.getItem("cn_counter");
      counter++;
      // save the new item
      localStorage.setItem("cn_item" + counter, props.product.productId);
      // set the increased counter back in the local storage
      localStorage.setItem("cn_counter", counter);
      // show modal
      setShow(true);
    };

    return (
      <>
        <Button
          variant="outline-primary"
          block
          onClick={handleShow}
          title="Guardar en tu carrito"
        >
          Agregar
          <i className="fas fa-shopping-cart ml-1" />
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Éxito.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            El producto <strong>{props.product.name}</strong> ha sido agregado
            exitosamente a tu carrito.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" href="/cart">
              Ir al carrito
              <i className="fas fa-shopping-cart ml-1" />
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <Card style={{ width: "12.7rem" }} className="mt-2 mb-4 mx-1 shadow-sm">
      <a className="text-primary" href={"/product/" + props.product.productId}>
        <Card.Header className="text-center">
          <span>{props.product.name}</span>
        </Card.Header>
        <Card.Img
          variant="top"
          height="250"
          className="rounded-0"
          src={"/images/products/" + props.product.photo}
        />
      </a>
      <Card.Body className="d-flex justify-items-center flex-column">
        {props.product.Discount ? (
          <div className="text-center">
            <p className="mb-0">
              <strong>
                <del>{"$" + props.product.price + " MXN"}</del>
              </strong>
            </p>
            <p>
              <strong className="text-danger">
                {"$" + props.product.Discount.newPrice + " MXN"}
              </strong>
            </p>
          </div>
        ) : (
          <div className="text-center">
            <strong>{"$" + props.product.price + " MXN"}</strong>
          </div>
        )}
        <div className="text-center pb-4">
          <em>{props.product.content}</em>
        </div>
        <div className="mt-auto pt-2 text-center">
          {props.product.stock > 0 ? (
            <div className="d-flex inline">
              <AddToCartButton product={props.product} />
              <Button
                variant="outline-danger"
                className="ml-2"
                title="Guardar en favoritos"
              >
                <i className="fas fa-heart" />
              </Button>
            </div>
          ) : (
            <div className="d-flex inline">
              <BttnNoStock />
              <Button
                variant="outline-danger"
                className="ml-2"
                title="Guardar en favoritos"
              >
                <i className="fas fa-heart" />
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
