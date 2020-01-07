import React from "react";
import ManagerLayout from "../ManagerLayout";
import { Col, Button, Form } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

function ProvidersCreate(props) {
  const yupschema = yup.object({
    name: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    rfc: yup
      .string()
      .length(12, "Formato incorrecto")
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de correo incorrecto")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "Formato incorrecto")
      .required("Requerido"),
    fullAddress: yup
      .string()
      .min(3, "Dirección demasiado corta")
      .required("Requerido")
  });

  return (
    <ManagerLayout
      backBttn="/manager/providers"
      leftBarActive="Proveedores"
      title="Crear Proveedor"
      button={null}
    >
      <Formik
        initialValues={{
          name: "",
          rfc: "",
          email: "",
          phone: "",
          fullAddress: ""
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          API.newProvider(values)
            .then(res => {
              if (res.data.errmsg) {
                alert("ERROR => " + res.data.errmsg);
                setSubmitting(false);
              } else {
                alert("Proveedor creado");
                props.history.push("/manager/providers");
              }
            })
            .catch(err => console.log(err));
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
          <Form noValidate onSubmit={handleSubmit}>
            {/* name */}
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>
                  Nombre
                  <span title="Requerido" className="text-danger">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  maxLength="150"
                  type="text"
                  placeholder="Ingresa el nombre"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.name && !errors.name}
                  isInvalid={touched.name && !!errors.name}
                />
                <ErrorMessage
                  className="text-danger"
                  name="name"
                  component="div"
                />
              </Form.Group>
              {/* rfc */}
              <Form.Group as={Col} md={6}>
                <Form.Label>
                  RFC
                  <span title="Requerido" className="text-danger">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  maxLength="12"
                  type="text"
                  placeholder="Ingresa el RFC"
                  name="rfc"
                  value={values.rfc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.rfc && !errors.rfc}
                  isInvalid={touched.rfc && !!errors.rfc}
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
              <Form.Group as={Col} md={6}>
                <Form.Label>
                  Correo
                  <span title="Requerido" className="text-danger">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  maxLength="100"
                  type="text"
                  placeholder="Ingresa el correo"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                <ErrorMessage
                  className="text-danger"
                  name="email"
                  component="div"
                />
              </Form.Group>
              {/* phone */}
              <Form.Group as={Col} md={6}>
                <Form.Label>
                  Teléfono
                  <span title="Requerido" className="text-danger">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  maxLength="10"
                  type="text"
                  placeholder="Ingresa el teléfono"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.phone && !errors.phone}
                  isInvalid={touched.phone && !!errors.phone}
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
                <Form.Label>
                  Dirección
                  <span title="Requerido" className="text-danger">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  maxLength="200"
                  type="text"
                  placeholder="Ingresa la dirección"
                  name="fullAddress"
                  value={values.fullAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.fullAddress && !errors.fullAddress}
                  isInvalid={touched.fullAddress && !!errors.fullAddress}
                />
                <ErrorMessage
                  className="text-danger"
                  name="fullAddress"
                  component="div"
                />
              </Form.Group>
            </Form.Row>
            {/* buttons */}
            <Form.Group className="text-right">
              <Button variant="success" type="submit" disabled={isSubmitting}>
                Crear
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </ManagerLayout>
  );
}

export default ProvidersCreate;
