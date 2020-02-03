import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ProductCard from "../../components/cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";

const HomeBestSellers = React.memo(function HomeBestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  const [pagesbg, setPagesBG] = useState(0);
  const [pagessm, setPagesSM] = useState(0);

  useEffect(() => {
    API.fetchBestSellers()
      .then(res => {
        setPagesBG(Math.ceil(res.data.length / 5));
        setPagesSM(Math.ceil(res.data.length / 2));
        setBestSellers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const bigCarouselItems = bestSellers => {
    let carouselItems = [];

    for (let i = 1; i <= pagesbg; i++) {
      if (i === 1) {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {bestSellers.slice(0, 4).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      } else {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {bestSellers.slice((i - 1) * 5, 5 * i).map(p => {
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

  return bestSellers.length ? (
    <>
      <div className="d-none d-md-block">
        <Carousel interval={null}>{bigCarouselItems(bestSellers)}</Carousel>
      </div>
      <div className="d-md-none">
        <Carousel interval={null}>{smallCarouselItems(bestSellers)}</Carousel>
      </div>
    </>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
});

export default HomeBestSellers;
