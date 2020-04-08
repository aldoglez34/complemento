import React, { useState } from "react";
import {
  Dropdown,
  Form,
  Col,
  Button,
  Nav,
  NavItem,
  Modal,
} from "react-bootstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { withFirebase } from "../../firebase";

const LoginDropdown = ({ firebase }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginSchema = yup.object({
    email: yup.string().email("Formato de correo").required("Requerido"),
    password: yup.string().min(6, "Longitud incorrecta").required("Requerido"),
    rememberme: yup.boolean(),
  });

  const content = (type) => {
    return (
      <>
        {/* title */}
        {type === "modal" ? (
          <div className="d-flex flex-row px-3 py-2 mb-2">
            <div className="d-flex flex-column">
              <h6>
                <strong>SESIÓN</strong>
              </h6>
              <hr className="myDivider mb-0" />
            </div>
            <div className="ml-auto">
              <i className="fas fa-times" onClick={handleClose} />
            </div>
          </div>
        ) : type === "dropdown" ? (
          <div className="px-3 py-2 mb-2">
            <h6>
              <strong>SESIÓN</strong>
            </h6>
            <hr className="myDivider mb-0" />
          </div>
        ) : null}
        {/* the rest */}
        <Formik
          initialValues={{ email: "", password: "", rememberme: false }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            //////// login ////////
            firebase
              ._signInWithEmailAndPassword(values.email, values.password)
              .catch((err) => console.log(err));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="px-3" noValidate onSubmit={handleSubmit}>
              <Form.Row className="mb-2">
                <Form.Group as={Col}>
                  <Form.Label>
                    Correo electrónico
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
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
              <Form.Row className="mb-0">
                <Form.Group as={Col}>
                  <Form.Label>
                    Contraseña
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="15"
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
              <Form.Row className="mb-2">
                <Form.Group as={Col}>
                  <Form.Check
                    type="checkbox"
                    name="rememberme"
                    onChange={handleChange}
                    label="Recuérdame"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Button
                    variant="warning"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          )}
        </Formik>
        <hr />
        <Dropdown.Item className="navbarDropdownItemStyle px-3" href="/signup">
          ¿Olvidaste tu contraseña?
        </Dropdown.Item>
        <Dropdown.Item className="navbarDropdownItemStyle px-3" href="/signup">
          Regístrate con nosotros
        </Dropdown.Item>
      </>
    );
  };

  return (
    <>
      {/* small screens */}
      <div className="d-block d-md-none">
        <Button
          variant="transparent"
          className="navbarDropdownStyle ml-0 p-0"
          onClick={handleShow}
          style={{ outline: "none", boxShadow: "none" }}
        >
          <i className="fas fa-user mr-1" />
          Sesión
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-0 py-2">{content("modal")}</Modal.Body>
        </Modal>
      </div>
      {/* medium screens */}
      <div className="d-none d-md-block">
        <Dropdown as={NavItem}>
          <Dropdown.Toggle
            as={Nav.Link}
            className="navbarDropdownStyle p-2 pt-3"
            title="Sesión"
          >
            <i className="fas fa-user mr-1" />
            Sesión
          </Dropdown.Toggle>

          <Dropdown.Menu
            alignRight
            id="loginDropdownMenu"
            data-display="static"
          >
            {content("dropdown")}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default withFirebase(LoginDropdown);
