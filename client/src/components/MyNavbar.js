import React, { Component } from "react";
import fire from "../firebase/Fire";
import { Navbar, Image, Form, Badge, Dropdown, Button, Modal } from "react-bootstrap";

class MyNavbar extends Component {
  state = {
    email: "",
    password: "",
    modalShow: false,
    modalMsg: ""
  }

  getCartCounter = () => {
    let counter = localStorage.getItem("cn_counter");
    if (!counter) {
      localStorage.setItem("cn_counter", 0);
    }
    return (<span>{counter}</span>);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => alert("success"))
      .catch((error) => this.handleShowModal(error.message))
  }

  // modal stuff
  handleShowModal = msg => {
    this.setState({ modalShow: true, modalMsg: msg })
  }
  handleCloseModal = () => {
    this.setState({ modalShow: false })
  }

  render() {
    return (

      <>

        {/* navbar */}
        <Navbar bg="white" expand="md">
          {/* logo */}
          <Navbar.Brand className="mr-auto" href="/home">
            <Image src="/images/logo.png" alt="logo" fluid />
          </Navbar.Brand>
          {/* navbar toggle */}
          <Navbar.Toggle aria-controls="top-navbar" />
          <Navbar.Collapse id="top-navbar">
            {/* login dropdown and cart button */}
            <Form className="d-flex justify-content-center ml-md-auto pt-3 pt-md-0" inline>
              {/* begins dropdown */}
              <Dropdown>
                {/* toggle */}
                <Dropdown.Toggle className="mr-2" variant="primary" id="dropdown-basic">
                  Iniciar Sesión<i className="fas fa-user ml-2"></i>
                </Dropdown.Toggle>
                {/* login form */}
                <Dropdown.Menu className="bg-light">
                  <div className="px-4 py-3">
                    <Form.Group className="mb-3">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Correo Electrónico"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicChecbox">
                    </Form.Group>
                    <Button className="mt-2" variant="primary" onClick={this.handleLoginSubmit}>Entrar</Button>
                  </div>
                  {/* sign up */}
                  <Dropdown.Divider className="mt-2 mb-3" />
                  <Dropdown.Item>Olvidé mi contraseña</Dropdown.Item>
                  <Dropdown.Item href="signup">Regístrate con nosotros</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* cart button */}
              <Button href="/cart" variant="outline-primary">
                Mi Carrito<i className="fas fa-shopping-cart ml-2" />
                <Badge variant="warning">{this.getCartCounter()}</Badge>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        {/* modal for errors */}
        <Modal show={this.state.modalShow} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hubo un error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.modalMsg}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleCloseModal}>Aceptar</Button>
          </Modal.Footer>
        </Modal>

      </>

    )
  }
}

export default MyNavbar;
