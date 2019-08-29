import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function MyNavbar() {
  return (

    <Navbar bg="light" expand="md">

      {/* logo */}
      <Navbar.Brand href="/home">
        <Image src="/images/logo.png" alt="logo" fluid />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        {/* menu */}
        <Nav className="mr-auto">
          <Nav.Link href="/store">
            <strong>Tienda</strong>
          </Nav.Link>
          <Nav.Link href="/home">
            <i className="fas fa-shopping-cart mr-2" />
            <strong>Carrito</strong>
            <span className="badge badge-secondary ml-2" id="cart_counter">
              0
            </span>
          </Nav.Link>
        </Nav>

        <Form inline>
          {/* login dropdown */}
          <Dropdown>
            <Dropdown.Toggle
              className="text-primary px-0"
              variant="transparent"
              id="dropdown-basic">
              <strong>Iniciar Sesión</strong>
            </Dropdown.Toggle>
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
                  <Form.Check type="checkbox" label="Recuérdame" />
                </Form.Group>
                <Button variant="primary" type="submit">Entrar</Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default MyNavbar;
