import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ProductCard from "../../components/cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";

function HomePrioritized() {
  const [prioritized, setPrioritized] = useState([]);
  const [pagesbg, setPagesBG] = useState(0);
  const [pagessm, setPagesSM] = useState(0);

  useEffect(() => {
    API.fetchPrioritized()
      .then(res => {
        setPagesBG(Math.ceil(res.data.length / 5));
        setPagesSM(Math.ceil(res.data.length / 2));
        setPrioritized(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const bigCarouselItems = prioritized => {
    let carouselItems = [];

    for (let i = 1; i <= pagesbg; i++) {
      if (i === 1) {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {prioritized.slice(0, 5).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      } else {
        carouselItems.push(
          <Carousel.Item key={i}>
            <div className="d-flex flex-wrap justify-content-center">
              {prioritized.slice((i - 1) * 5, 5 * i).map(p => {
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

  return prioritized.length ? (
    <>
      <div className="d-none d-md-block">
        <Carousel interval={null}>{bigCarouselItems(prioritized)}</Carousel>
      </div>
      <div className="d-md-none">
        <Carousel interval={null}>{smallCarouselItems(prioritized)}</Carousel>
      </div>
    </>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
}

export default HomePrioritized;
