import React from "react";
import { Dropdown, Nav, NavItem, Form, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

function TrackShipment() {
  const numberSchema = yup.object({
    number: yup.string().required("Requerido")
  });

  return (
    <>
      <Formik
        initialValues={{ number: "" }}
        validationSchema={numberSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
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
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={Nav.Link} className="text-light">
                Pedidos
                <i className="fas fa-shipping-fast ml-1" />
              </Dropdown.Toggle>
              <Dropdown.Menu
                data-display="static"
                className="bg-light"
                style={{ width: "18.125rem" }}
              >
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="pt-3 pl-3 pr-3 pb-1"
                >
                  <Form.Row className="mb-2">
                    <Form.Group as={Col}>
                      <Form.Label>Rastrear pedido</Form.Label>
                      <Form.Control
                        placeholder="Número de pedido"
                        type="text"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.number && !errors.number}
                      />
                      <ErrorMessage
                        className="text-danger"
                        name="number"
                        component="div"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Button
                        className="globalbttn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Rastrear
                      </Button>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Formik>
    </>
  );
}

export default TrackShipment;
