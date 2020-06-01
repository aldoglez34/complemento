import React, { useState, useEffect } from "react";
import { Col, Button, Form, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import APIManager from "../../../utils/APIManager";
import ManagerLayout from "../../ManagerLayout";

const EditProvider = React.memo((props) => {
  const [provider, setProvider] = useState();

  useEffect(() => {
    APIManager.mngr_fetchOneProvider(props.routeProps.match.params.providerId)
      .then((res) => setProvider(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el producto.");
      });
  }, []);

  const yupschema = yup.object({
    name: yup.string().min(1, "Nombre demasiado corto").required("Requerido"),
    rfc: yup.string().length(12, "Formato incorrecto").required("Requerido"),
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
      .required("Requerido"),
  });

  return (
    <ManagerLayout
      leftBarActive="Proveedores"
      title="Editar Proveedor"
      backBttn="/manager/providers"
    >
      {provider ? (
        <Formik
          initialValues={{
            _id: provider._id,
            name: provider.name,
            rfc: provider.rfc,
            email: provider.email,
            phone: provider.phone,
            fullAddress: provider.fullAddress,
            productCount: provider.productCount,
          }}
          validationSchema={yupschema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            APIManager.mngr_updateProvider(values)
              .then((res) => {
                if (res.data.errmsg) {
                  alert("ERROR => " + res.data.errmsg);
                  setSubmitting(false);
                } else {
                  alert("Proveedor actualizado");
                  window.location.href = "/manager/providers";
                }
              })
              .catch((err) => {
                console.log(err.response);
                err.response.data.msg
                  ? alert(err.response.data.msg)
                  : alert("Ocurrió un error al actualizar el proveedor.");
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
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              {/* name */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Nombre</strong>
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
              </Form.Row>
              <Form.Row>
                {/* rfc */}
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>RFC</strong>
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
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Correo</strong>
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
              </Form.Row>
              <Form.Row>
                {/* phone */}
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Teléfono</strong>
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
                    <strong>Dirección</strong>
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
              {/* button */}
              <Form.Group>
                <Button
                  className="shadow-sm"
                  variant="warning"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Editar
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default EditProvider;
