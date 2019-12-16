import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function WelcomeJumbotron() {
  const styles = {
    jumbotron: {
      backgroundImage: "url('images/carousel1.jpg')",
      backgroundSize: "cover",
      backgroundColor: "gainsboro",
      backgroundBlendMode: "multiply"
    },
    container: { height: "11rem" }
  };

  return (
    <Jumbotron style={styles.jumbotron} fluid>
      <Container style={styles.container} className="text-center">
        <h1 className="text-light mt-2">Tienda naturista en línea</h1>
        <Button
          size="lg"
          href="/store"
          className="shadow-sm p-3 mt-4"
          variant="success"
        >
          Explora la tienda
          <i className="fas fa-store-alt ml-2" />
          <i className="fas fa-angle-double-right ml-2" />
        </Button>
      </Container>
    </Jumbotron>
  );
}

export default WelcomeJumbotron;
