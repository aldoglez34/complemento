import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout/Layout";

const styles = {
  header: {
    backgroundImage: "url('images/bg-header-home.jpg')",
    backgroundColor: "gray",
    backgroundBlendMode: "multiply"
  }
};

const Home = () => {

  return (

    <Layout>
      <header className="py-5 mb-5" style={styles.header}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 text-white mt-5 mb-2">
                Bienvenido a Complemento Natural
              </h1>
              <p className="lead mb-5 text-light">
                Somos una tienda en línea de medicina complementaria. Contamos
                con un selecto catálogo de productos naturistas, remedios
                herbolarios, suplementos alimenticios y medicina alternativa a
                precios de laboratorio, hechos a base de plantas, raíces y
                hierbas.
              </p>
            </div>
          </div>
        </div>
      </header>
      <Container>
        <Row>
          <div className="col-md-8 mb-5">
            <h2>¿Quiénes Somos?</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              deserunt neque tempore recusandae animi soluta quasi? Asperiores
              rem dolore eaque vel, porro, soluta unde debitis aliquam
              laboriosam. Repellat explicabo, maiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              optio neque consectetur consequatur magni in nisi, natus beatae
              quidem quam odit commodi ducimus totam eum, alias, adipisci
              nesciunt voluptate. Voluptatum.
            </p>
            <a className="btn btn-primary btn-lg" href="/store">
              <i class="fas fa-store-alt mr-2"></i>
              Descubre la tienda &raquo;
            </a>
          </div>
          <div className="col-md-4 mb-5">
            <h2>Contáctanos</h2>
            <hr />
            <address>
              <strong>Dirección</strong>
              <br />
              3481 Melrose Place
              <br />
              Beverly Hills, CA 90210
              <br />
            </address>
            <address>
              <i className="fas fa-phone mr-2" />
              (228) 111-2031
              <br />
              <i className="fas fa-envelope mr-2" />
              <a href="mailto:complemento.natural@gmail.com">
                complemento.natural@gmail.com
              </a>
            </address>
          </div>
        </Row>
      </Container>
    </Layout>

  );

};

export default Home;
