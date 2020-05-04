import React from "react";
import ProductCard from "../cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import "./mycarousel.scss";
import Fade from "react-reveal/Fade";

const MyCarousel = React.memo(({ products }) => {
  const renderProducts = (productsPerPage) => {
    let carouselItems = [];

    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      if (i === 1) {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {products.slice(0, productsPerPage).map((p) => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      } else {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {products
                .slice((i - 1) * productsPerPage, productsPerPage * i)
                .map((p) => {
                  return <ProductCard key={p._id} product={p} />;
                })}
            </div>
          </Carousel.Item>
        );
      }
    }
    return carouselItems;
  };

  return products.length ? (
    <Fade>
      {/* small */}
      <div className="d-md-none">
        <Carousel indicators={false} interval={null}>
          {renderProducts(2)}
        </Carousel>
      </div>
      {/* big */}
      <div className="d-none d-md-block">
        <Carousel indicators={false} interval={null}>
          {renderProducts(4)}
        </Carousel>
      </div>
    </Fade>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
});

MyCarousel.propTypes = {
  products: PropTypes.array.isRequired,
};

export default MyCarousel;
