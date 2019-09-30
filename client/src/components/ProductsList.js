import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";
import ProductCard from "./ProductCard";

ProductsList.propTypes = {
  productsArr: PropTypes.array.isRequired,
  activeP: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number.isRequired
};

function ProductsList(props) {
  let offset;
  let limit;

  if (props.activeP === 1) {
    offset = 0;
  } else {
    offset = (props.activeP - 1) * 20;
  }

  limit = offset + props.productsPerPage;

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {props.productsArr.length ? (
          props.productsArr.slice(offset, limit).map(product => {
            return <ProductCard key={product.productId} product={product} />;
          })
        ) : (
          // showProducts()
          <Spinner
            className="text-center"
            animation="border"
            role="status"
            variant="success"
          />
        )}
      </div>
    </>
  );
}

export default ProductsList;
