import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard(props) {
  return (
    <Card style={{ width: "9.7rem" }} className="shadow-sm mt-2 mb-4 mx-2">
      <Card.Header className="text-center">
        <a href={"/product/" + props.product.productId}>{props.product.name}</a>
      </Card.Header>
      {props.product.photo ? (
        <Card.Img
          variant="top"
          height="250"
          className="rounded-0"
          src={"/images/products/" + props.product.photo}
        />
      ) : (
        <Card.Img
          variant="top"
          height="250"
          className="rounded-0"
          src={"/images/products/placeholder.jpg"}
        />
      )}
      <Card.Body>
        <Card.Text>
          <strong>{"$" + props.product.price + " MXN"}</strong>
        </Card.Text>
        <Card.Text>{props.product.content}</Card.Text>
        <Button
          variant="outline-primary"
          block
          onClick={() => {
            let data = {};
            data.productName = props.product.name;
            data.productId = props.product.productId;
            props.product.handleAddToCart(data);
          }}
        >
          Agregar
          <i className="fas fa-shopping-cart ml-2" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
