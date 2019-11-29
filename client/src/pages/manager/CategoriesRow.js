import React, { useState } from "react";
import { Button, Modal, Form, Col, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

CategoriesRow.propTypes = {
  category: PropTypes.object.isRequired
};

function CategoriesRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryValidation = yup.object({
    name: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .required("Requerido")
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>
          {props.category.name}
          {props.category.productCount === 0 ? (
            <Badge
              pill
              className="ml-1"
              variant="danger"
              style={{ fontFamily: "Arial" }}
            >
              Vacía
            </Badge>
          ) : null}
        </td>
        <td className="text-center">{props.category.productCount}</td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle de Categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.category._id,
              name: props.category.name,
              productCount: props.category.productCount
            }}
            validationSchema={categoryValidation}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.updateCategory(values)
                .then(res => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Categoría actualizada");
                    handleClose();
                    window.location.reload();
                  }
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
                {/* productCount */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Productos</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="productCount"
                      value={values.productCount}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    Cerrar
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Guardar
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

export default CategoriesRow;
