import React from "react";
import { Container, Image, Form, Col, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";
import Layout from "../../components/Layout";

const Complaints = React.memo(() => {
  const yupschema = yup.object({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de correo incorrecto")
      .required("Requerido"),
    message: yup.string().required("Requerido"),
  });

  return (
    <Layout>
      <Container className="my-4">
        <div className="text-center text-md-left">
          <Image
            className="mb-4"
            src="./images/footer/chat.png"
            width="105"
            height="105"
          />
        </div>

        <h3>Quejas y sugerencias</h3>
        <hr className="myDivider" />

        <p>
          Envíanos tus quejas o surgerencias y nosotros nos pondremos en
          contacto contigo.
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={yupschema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            API.postMessage(values)
              .then(() => {
                alert(
                  "Mensaje enviado con éxito. Nos pondremos en contacto contigo al correo proporcionado."
                );
                window.location.reload();
              })
              .catch((err) => {
                console.log(err.response);
                err.response.data.msg
                  ? alert(err.response.data.msg)
                  : alert("Ocurrió un error.");
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
                  </Form.Label>
                  <Form.Control
                    maxLength="150"
                    type="text"
                    placeholder="Ingresa tu nombre"
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
              {/* email */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Correo electrónico</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="150"
                    type="text"
                    placeholder="Ingresa tu correo"
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
              {/* message */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Mensaje</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Ingresa tu mensaje"
                    maxLength="500"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.message && !errors.message}
                    isInvalid={touched.message && !!errors.message}
                  />
                </Form.Group>
              </Form.Row>
              {/* buttons */}
              <Form.Row className="px-1">
                <Button
                  className="ml-auto"
                  variant="warning"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Enviar
                </Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
});

export default Complaints;
