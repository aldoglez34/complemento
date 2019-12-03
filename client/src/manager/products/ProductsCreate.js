import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import { Row, Col, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import API from "../../../utils/API";
import * as managerActions from "../../../redux-actions/manager";

function ProductCreate() {
  const [categories, setCategories] = useState();
  const [providers, setProviders] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Productos"));
    dispatch(managerActions.setBackBttn("/manager/products"));
    API.fetchCategoriesManager()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    API.fetchProvidersManager()
      .then(res => setProviders(res.data))
      .catch(err => console.log(err));
  }, []);

  const productSchema = yup.object({
    name: yup
      .string()
      .min(3, "Demasiado corto")
      .required("Requerido"),
    purchasePrice: yup
      .number()
      .typeError("Debe ser un número")
      .moreThan(1, "Debe ser mayor a $1")
      .required("Requerido"),
    salePrice: yup
      .number()
      .typeError("Debe ser un número")
      .moreThan(1, "Debe ser mayor a $1")
      .required("Requerido"),
    // .moreThan([yup.ref("purchasePrice")], "Debe ser mayor al precio de compra"),
    category: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    provider: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido")
  });

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col>
          <h3 className="mb-0 text-dark">
            <strong>Nuevo Producto</strong>
          </h3>
        </Col>
      </Row>
      {categories && providers ? (
        <Formik
          initialValues={{
            name: "",
            purchasePrice: "",
            salePrice: "",
            category: "Elige...",
            provider: "Elige..."
          }}
          validationSchema={productSchema}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
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
              {/* name and prices */}
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Nombre
                    <span className="text-danger">*</span>
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
                {/* purchasePrice */}
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Precio de compra<span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      placeholder="0.00"
                      type="text"
                      name="purchasePrice"
                      value={values.purchasePrice}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.purchasePrice && !errors.purchasePrice}
                      isInvalid={
                        touched.purchasePrice && !!errors.purchasePrice
                      }
                    />
                  </InputGroup>
                  <ErrorMessage
                    className="text-danger"
                    name="purchasePrice"
                    component="div"
                  />
                </Form.Group>
                {/* salePrice */}
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Precio de venta<span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      placeholder="0.00"
                      type="text"
                      name="salePrice"
                      value={values.salePrice}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.salePrice && !errors.salePrice}
                      isInvalid={touched.salePrice && !!errors.salePrice}
                    />
                  </InputGroup>
                  <ErrorMessage
                    className="text-danger"
                    name="salePrice"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {/* category and provider */}
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Categoría<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    type="text"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.category && !errors.category}
                    isInvalid={touched.category && !!errors.category}
                  >
                    <option disabled>Elige...</option>
                    {categories.map(cat => {
                      return (
                        <option value={cat._id} key={cat._id}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <ErrorMessage
                    className="text-danger"
                    name="category"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Proveedor<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    type="text"
                    name="provider"
                    value={values.provider}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.provider && !errors.provider}
                    isInvalid={touched.provider && !!errors.provider}
                  >
                    <option disabled>Elige...</option>
                    {providers.map(prov => {
                      return (
                        <option value={prov._id} key={prov._id}>
                          {prov.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <ErrorMessage
                    className="text-danger"
                    name="provider"
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
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" className="spinnerStyle" />
        </div>
      )}
    </ManagerLayout>
  );
}

export default ProductCreate;
