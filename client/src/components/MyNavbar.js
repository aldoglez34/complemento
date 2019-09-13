import React, { Component } from "react";
import fire from "../firebase/Fire";
import { Navbar, Image, Form, Badge, Dropdown, Button, Modal } from "react-bootstrap";
import API from "../utils/API";
import { connect } from "react-redux";
import { saveLoggedClient } from "../redux-actions";

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
    // firebase email authentication
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        // get the logged client info from the db and save it to redux
        API.getClientInfo(u.user.uid)
          .then(res => {
            // dispatch saveLoggedClient action
            this.props.saveLoggedClient(res.data[0])
          })
          .catch(err => console.log(err))
      })
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

          {(this.props.loggedClient.length) ? (
            <>
              <Navbar.Toggle aria-controls="top-navbar" />
              <Navbar.Collapse id="top-navbar">
                {/* login dropdown and cart button */}
                <Form className="d-flex justify-content-center ml-md-auto pt-3 pt-md-0" inline>
                  {/* begins dropdown */}
                  <Dropdown>
                    {/* toggle */}
                    <Dropdown.Toggle className="mr-2" variant="success">
                      {this.props.loggedClient[0].loggedClient.firstName}
                      <i className="fas fa-user ml-2"></i>
                    </Dropdown.Toggle>
                    {/* client menu */}
                    <Dropdown.Menu className="bg-light">
                      <Dropdown.Item>Mis datos</Dropdown.Item>
                      <Dropdown.Item>Mis compras</Dropdown.Item>
                      <Dropdown.Divider className="mt-1 mb-2" />
                      <Dropdown.Item>Cerrar sesión</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* cart button */}
                  <Button href="/cart" variant="outline-primary">
                    Mi Carrito<i className="fas fa-shopping-cart ml-2" />
                    <Badge variant="warning">{this.getCartCounter()}</Badge>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </>
          ) : (
              <>
                <Navbar.Toggle aria-controls="top-navbar" />
                <Navbar.Collapse id="top-navbar">
                  {/* login dropdown and cart button */}
                  <Form className="d-flex justify-content-center ml-md-auto pt-3 pt-md-0" inline>
                    {/* begins dropdown */}
                    <Dropdown>
                      {/* toggle */}
                      <Dropdown.Toggle className="mr-2" variant="primary">
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
                          <Button variant="primary" onClick={this.handleLoginSubmit}>Entrar</Button>
                        </div>
                        {/* sign up */}
                        <Dropdown.Divider className="mt-1 mb-2" />
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
              </>
            )}

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

const mapStateToProps = (state) => {
  return {
    loggedClient: state.loggedClient
  }
}

const mapDispatchToProps = {
  saveLoggedClient
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
