import React from "react";
import { Nav, Form } from "react-bootstrap";

function BrandsList() {
  return (
    <Nav className="flex-column">
      <Form>
        <Form.Check label="Pronamed" className="text-dark pb-1" />
        <Form.Check label="Pronamed" className="text-dark pb-1" />
        <Form.Check label="Pronamed" className="text-dark pb-1" />
        <Form.Check label="Pronamed" className="text-dark pb-1" />
        <Form.Check label="Pronamed" className="text-dark pb-1" />
      </Form>
    </Nav>
  );
}

export default BrandsList;
