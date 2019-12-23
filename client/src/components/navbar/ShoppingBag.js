import React from "react";
import { useSelector } from "react-redux";
// import { Button, Badge } from "react-bootstrap";
import "./shoppingbag.scss";

function ShoppingBag() {
  const counter = useSelector(state => state.cart.counter);

  return (
    <div
      // href="/cart"
      // variant="danger"
      // title="Mi bolsa de compras"
      // className="d-none d-md-block"
      id="containerBag"
    >
      <i className="fas fa-shopping-bag" id="bagIcon" />
      <span id="bagCounter">{counter}</span>
      {/* <Badge id="bagBadge">
        <span>{counter}</span>
      </Badge> */}
      {/* <Button
      href="/cart"
      variant="danger"
      title="Mi bolsa de compras"
      className="d-none d-md-block"
      id="bagBttn"
    >
      <i className="fas fa-shopping-bag" id="shoppingBag" />
      <span id="bagBadge">{counter}</span>
      {/* <Badge id="bagBadge">
        <span>{counter}</span>
      </Badge> */}
    </Button> */}
    </div>
  );
}

export default ShoppingBag;
