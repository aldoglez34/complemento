import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function getCartCounter() {
  let counter = localStorage.getItem("cn_counter");
  if (!counter) {
    localStorage.setItem("cn_counter", 0);
  }
  return (<span>{counter}</span>);
}

function MyNavbar() {

  return (

    <Navbar bg="white" expand="md">
      {/* logo */}
      <Navbar.Brand className="mr-auto" href="/home">
        <Image src="/images/logo.png" alt="logo" fluid />
      </Navbar.Brand>
      {/* navbar toggle */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* login dropdown and cart button */}
        <Form className="ml-auto" inline>
          {/* begins dropdown */}
          <Dropdown>
            {/* toggle */}
            <Dropdown.Toggle className="mr-2" variant="primary" id="dropdown-basic">
              Iniciar Sesión<i className="fas fa-user ml-2"></i>
            </Dropdown.Toggle>
            {/* login form */}
            <Dropdown.Menu className="bg-light">
              <div className="px-4 py-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Correo Electrónico" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicChecbox">
                </Form.Group>
                <Button variant="primary" type="submit">Entrar</Button>
              </div>
              {/* sign up */}
              <Dropdown.Divider className="mt-2 mb-3" />
              <Dropdown.Item>Olvidé mi contraseña</Dropdown.Item>
              <Dropdown.Item>Regístrate con nosotros</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* cart button */}
          <Button href="/cart" variant="outline-primary">
            Mi Carrito<i className="fas fa-shopping-cart ml-2" />
            <Badge variant="warning">{getCartCounter()}</Badge>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default MyNavbar;
