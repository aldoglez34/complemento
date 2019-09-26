import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import SearchBar from "./SearchBar";
import WelcomeButton from "./WelcomeButton";

const styles = {
  jumbotron: {
    backgroundImage: "url('images/jumbotronbg.jpg')",
    backgroundSize: "cover",
    backgroundColor: "gainsboro",
    backgroundBlendMode: "multiply"
  },
  container: {
    height: "22.5rem"
    // background: "fuchsia"
  }
};

function MyJumbotron() {
  return (
    <>
      <Jumbotron fluid style={styles.jumbotron}>
        <Container
          className="d-flex justify-items-center flex-column text-center"
          style={styles.container}
        >
          <p className="display-4 text-light mb-0" style={{ opacity: 0.7 }}>Bienvenido a</p>
          <p
            className="display-3 text-white"
            style={{ fontWeight: 700, opacity: 0.9 }}
          >
            <strong>Complemento Natural</strong>
          </p>
          {/* <p className="h3 text-light" style={{ opacity: 0.7 }}>Tienda naturista en línea</p> */}
          <hr className="text-light bg-light" />
          {/* <h1 style={styles.welcomeMsg}>
            Bienvenido a{" "}
            <strong style={styles.welcomeMsg2}>Complemento Natural</strong>
          </h1>
          <hr className="text-light bg-light" />
          <h3 className="text-light">Tienda naturista en línea</h3> */}
          <div className="mb-2">
            <WelcomeButton />
          </div>
          <div className="mt-auto">
            <SearchBar />
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}

export default MyJumbotron;
