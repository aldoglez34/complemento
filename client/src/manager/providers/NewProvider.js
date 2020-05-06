import React, { useState } from "react";
import { Col, Button, Form, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import APIManager from "../../utils/APIManager";

const NewProvider = React.memo((props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Button
        className="pt-2 px-0 mr-2 managerTopNavNewBttn shadow-sm"
        title="Nuevo proveedor"
        onClick={handleShow}
      >
        <i className="fas fa-plus-circle" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <Formik
            initialValues={{
              name: "",
              rfc: "",
              email: "",
              phone: "",
              fullAddress: "",
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              APIManager.mngr_newProvider(values)
                .then((res) => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Proveedor creado");
                    props.history.push("/manager/providers");
                  }
                })
                .catch((err) => {
                  console.log(err.response);
                  err.response.data.msg
                    ? alert(err.response.data.msg)
                    : alert("Ocurrió un error al crear un nuevo proveedor.");
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
                <h3 className="managerTitleModal">NUEVO PROVEEDOR</h3>
                <hr className="myDivider" />
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
                {/* buttons */}
                <div className="text-center mt-2">
                  <Button
                    className="shadow-sm"
                    size="lg"
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    CREAR
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default NewProvider;
