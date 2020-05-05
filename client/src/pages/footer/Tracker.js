import React from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";

const Tracker = React.memo(() => {
  return (
    <Layout>
      <Container className="my-4">
        <div className="text-center text-md-left">
          <Image
            className="mb-4"
            src="./images/footer/tracking.png"
            width="105"
            height="105"
          />
        </div>

        <h3>Rastreador de pedidos</h3>
        <hr className="myDivider" />

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Ingresa el código de tu pedido</Form.Label>
            <Form.Control
              maxLength="24"
              type="text"
              placeholder="Ingresa código"
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Buscar
          </Button>
        </Form>
      </Container>
    </Layout>
  );
});

export default Tracker;
