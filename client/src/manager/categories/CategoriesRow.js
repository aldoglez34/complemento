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

  const yupschema = yup.object({
    name: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido")
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>
          {props.category.name}
          {props.category.productCount === 0 ? (
            <Badge className="ml-1" variant="warning">
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
            validationSchema={yupschema}
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
                  <Form.Group as={Col}>
                    <Form.Label>
                      Nombre
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      maxLength="80"
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
