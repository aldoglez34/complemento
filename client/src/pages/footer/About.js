import React from "react";
import { Container, Image } from "react-bootstrap";
import Layout from "../../components/Layout";
import HelpButton from "../../components/helpbutton/HelpButton";

const About = React.memo(() => {
  return (
    <Layout>
      <Container className="my-4">
        <div className="text-center text-md-left">
          <Image
            className="mb-4"
            src="./images/footer/shoppingBasket.png"
            width="105"
            height="105"
          />
        </div>

        <h3>¿Quiénes somos?</h3>
        <hr className="myDivider" />

        <p>
          Somos una tienda Mexicana de productos complementarios naturales, nos
          esforzamos por ofrecerle las más innovadoras marcas y productos,
          contando con un amplio catálogo de vitaminas y suplementos
          alimenticios, remedios herbolarios, medicina alternativa y productos
          para el cuidado personal.
        </p>

        <HelpButton />
      </Container>
    </Layout>
  );
});

export default About;
