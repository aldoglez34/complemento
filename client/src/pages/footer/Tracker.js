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

        <p className="lead">Ingresa el número de tu pedido</p>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
});

export default Tracker;
