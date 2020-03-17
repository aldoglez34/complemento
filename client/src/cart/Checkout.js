import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

const Checkout = React.memo(() => {
  return (
    <Layout hideBag={true}>
      <Container className="my-4">
        <h3>Dirección de envío</h3>
        <hr className="myDivider" />
      </Container>
    </Layout>
  );
});

export default Checkout;
