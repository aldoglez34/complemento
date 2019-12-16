import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import ProductCard from "../../components/cards/ProductCard";
import { Spinner, Carousel } from "react-bootstrap";
import "./carousel.scss";

function HomePrioritized() {
  const [prioritized, setPrioritized] = useState([]);

  useEffect(() => {
    API.fetchPrioritized()
      .then(res => setPrioritized(res.data))
      .catch(err => console.log(err));
  }, []);

  return prioritized.length ? (
    <Carousel>
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
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-center">
          {prioritized.map(p => {
            return <ProductCard key={p._id} product={p} />;
          })}
        </div>
      </Carousel.Item>
    </Carousel>
  ) : (
    <div className="text-center my-4">
      <Spinner variant="warning" animation="grow" role="status" />
    </div>
  );
}

export default HomePrioritized;
