import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import FavButton from "../buttons/FavButton";
import AddToBagButton from "../buttons/AddToBagButton";
import "./productcards.scss";

const ProductCard = React.memo(function ProductCard(props) {
  return (
    <Card className="productCard">
      <Card.Body className="productCardBody text-center">
        {/* image and name (as link) */}
        <a
          href={"/product/details/" + props.product._id}
          style={{ textDecoration: "none" }}
          title={props.product.name}
        >
          {/* images */}
          <Card.Img
            variant="top"
            className="productCardPhoto"
            src={"/images/products/" + props.product.photo}
          />
          {/* name */}
          <div
            className="d-flex align-items-center justify-content-center my-3"
            style={{ height: "50px", maxHeight: "50px" }}
          >
            <h4 className="text-center mb-0">{props.product.name}</h4>
          </div>
        </a>
        {/* price */}
        <div className="lead text-center mb-3" style={{ fontSize: "22px" }}>
          {props.product.price.discount.hasDiscount ? (
            <h4 className="mb-0 text-muted">
              <small>
                <del>{"$" + props.product.price.salePrice}</del>
              </small>
              <strong className="text-danger ml-1">
                {"$" + props.product.price.discount.newPrice}
              </strong>
            </h4>
          ) : (
            <h4 className="mb-0 text-danger">
              {"$" + props.product.price.salePrice}
            </h4>
          )}
        </div>
        {/* content and brand */}
        <div className="mb-3">
          <p className="mb-0 text-muted">{props.product.content}</p>
        </div>
        {/* add to cart button */}
        <div className="d-flex inline">
          <AddToBagButton product={props.product} size="md" />
          <div className="ml-1">
            <FavButton isBlock={false} text={null} product={props.product} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
});

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
