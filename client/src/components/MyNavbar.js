import React, { useState, useEffect } from "react";
import fire from "../firebase/Fire";
import { Navbar, Image, Form, Badge, Dropdown, Button, Modal, Col } from "react-bootstrap";
import { Formik } from "formik";
import API from "../utils/API";
import { useSelector, useDispatch } from "react-redux";
import { saveLoggedClient } from "../redux-actions";

function MyNavbar() {

  const styles = {
    dropdownMenu: {
      width: 380
    }
  }

  const loggedClient = useSelector(state => state.loggedClient);
  const dispatch = useDispatch();

  const CartCounter = () => {
    if (!localStorage.getItem("cn_counter")) {
      localStorage.setItem("cn_counter", 0);
    }
    let counter = localStorage.getItem("cn_counter");
    return (
      <Badge className="ml-1" variant="warning">{counter}</Badge>
    );
  }

  const MyModal = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
      <>
        <Button variant="primary" onClick={handleShow}>Modal</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hubo un error</Modal.Title>
          </Modal.Header>
          <Modal.Body>Error</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Aceptar</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  const ClientDropdown = () => {
    return (
      <>
        <Dropdown>
          {/* toggle */}
          <Dropdown.Toggle className="mr-2" variant="success">
            {loggedClient.firstName}
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
      </>
    )
  }

  const LoginDropdown = () => {
    return (
      <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Correo inválido";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
              <>
                <Dropdown>
                  {/* toggle */}
                  <Dropdown.Toggle className="mr-2" variant="primary">
                    Iniciar Sesión<i className="fas fa-user ml-2"></i>
                  </Dropdown.Toggle>
                  {/* dropdown */}
                  <Dropdown.Menu alignRight className="bg-light" style={styles.dropdownMenu}>
                    {/* form */}
                    <Form
                      // noValidate
                      // validated={validated}
                      // onSubmit={handleSubmit}
                      className="p-4">
                      {/* email */}
                      <Form.Row className="mb-2">
                        <Form.Group as={Col} controlId="validationFormik01">
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control
                            placeholder="Correo electrónico"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            isValid={touched.email && !errors.email} />
                          <Form.Control.Feedback>Correcto</Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                      {/* password */}
                      <Form.Row className="mb-3">
                        <Form.Group as={Col} controlId="validationFormik02">
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            isValid={touched.password && !errors.password} />
                        </Form.Group>
                      </Form.Row>
                      {/* submit form bttn */}
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Button variant="primary" type="submit" disabled={isSubmitting}>Entrar</Button>
                        </Form.Group>
                      </Form.Row>
                    </Form>
                    {/* extra */}
                    <Dropdown.Divider />
                    <Dropdown.Item>Olvidé mi contraseña</Dropdown.Item>
                    <Dropdown.Item href="signup">Regístrate con nosotros</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
        </Formik>
      </>
    )
  }

  return (
    <>
      <Navbar bg="white" expand="md">
        {/* logo */}
        <Navbar.Brand className="mr-auto" href="/home">
          <Image src="/images/logo.png" alt="logo" fluid />
        </Navbar.Brand>
        {/* collapse */}
        <Navbar.Toggle aria-controls="top-navbar" />
        <Navbar.Collapse id="top-navbar">
          {/* login dropdown and cart button */}
          <div className="d-flex justify-content-center ml-md-auto pt-3 pt-md-0">
            {/* ternary operator */}
            {(loggedClient.length) ? (<ClientDropdown />) : (<LoginDropdown />)}
            {/* cart button */}
            <Button href="/cart" variant="outline-primary">
              Mi Carrito<i className="fas fa-shopping-cart ml-2" /><CartCounter />
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      {/* modal */}
      <MyModal />
    </>
  )

}

export default MyNavbar;
