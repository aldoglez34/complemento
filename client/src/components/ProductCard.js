import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

function ProductCard(props) {

  return (

    <Card style={{ width: "9.7rem" }} className="shadow-sm mt-2 mb-4 mx-2">

      {/* header */}
      <Card.Header className="text-center">
        <a href={"/product/" + props.product.productId}>{props.product.name}</a>
      </Card.Header>

      {/* if photo is null, show placeholder */}
      {props.product.photo ? (
        <Card.Img
          variant="top"
          height="250"
          className="rounded-0"
          src={"/images/products/" + props.product.photo} />
      ) : (
          <Card.Img
            variant="top"
            height="250"
            className="rounded-0"
            src={"/images/products/placeholder.jpg"} />
        )}

      {/* body */}
      <Card.Body>

        {/* price and content */}
        <Card.Text>
          <strong>{"$" + props.product.price + " MXN"}</strong>
        </Card.Text>
        <Card.Text>{props.product.content}</Card.Text>

        {/* modal button */}
        <AddToCartButton product={props.product} />

      </Card.Body>

    </Card>

  );

}

export default ProductCard;
