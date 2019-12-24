import React from "react";
import { useSelector } from "react-redux";
import { Button, Badge } from "react-bootstrap";
import "./shoppingbag.scss";

function ShoppingBag() {
  const counter = useSelector(state => state.cart.counter);

  return (
    <Button
      href="/cart"
      variant="danger"
      title="Mi bolsa de compras"
      className="d-none d-md-block"
      id="containerBag"
    >
      <i className="fas fa-shopping-bag" id="bagIcon" />
      <Badge id="bagCounter">{counter}</Badge>
    </Button>
  );
}

export default ShoppingBag;
