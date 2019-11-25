import React, { useEffect } from "react";
import ManagerLayout from "./ManagerLayout";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import API from "../../utils/API";
import * as managerActions from "../../redux-actions/manager";

function CategoriesCreate(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Categorías"));
    dispatch(managerActions.setBackBttn("/manager/categories"));
  }, []);

  const categorySchema = yup.object({
    name: yup
      .string()
      .min(3)
      .required("Requerido")
  });

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col>
          <h2 className="mb-0 text-dark">
            <strong>Crear categoría</strong>
          </h2>
        </Col>
      </Row>
      <Formik
        initialValues={{
          name: "",
          rfc: "",
          email: "",
          phone: "",
          fullAddress: ""
        }}
        validationSchema={categorySchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          API.newCategory(values)
            .then(data => {
              alert("Categoría creada");
              window.location.reload();
            })
            .catch(err => console.log(err));
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
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

export default CategoriesCreate;
