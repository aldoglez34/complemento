import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import API from "../../utils/API";
import * as yup from "yup";

function NewCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categorySchema = yup.object({
    name: yup.string().required("Requerido")
  });

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Crear
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: ""
            }}
            validationSchema={categorySchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
              API.newCategory(values)
                .then(data => {
                  alert("Categoría creada");
                  handleClose();
                  window.location.reload();
                })
                .catch(err => console.log(err));
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
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
                {/* buttons */}
                <Form.Group className="text-right">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="mr-2"
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Crear
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewCategory;
