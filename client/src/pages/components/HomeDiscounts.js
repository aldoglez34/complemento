import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ProductCard from "../../components/cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";

const HomeDiscounts = React.memo(function HomeDiscounts() {
  const [discounts, setDiscounts] = useState([]);
  const [pagesbg, setPagesBG] = useState(0);
  const [pagessm, setPagesSM] = useState(0);

  useEffect(() => {
    API.fetchProductsWithDiscount()
      .then(res => {
        setPagesBG(Math.ceil(res.data.length / 4));
        setPagesSM(Math.ceil(res.data.length / 2));
        setDiscounts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const bigCarouselItems = discounts => {
    let carouselItems = [];

    for (let i = 1; i <= pagesbg; i++) {
      if (i === 1) {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {discounts.slice(0, 4).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      } else {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {discounts.slice((i - 1) * 4, 4 * i).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      }
    }
    return carouselItems;
  };

  const smallCarouselItems = prioritized => {
    let carouselItems = [];

    for (let i = 1; i <= pagessm; i++) {
      if (i === 1) {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {prioritized.slice(0, 2).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      } else {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {prioritized.slice((i - 1) * 2, 2 * i).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      }
    }
    return carouselItems;
  };

  return discounts.length ? (
    <>
      <div className="d-none d-md-block">
        <Carousel interval={null}>{bigCarouselItems(discounts)}</Carousel>
      </div>
      <div className="d-md-none">
        <Carousel interval={null}>{smallCarouselItems(discounts)}</Carousel>
      </div>
    </>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
});

export default HomeDiscounts;
