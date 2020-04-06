import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/cards/ProductCard";

const ProductsSection = React.memo(({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center my-3">
      {products.map(product => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
});

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsSection;
