import React, { useEffect } from "react";
import ManagerLayout from "./ManagerLayout";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import API from "../../utils/API";
import * as managerActions from "../../redux-actions/manager";

function ProvidersCreate(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Proveedores"));
    dispatch(managerActions.setBackBttn("/manager/providers"));
  }, []);

  const providerSchema = yup.object({
    name: yup
      .string()
      .min(3)
      .required("Requerido")
  });

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col>
          <h2 className="mb-0 text-dark">
            <strong>Crear proveedor</strong>
          </h2>
        </Col>
      </Row>
      <Formik
        initialValues={{
          name: "",
          rfc: "",
          email: "",
          phone: "",
          fullAddress: ""
        }}
        validationSchema={providerSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          API.newProvider(values)
            .then(res => {
              if (res.data.errmsg) alert(res.data.errmsg);
              else {
                alert("Cliente creado con éxito");
                props.history.push("/manager/providers");
              }
            })
            .catch(err => console.log(err));
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
            <Form noValidate onSubmit={handleSubmit}>
              {/* name */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="name"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* rfc */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>RFC</Form.Label>
                  <Form.Control
                    type="text"
                    name="rfc"
                    value={values.rfc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="rfc"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* email */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="email"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* phone */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="phone"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* fullAddress */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullAddress"
                    value={values.fullAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="fullAddress"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* create button */}
              <Button
                // className="purplebttn"
                variant="success"
                type="submit"
                disabled={isSubmitting}
              >
                Crear
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </ManagerLayout>
  );
}

export default ProvidersCreate;
