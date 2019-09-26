import React from "react";
import { Nav, Form } from "react-bootstrap";

function BrandsList() {
  return (
    <Nav className="flex-column">
      <Form>
        <Form.Check label="Marca" />
        <Form.Check label="Marca" />
        <Form.Check label="Marca" />
        <Form.Check label="Marca" />
        <Form.Check label="Marca" />
      </Form>
    </Nav>
  );
}

export default BrandsList;
