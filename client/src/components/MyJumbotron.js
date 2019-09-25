import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";

const styles = {
  jumbotron: {
    backgroundImage: "url('images/jumbotronbg.jpg')",
    backgroundSize: "cover",
    backgroundColor: "gainsboro",
    backgroundBlendMode: "multiply"
  },
  container: {
    height: 360,
    textAlign: "center"
  },
  welcomeMsg: {
    fontSize: 45,
    opacity: 0.8,
    color: "whitesmoke"
  },
  welcomeMsg2: {
    color: "white",
    fontSize: 50
  }
};

function MyJumbotron() {
  return (
    <>
      <Jumbotron fluid style={styles.jumbotron}>
        <Container style={styles.container}>
          <h1 style={styles.welcomeMsg}>Bienvenido a</h1>
          <h1 style={styles.welcomeMsg2}>
            <strong>Complemento Natural</strong>
          </h1>
          <Button
            variant="success"
            size="lg"
            href="/store"
            className="mt-3 mb-5"
          >
            Descubre la tienda
            <i className="fas fa-store-alt ml-2" />
            <i className="fas fa-angle-double-right ml-2" />
          </Button>
          <SearchBar />
        </Container>
      </Jumbotron>
    </>
  );
}

export default MyJumbotron;
