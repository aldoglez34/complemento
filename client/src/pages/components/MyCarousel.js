import React from "react";
import { Carousel } from "react-bootstrap";

function MyCarousel() {
  const styles = {
    carouselItem1: {
      backgroundImage: "url('images/carousel1.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gainsboro",
      backgroundBlendMode: "multiply",
      height: "24rem"
    },
    carouselItem2: {
      backgroundImage: "url('images/carousel2.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gainsboro",
      backgroundBlendMode: "multiply",
      height: "24rem"
    },
    carouselItem3: {
      backgroundImage: "url('images/carousel3.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gray",
      backgroundBlendMode: "multiply",
      height: "24rem"
    }
  };

  return (
    <Carousel interval={2000}>
      <Carousel.Item style={styles.carouselItem1}>
        <Carousel.Caption>
          <h3>Promoción uno</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={styles.carouselItem2}>
        <Carousel.Caption>
          <h3>Promoción dos</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={styles.carouselItem3}>
        <Carousel.Caption>
          <h3>Promoción tres</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
