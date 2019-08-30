import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
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

          {/* store */}
          {/* <Nav.Link href="/store">
            <strong>Tienda</strong>
          </Nav.Link> */}

          {/* caret */}
          {/* <Form inline>
            <Button variant="outline-success">
              <strong>Carrito</strong>
              <i className="fas fa-shopping-cart ml-2"></i>
              <Badge variant="success" className="ml-2">0</Badge>
            </Button>
          </Form> */}

        </Nav>

        <Form inline>

          {/* login dropdown */}
          <Dropdown>
            <Dropdown.Toggle className="mr-2" variant="primary" id="dropdown-basic">
              Iniciar Sesión
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

          {/* carrito */}
          <Button variant="outline-primary">
            Carrito
            <i className="fas fa-shopping-cart ml-2"></i>
            <Badge variant="primary" className="ml-2">0</Badge>
          </Button>

        </Form>

      </Navbar.Collapse>
    </Navbar>

  );
}

export default MyNavbar;
