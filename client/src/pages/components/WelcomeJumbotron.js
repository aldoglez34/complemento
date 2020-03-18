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
      <Container className="py-3 my-3">
        <h1 style={{ color: "#c8f7c5" }}>Tienda naturista en línea</h1>
        <h5 style={{ color: "#90ee90" }}>
          Natural, siempre la decisión correcta
        </h5>
        <Button
          size="lg"
          href="/store"
          className="shadow-sm p-3 mt-4"
          variant="success"
        >
          Explora la tienda
          <i className="fas fa-arrow-right ml-2" />
        </Button>
      </Container>
    </Jumbotron>
  );
});

export default WelcomeJumbotron;
