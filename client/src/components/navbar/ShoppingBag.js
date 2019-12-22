import React from "react";
import { useSelector } from "react-redux";
import { Button, Badge } from "react-bootstrap";
import "./shoppingbag.scss";

function ShoppingBag() {
  const counter = useSelector(state => state.cart.counter);

  return (
    <Button
      href="/cart"
      variant="transparent"
      title="Mi bolsa de compras"
      className="d-none d-md-block p-1 ml-2"
      id="bagBttn"
    >
      <i className="fas fa-shopping-bag" id="shoppingBag" />
      <Badge id="bagBadge">
        <span>{counter}</span>
      </Badge>
    </Button>
  );
}

export default ShoppingBag;
