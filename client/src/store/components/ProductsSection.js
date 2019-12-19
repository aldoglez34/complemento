import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../components/cards/ProductCard";

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired
};

function ProductsSection(props) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.products.map(product => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}

export default ProductsSection;
