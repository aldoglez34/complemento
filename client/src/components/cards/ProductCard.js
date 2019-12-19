import React from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import FavButton from "../buttons/FavButton";
import AddToBagButton from "../buttons/AddToBagButton";

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
          {props.product.discount.hasDiscount ? (
            <Badge
              className="ml-1"
              variant="warning"
              title={props.product.discount.percentage + "% de descuento"}
            >
              {props.product.discount.percentage + "%"}
            </Badge>
          ) : null}
        </Card.Header>
        <Card.Img
          variant="top"
          width={190}
          height={290}
          className="rounded-0"
          src={"/images/products/" + props.product.photo}
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
                  <del>{"$" + props.product.salePrice}</del>
                </strong>
              </span>
              <span className="h3 text-danger mb-0 ml-2">
                {"$" + props.product.discount.newPrice}
              </span>
            </>
          ) : (
            <span className="h3 text-dark mb-0">
              {"$" + props.product.salePrice}
            </span>
          )}
        </div>
        {/* content */}
        <p className="mb-0">{props.product.content}</p>
        {/* brand */}
        <p style={{ textTransform: "uppercase" }}>{props.product.brand}</p>
        {/* add to cart button */}
        <div className="mt-auto pt-2 text-center">
          <div className="d-flex inline">
            <AddToBagButton product={props.product} size="md" />
            <div className="ml-1">
              <FavButton block={false} text={null} product={props.product} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;