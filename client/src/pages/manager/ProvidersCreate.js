import React, { useState, useEffect } from "react";
import ManagerLayout from "./ManagerLayout";
import { Row, Col, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import API from "../../utils/API";
import * as managerActions from "../../redux-actions/manager";

function ProvidersCreate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Proveedores"));
    dispatch(managerActions.setBackBttn("/manager/products"));
  }, []);

  const providerSchema = yup.object({
    name: yup
      .string()
      .min(3)
      .max(254, "Demasiado largo")
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
          clientAbr: "",
          year: "",
          description: ""
        }}
        validationSchema={newAuditSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row></Form.Row>
              <Form.Group>
                <Form.Label>
                  Año
                  <strong className="ml-1 text-danger">*</strong>
                </Form.Label>
                <Form.Control
                  maxLength="4"
                  placeholder="Año..."
                  type="text"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger"
                  name="year"
                  component="div"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  Descripción
                  <strong className="ml-1 text-danger">*</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  maxLength="250"
                  placeholder="Descripción..."
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  className="text-danger"
                  name="description"
                  component="div"
                />
              </Form.Group>
              <Form.Group className="text-right">
                <Button
                  className="mr-2"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  className="purplebttn"
                  type="submit"
                  disabled={isSubmitting}
                >
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
