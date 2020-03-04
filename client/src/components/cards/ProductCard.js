import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";
import FavButton from "../buttons/FavButton";
import AddToBagButton from "../buttons/AddToBagButton";
import "./productcards.scss";

const ProductCard = React.memo(function ProductCard(props) {
  return (
    <Card id="productcardstyle" className="mt-2 mb-4 mr-1 border-0">
      <Card.Body
        className="d-flex justify-items-center flex-column"
        style={{ backgroundColor: "snowwhite" }}
      >
        {/* image */}
        <a
          className="text-light"
          href={"/product/details/" + props.product._id}
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              className="productCardPhoto"
              src={"/images/products/" + props.product.photo}
            />
          </div>
          {props.product.price.discount.hasDiscount ? (
            <Image
              src="/images/discount.png"
              className="productCardDiscount"
              alt="discount"
            />
          ) : null}
          {/* name */}
          <div
            className="d-flex align-items-center justify-content-center mb-3"
            style={{ height: "42px", maxHeight: "42px" }}
          >
            <h5 className="text-center text-dark mb-0">{props.product.name}</h5>
          </div>
        </a>
        {/* price */}
        <div className="lead text-center mb-3">
          {props.product.price.discount.hasDiscount ? (
            <React.Fragment>
              <span className="mb-0" style={{ color: "gainsboro" }}>
                <del>{"$" + props.product.price.salePrice}</del>
              </span>
              <span className="h4 text-danger mb-0 ml-2">
                {"$" + props.product.price.discount.newPrice}
              </span>
            </React.Fragment>
          ) : (
            <span className="h4 text-danger mb-0">
              {"$" + props.product.price.salePrice}
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
              <FavButton isBlock={false} text={null} product={props.product} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
});

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
