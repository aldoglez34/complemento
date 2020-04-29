import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/cards/ProductCard";
import Fade from "react-reveal/Fade";

const ProductsSection = React.memo(({ products }) => {
  return (
    <Fade>
      <div className="d-flex flex-wrap justify-content-center my-3">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </Fade>
  );
});

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsSection;
