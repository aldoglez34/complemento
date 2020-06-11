import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import HeadShake from "react-reveal/HeadShake";

const WelcomeJumbotron = React.memo(function WelcomeJumbotron() {
  const styles = {
    jumbotron: {
      backgroundImage: "url('images/carousel.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gray",
      backgroundBlendMode: "multiply",
    },
  };

  return (
    <Jumbotron style={styles.jumbotron} fluid>
      <Container className="py-3 my-3">
        <h1 className="text-white display-3 mb-0 d-none d-md-block">
          Tienda Naturista en Línea
        </h1>
        <h1 className="text-white d-block d-md-none">
          Tienda Naturista en Línea
        </h1>
        <p className="text-light lead">Natural, siempre la decisión correcta</p>
        <HeadShake>
          <Button
            size="lg"
            href="/store"
            className="shadow-sm p-3 mt-4"
            variant="success"
            title="Explora la tienda"
          >
            Explora la tienda
            <i className="fas fa-arrow-right ml-2" />
          </Button>
        </HeadShake>
      </Container>
    </Jumbotron>
  );
});

export default WelcomeJumbotron;
