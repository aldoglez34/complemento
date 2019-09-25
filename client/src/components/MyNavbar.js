import React from "react";
import fire from "../firebase/Fire";
import {
  Navbar,
  Image,
  Form,
  Badge,
  Dropdown,
  Button,
  Col,
  Nav
} from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import API from "../utils/API";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { loginClient, logoutClient } from "../redux-actions";

function MyNavbar() {
  const dispatch = useDispatch();

  const styles = {
    dropdownMenu: {
      width: "18.125rem"
    }
  };

  const client = useSelector(state => state.client);

  const CartCounter = () => {
    if (!localStorage.getItem("cn_counter")) {
      localStorage.setItem("cn_counter", 0);
    }
    let counter = localStorage.getItem("cn_counter");
    return (
      <Badge className="ml-1" variant="warning">
        {counter}
      </Badge>
    );
  };

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        dispatch(logoutClient());
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Correo inválido")
      .required("Requerido"),
    password: yup
      .string()
      .min(6, "Longitud incorrecta")
      .max(15, "Longitud incorrecta")
      .required("Requerido")
  });

  const LoginDropdown = () => {
    return (
      <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            fire
              .auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .then(res => {
                let uid = res.user.uid;
                API.getClientInfo(uid)
                  .then(res => {
                    let client = res.data[0];
                    dispatch(loginClient(client));
                  })
                  .catch(err => {
                    console.log(err);
                    setSubmitting(false);
                  });
              })
              .catch(error => {
                alert(error.message);
                setSubmitting(false);
              });
          }}
        >
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
                <Dropdown.Toggle className="mr-2" variant="primary">
                  Iniciar Sesión
                </Dropdown.Toggle>
                <Dropdown.Menu
                  data-display="static"
                  className="bg-light dropdown-menu-xs-left dropdown-menu-md-right"
                  style={styles.dropdownMenu}
                >
                  <Form
                    noValidate
                    onSubmit={handleSubmit}
                    className="pt-3 pl-3 pr-3 pb-1"
                  >
                    <Form.Row className="mb-2">
                      <Form.Group as={Col}>
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                          placeholder="Correo electrónico"
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.email && !errors.email}
                        />
                        <ErrorMessage
                          className="text-danger"
                          name="email"
                          component="div"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="mb-2">
                      <Form.Group as={Col}>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                          placeholder="Contraseña"
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.password && !errors.password}
                        />
                        <ErrorMessage
                          className="text-danger"
                          name="password"
                          component="div"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Entrar
                        </Button>
                      </Form.Group>
                    </Form.Row>
                  </Form>
                  <Dropdown.Divider className="my-0" />
                  <Dropdown.Item>Olvidé mi contraseña</Dropdown.Item>
                  <Dropdown.Item href="/signup">
                    Regístrate con nosotros
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Formik>
      </>
    );
  };

  const ClientDropdown = () => {
    return (
      <>
        <Dropdown>
          {/* toggle */}
          <Dropdown.Toggle className="mr-2" variant="success">
            <i className="fas fa-user mr-2" />
            {client.name + " " + client.firstSurname}
          </Dropdown.Toggle>
          {/* client menu */}
          <Dropdown.Menu className="bg-light">
            <Dropdown.Item>Mis datos</Dropdown.Item>
            <Dropdown.Item>Mis compras</Dropdown.Item>
            <Dropdown.Divider className="mt-1 mb-2" />
            <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };

  return (
    <>
      <Navbar expand="md" style={styles.navbar} className="py-3 bg-light">
        {/* logo */}
        <Navbar.Brand className="mr-auto" href="/">
          <Image src="/images/logo.png" alt="logo" fluid />
        </Navbar.Brand>
        {/* collapse */}
        <Navbar.Toggle aria-controls="top-navbar" />
        <Navbar.Collapse id="top-navbar">
          <Nav className="mr-md-auto">
            <Nav.Link href="/store" className="pb-0">
              Tienda
            </Nav.Link>
          </Nav>
          {/* login dropdown and cart button */}
          <div className="d-flex justify-content-center ml-md-auto pt-3 pt-md-0">
            {client.isLogged ? <ClientDropdown /> : <LoginDropdown />}
            {/* cart button */}
            <Button href="/cart" variant="outline-primary">
              Carrito
              <i className="fas fa-shopping-cart ml-1" />
              <CartCounter />
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
