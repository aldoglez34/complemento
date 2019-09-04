import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import ProductCard from "./ProductCard";

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

function ProductsList(props) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.products.length ? (
        props.products.map(product => {
          return <ProductCard key={product.productId} product={product} />;
        })
      ) : (
        <Spinner
          className="text-center"
          animation="border"
          role="status"
          variant="success"
        />
      )}
    </div>
  );
}

export default ProductsList;
