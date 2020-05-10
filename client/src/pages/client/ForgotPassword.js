import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";

const ForgotPassword = React.memo(() => {
  return (
    <Layout>
      <Container className="mt-4 mb-4">
        <h3>¿Olvidaste tu contraseña?</h3>
        <hr className="myDivider" />
      </Container>
    </Layout>
  );
});

export default ForgotPassword;
