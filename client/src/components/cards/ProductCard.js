import React from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import FavButton from "../buttons/FavButton";
import AddToBagButton from "../buttons/AddToBagButton";
import "./productcards.scss";

const ProductCard = React.memo(function ProductCard(props) {
  return (
    <Card id="productcardstyle" className="mt-2 mb-4 mr-3 shadow-sm border-0">
      <a className="text-light" href={"/product/details/" + props.product._id}>
        <Card.Header
          className="text-center"
          // className="d-flex justify-content-center align-items-center"
          id="cardheader"
        >
          <span>{props.product.name}</span>
          {props.product.price.discount.hasDiscount ? (
            <Badge
              className="ml-1"
              variant="warning"
              title={props.product.price.discount.percentage + "% de descuento"}
            >
              {props.product.price.discount.percentage + "%"}
            </Badge>
          ) : null}
        </Card.Header>
        <Card.Img
          variant="top"
          width={190}
          height={290}
          className="rounded-0"
          src="/images/products/test.jpg"
        />
      </a>
      <Card.Body
        className="d-flex justify-items-center flex-column"
        style={{ backgroundColor: "snowwhite" }}
      >
        {/* price */}
        <div className="lead text-center mb-3">
          {props.product.price.discount.hasDiscount ? (
            <>
              <span className="text-muted mb-0">
                <del>{"$" + props.product.price.salePrice}</del>
              </span>
              <span className="h4 text-danger mb-0 ml-2">
                {"$" + props.product.price.discount.newPrice}
              </span>
            </>
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
