import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

const WelcomeJumbotron = React.memo(function WelcomeJumbotron() {
  const styles = {
    jumbotron: {
      backgroundImage: "url('images/carousel3.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gray",
      backgroundBlendMode: "multiply"
    }
  };

  return (
    <Jumbotron style={styles.jumbotron} fluid>
      <Container>
        <h1 className="text-white">Tienda naturista en línea</h1>
        <h2 className="text-light">Natural, siempre la decisión correcta</h2>
        <Button
          size="lg"
          href="/store"
          className="shadow-sm p-3 mt-4"
          variant="success"
        >
          Explora la tienda
          {/* <i className="fas fa-store-alt ml-2" /> */}
        </Button>
      </Container>
    </Jumbotron>
  );
});

export default WelcomeJumbotron;
