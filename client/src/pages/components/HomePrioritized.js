import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ProductCard from "../../components/cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";

function HomePrioritized() {
  const [prioritized, setPrioritized] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    API.fetchPrioritized()
      .then(res => {
        setPages(Math.ceil(res.data.length / 5));
        setPrioritized(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const carouselItems = prioritized => {
    let carouselItems = [];

    for (let i = 1; i <= pages; i++) {
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

  return prioritized.length ? (
    <Carousel interval={null}>{carouselItems(prioritized)}</Carousel>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
}

export default HomePrioritized;
