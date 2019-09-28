import React from "react";
import { Badge, Button } from "react-bootstrap";

function CartButton() {
  const CartCounter = () => {
    if (!localStorage.getItem("cn_counter")) {
      localStorage.setItem("cn_counter", 0);
    }
    let counter = localStorage.getItem("cn_counter");
    return (
      <Badge className="ml-1" variant="warning">
        {counter}
      </Badge>
    );
  };

  return (
    <Button href="/cart" variant="outline-light">
      Carrito
      <i className="fas fa-shopping-cart ml-1" />
      <CartCounter />
    </Button>
  );
}

export default CartButton;
