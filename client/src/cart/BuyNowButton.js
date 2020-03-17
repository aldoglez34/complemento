import React from "react";
import { Button } from "react-bootstrap";

const BuyNowButton = React.memo(() => {
  return (
    <Button variant="danger" size="lg" block className="mt-3" title="Comprar">
      COMPRAR
    </Button>
  );
});

export default BuyNowButton;
