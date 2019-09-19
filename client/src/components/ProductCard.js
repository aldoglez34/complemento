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
              Producto no disponible por el momento.
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              disabled
              variant="outline-danger"
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
        <Button variant="outline-primary" block onClick={handleShow}>
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
    <Card style={{ width: "9.7rem" }} className="shadow-sm mt-2 mb-4 mx-1">
      {/* header */}
      <Card.Header className="text-center">
        <a href={"/product/" + props.product.productId}>{props.product.name}</a>
      </Card.Header>

      {/* show photo */}
      <Card.Img
        variant="top"
        height="250"
        className="rounded-0"
        src={"/images/products/" + props.product.photo}
      />

      {/* body */}
      <Card.Body>
        {/* price */}
        <Card.Text className="d-flex flex-column">
          {props.product.Discount ? (
            <>
              <strong>
                <del>{"$" + props.product.price + " MXN"}</del>
              </strong>
              <strong className="text-danger">
                {"$" + props.product.Discount.newPrice + " MXN"}
              </strong>
            </>
          ) : (
            <strong>{"$" + props.product.price + " MXN"}</strong>
          )}
        </Card.Text>
        {/* content */}
        <Card.Text>{props.product.content}</Card.Text>

        {/* modal add to cart button */}
        {props.product.stock > 0 ? (
          <AddToCartButton product={props.product} />
        ) : (
          <BttnNoStock />
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
