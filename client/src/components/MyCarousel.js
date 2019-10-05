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
    <Carousel>
      <Carousel.Item style={styles.carouselItem1}>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={styles.carouselItem2}>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={styles.carouselItem3}>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
