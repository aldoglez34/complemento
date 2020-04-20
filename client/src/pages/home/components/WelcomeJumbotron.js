import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Slide from "react-reveal/Fade";

const WelcomeJumbotron = React.memo(function WelcomeJumbotron() {
  const styles = {
    jumbotron: {
      backgroundImage: "url('images/carousel3.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gray",
      backgroundBlendMode: "multiply",
    },
  };

  return (
    <Jumbotron style={styles.jumbotron} fluid>
      <Container className="py-3 my-3">
        <h1 className="text-white">Tienda naturista en línea</h1>
        <p className="text-light lead">Natural, siempre la decisión correcta</p>
        <Slide right>
          <Button
            size="lg"
            href="/store"
            className="shadow p-3 mt-4"
            variant="success"
            title="Explora la tienda"
          >
            Explora la tienda
            <i className="fas fa-arrow-right ml-2" />
          </Button>
        </Slide>
      </Container>
    </Jumbotron>
  );
});

export default WelcomeJumbotron;
