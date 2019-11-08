import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import FavButton from "./FavButton";
import AddToBagButton from "./AddToBagButton";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

function ProductCard(props) {
  return (
    <Card
      style={{ width: "12.7rem" }}
      className="mt-2 mb-4 mx-1 shadow-sm border-0"
    >
      <a className="text-light" href={"/product/details/" + props.product._id}>
        <Card.Header
          className="text-center"
          height="48"
          style={{ backgroundColor: "#264341" }}
        >
          <span>{props.product.name}</span>
        </Card.Header>
        <Card.Img
          variant="top"
          width={190}
          height={290}
          className="rounded-0"
          // src={"/images/products/" + props.product.photo}
          src={props.product.photo}
        />
      </a>
      <Card.Body
        className="d-flex justify-items-center flex-column"
        style={{ backgroundColor: "snowwhite" }}
      >
        {/* price */}
        <div className="lead text-center mb-3">
          {props.product.discount.hasDiscount ? (
            <>
              <span className="text-muted mb-0">
                <strong>
                  <small className="mr-1">$</small>
                  <del>{props.product.salePrice}</del>
                  {/* <small className="ml-1">MXN</small> */}
                </strong>
              </span>
              <span className="text-danger mb-0 ml-2">
                <small className="mr-1">$</small>
                {props.product.discount.newPrice}
                {/* <small className="ml-1">MXN</small> */}
              </span>
            </>
          ) : (
            <span className="text-dark mb-0">
              <small className="mr-1">$</small>
              {props.product.salePrice}
              {/* <small className="ml-1">MXN</small> */}
            </span>
          )}
        </div>
        {/* brand */}
        <p className="mb-0" style={{ textTransform: "uppercase" }}>
          {props.product.brand}
        </p>
        {/* content */}
        <p>{props.product.content}</p>
        {/* add to cart button */}
        <div className="mt-auto pt-2 text-center">
          <div className="d-flex inline">
            <AddToBagButton product={props.product} />
            <FavButton product={props.product} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
