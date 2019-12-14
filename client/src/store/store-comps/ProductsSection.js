import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired
};

function ProductsSection(props) {
  return props.products.length ? (
    <div className="d-flex flex-wrap justify-content-center">
      {props.products.map(product => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  ) : (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <Spinner animation="grow" role="status" variant="warning" />
    </div>
  );
}

export default ProductsSection;
