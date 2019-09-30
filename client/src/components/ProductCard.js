import React, { useState } from "react";
import { useSelector } from "react-redux";
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

  const BttnNoFavs = () => {
    return (
      <>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">
              Inicia sesión para guardar en tus favoritos.
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              disabled
              variant="outline-secondary"
              className="ml-1"
              style={{ pointerEvents: "none" }}
            >
              <i className="fas fa-heart-broken" />
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
          variant="outline-success"
          block
          onClick={handleShow}
          title="Agregar a tu carrito"
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

  const isClientLogged = useSelector(state => state.client.isLogged);

  return (
    <Card style={{ width: "12.7rem" }} className="mt-2 mb-4 mx-1 shadow-sm">
      <a className="text-light" href={"/product/" + props.product.productId}>
        <Card.Header
          className="text-center"
          height="48"
          style={{ backgroundColor: "darkgoldenrod" }}
        >
          <span>{props.product.name}</span>
        </Card.Header>
        <Card.Img
          variant="top"
          height="250"
          width="150"
          className="rounded-0"
          src={"/images/products/" + props.product.photo}
        />
      </a>
      <Card.Body
        className="d-flex justify-items-center flex-column"
        style={{ backgroundColor: "white" }}
      >
        {/* price */}
        <div className="lead text-center mb-3">
          {props.product.Discount ? (
            <>
              <p className="text-muted mb-0">
                <strong>
                  <small className="mr-1">$</small>
                  <del>{props.product.salePrice}</del>
                  <small className="ml-1">MXN</small>
                </strong>
              </p>
              <p className="text-danger mb-0">
                <small className="mr-1">$</small>
                <strong>{props.product.Discount.newPrice}</strong>
                <small className="ml-1">MXN</small>
              </p>
            </>
          ) : (
            <p className="text-dark mb-0">
              <small className="mr-1">$</small>
              <strong>{props.product.salePrice}</strong>
              <small className="ml-1">MXN</small>
            </p>
          )}
        </div>
        {/* brand */}
        <p className="mb-0">PRONAMED</p>
        {/* content */}
        <p>{props.product.content}</p>
        {/* add to cart button */}
        <div className="mt-auto pt-2 text-center">
          <div className="d-flex inline">
            {props.product.stock > 0 ? (
              <AddToCartButton product={props.product} />
            ) : (
              <BttnNoStock />
            )}
            {isClientLogged ? (
              <Button
                variant="outline-danger"
                className="ml-1"
                title="Guardar en favoritos"
              >
                <i className="fas fa-heart" />
              </Button>
            ) : (
              <BttnNoFavs />
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
