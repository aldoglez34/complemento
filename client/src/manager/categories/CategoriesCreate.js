import React from "react";
import ManagerLayout from "../ManagerLayout";
import { Col, Button, Form } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

function CategoriesCreate(props) {
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
    <ManagerLayout
      backBttn="/manager/categories"
      leftBarActive="Categorías"
      title="Crear Categoría"
      button={null}
    >
      <Formik
        initialValues={{
          name: ""
        }}
        validationSchema={yupschema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          API.newCategory(values)
            .then(res => {
              if (res.data.errmsg) {
                alert("ERROR => " + res.data.errmsg);
                setSubmitting(false);
              } else {
                alert("Categoría creada");
                props.history.push("/manager/categories");
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
                  placeholder="Ingresa el nombre"
                  type="text"
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
            {/* buttons */}
            <Form.Group className="text-right">
              <Button variant="success" type="submit" disabled={isSubmitting}>
                Crear
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </ManagerLayout>
  );
}

export default CategoriesCreate;
