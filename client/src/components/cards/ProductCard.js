import React from "react";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";
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
          {props.product.price.discount.hasDiscount ? (
            <Image
              src="/images/tag.png"
              className="productCardDiscount"
              alt="discount"
            />
          ) : null}
          {/* name */}
          <div
            className="d-flex align-items-center justify-content-center my-3"
            style={{ height: "50px", maxHeight: "50px" }}
          >
            <h4 className="text-center text-dark mb-0">{props.product.name}</h4>
          </div>
        </a>
        {/* price */}
        <div className="lead text-center mb-3" style={{ fontSize: "22px" }}>
          {props.product.price.discount.hasDiscount ? (
            <>
              <del style={{ color: "gainsboro" }}>
                {"$" + props.product.price.salePrice}
              </del>
              <strong className="text-danger ml-1">
                {"$" + props.product.price.discount.newPrice}
              </strong>
            </>
          ) : (
            <strong className="text-danger">
              {"$" + props.product.price.salePrice}
            </strong>
          )}
        </div>
        {/* content and brand */}
        <div className="mb-3">
          <p className="mb-0 text-muted">{props.product.content}</p>
          {/* <p className="mb-0" style={{ textTransform: "uppercase" }}>
            {props.product.brand}
          </p> */}
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
  product: PropTypes.object.isRequired
};

export default ProductCard;
