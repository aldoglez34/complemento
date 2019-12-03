import React, { useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
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
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    rfc: yup
      .string()
      .length(12, "Formato incorrecto")
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de email incorrecto")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Formato incorrecto")
      .length(10, "Formato incorrecto"),
    fullAddress: yup.string()
  });

  return (
    <ManagerLayout title="Nuevo Proveedor" button={null}>
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
                alert("Proveedor creado con éxito");
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
                <Form.Group as={Col} md={6}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    placeholder="Ingresa el nombre"
                    maxLength="100"
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
                {/* rfc */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>RFC</Form.Label>
                  <Form.Control
                    placeholder="Ingresa el RFC"
                    maxLength="12"
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
                <Form.Group as={Col} md={6}>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    placeholder="Ingresa el correo"
                    maxLength="100"
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
                {/* phone */}
                <Form.Group as={Col} md={6}>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    placeholder="Ingresa el teléfono"
                    maxLength="10"
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
                    placeholder="Ingresa la dirección"
                    maxLength="250"
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
              {/* buttons */}
              <Form.Group className="text-right">
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  Crear
                </Button>
              </Form.Group>
            </Form>
          </>
        )}
      </Formik>
    </ManagerLayout>
  );
}

export default ProvidersCreate;
