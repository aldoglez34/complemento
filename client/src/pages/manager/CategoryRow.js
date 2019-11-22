import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

CategoryRow.propTypes = {
  category: PropTypes.object.isRequired
};

function CategoryRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryValidation = yup.object({
    name: yup.string().required("Requerido")
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>{props.category.name}</td>
        <td>0</td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle de la categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.category._id,
              name: props.category.name
            }}
            validationSchema={categoryValidation}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.updateCategory(values)
                .then(data => {
                  handleClose();
                  alert("Categoría actualizada");
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
                    Guardar cambios
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

export default CategoryRow;
