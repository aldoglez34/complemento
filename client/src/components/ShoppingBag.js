import React from "react";
import { Button, Badge } from "react-bootstrap";
import "./shoppingbag.scss";

function ShoppingBag() {
  if (!localStorage.getItem("cn_counter")) {
    localStorage.setItem("cn_counter", 0);
  }
  let counter = localStorage.getItem("cn_counter");

  return (
    <>
      <Button
        href="/cart"
        variant="transparent"
        title="Mis compras"
        className="d-none d-md-block p-1 ml-2"
        id="bagBttn"
      >
        <i className="fas fa-shopping-bag" id="shoppingBag" />
        <Badge id="bagBadge">
          <span>{counter}</span>
        </Badge>
      </Button>
    </>
  );
}

export default ShoppingBag;
