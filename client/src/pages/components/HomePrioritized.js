import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ProductCard from "../../components/cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";
import "./carousel.scss";

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
    const carouselItems = [];

    for (let i; i <= pages; i++) {
      if (i === 1) {
        carouselItems.push(
          <Carousel.Item>
            <div className="d-flex flex-wrap justify-content-center">
              {prioritized.slice(0, 5).map(p => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          </Carousel.Item>
        );
      } else {
        carouselItems.push(
          <Carousel.Item>
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
    <Carousel>
      {carouselItems(prioritized)}
      {/* <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-center">
          {prioritized.map(p => {
            return <ProductCard key={p._id} product={p} />;
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-center">
          {prioritized.map(p => {
            return <ProductCard key={p._id} product={p} />;
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-center">
          {prioritized.map(p => {
            return <ProductCard key={p._id} product={p} />;
          })}
        </div>
      </Carousel.Item> */}
    </Carousel>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
}

export default HomePrioritized;
