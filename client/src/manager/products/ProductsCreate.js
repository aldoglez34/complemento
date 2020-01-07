import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import { Col, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

function ProductCreate(props) {
  const [categories, setCategories] = useState();
  const [providers, setProviders] = useState();

  useEffect(() => {
    API.fetchCategoriesManager()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    API.fetchProvidersManager()
      .then(res => setProviders(res.data))
      .catch(err => console.log(err));
  }, []);

  const yupschema = yup.object({
    name: yup
      .string()
      .min(3, "Demasiado corto")
      .required("Requerido"),
    purchasePrice: yup
      .number()
      .positive("Debe ser positivo")
      .required("Requerido"),
    salePrice: yup
      .number()
      .positive("Debe ser positivo")
      .moreThan(yup.ref("purchasePrice"), "Debe ser mayor al precio de compra")
      .required("Requerido"),
    content: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    brand: yup
      .string()
      .min(3, "Nombre demasiado corto")
      .required("Requerido"),
    category: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    provider: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    ingredients: yup.string(),
    sufferings: yup.string(),
    initialStock: yup
      .number()
      .positive("Debe ser positivo")
      .required("Requerido"),
    photo: yup.string(),
    priority: yup.string(),
    comments: yup.string()
  });

  return (
    <ManagerLayout
      backBttn="/manager/products"
      leftBarActive="Productos"
      title="Crear Producto"
      button={null}
    >
      {categories && providers ? (
        categories.length && providers.length ? (
          <Formik
            initialValues={{
              name: "",
              purchasePrice: "",
              salePrice: "",
              content: "",
              brand: "",
              category: "Elige...",
              provider: "Elige...",
              ingredients: "",
              sufferings: "",
              initialStock: "1",
              photo: "",
              priority: false,
              comments:
                "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda."
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.newProductManager(values)
                .then(res => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Producto creado");
                    props.history.push("/manager/products");
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
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Nombre
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
                  {/* purchase price */}
                  <Form.Group as={Col} md={2}>
                    <Form.Label>
                      Compra
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
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
                  <Form.Group as={Col} md={2}>
                    <Form.Label>
                      Venta
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
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
                  {/* profit */}
                  <Form.Group as={Col} md={2}>
                    <Form.Label>Utilidad</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        placeholder="0.00"
                        name="profit"
                        value={values.salePrice - values.purchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                {/* content */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Contenido
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      maxLength="80"
                      type="text"
                      placeholder="Ingresa el contenido"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.content && !errors.content}
                      isInvalid={touched.content && !!errors.content}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="content"
                      component="div"
                    />
                  </Form.Group>
                  {/* brand */}
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Marca
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      maxLength="80"
                      type="text"
                      placeholder="Ingresa la marca"
                      name="brand"
                      value={values.brand}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.brand && !errors.brand}
                      isInvalid={touched.brand && !!errors.brand}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="brand"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* category */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Categoría
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
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
                      Proveedor
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
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
                {/* ingredients */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Ingredientes
                      <small className="ml-1">(separados por coma)</small>
                    </Form.Label>
                    <Form.Control
                      maxLength="250"
                      type="text"
                      placeholder="Ingresa los ingredientes"
                      name="ingredients"
                      value={values.ingredients}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.ingredients && !errors.ingredients}
                      isInvalid={touched.ingredients && !!errors.ingredients}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="ingredients"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* sufferings */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Padecimientos
                      <small className="ml-1">(separados por coma)</small>
                    </Form.Label>
                    <Form.Control
                      maxLength="250"
                      type="text"
                      placeholder="Ingresa los padecimientos"
                      name="sufferings"
                      value={values.sufferings}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.sufferings && !errors.sufferings}
                      isInvalid={touched.sufferings && !!errors.sufferings}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="sufferings"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* initial stock */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Existencia inicial
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="1"
                      name="initialStock"
                      value={values.initialStock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.initialStock && !errors.initialStock}
                      isInvalid={touched.initialStock && !!errors.initialStock}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="initialStock"
                      component="div"
                    />
                  </Form.Group>
                  {/* photo */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Foto</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="Ingresa la foto"
                      name="photo"
                      value={values.photo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.photo && !errors.photo}
                      isInvalid={touched.photo && !!errors.photo}
                    />
                  </Form.Group>
                  {/* priority */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Destacado
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      placeholder="0"
                      name="priority"
                      value={values.priority}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.priority && !errors.priority}
                      isInvalid={touched.priority && !!errors.priority}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Sí</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                {/* comments */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="3"
                      type="text"
                      placeholder="Ingresa los comentarios"
                      name="comments"
                      value={values.comments}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.comments && !errors.comments}
                      isInvalid={touched.comments && !!errors.comments}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="comments"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Group className="text-right">
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
        ) : (
          <em>Asegúrate que haya mínimo 1 Categoría y 1 Proveedor</em>
        )
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
}

export default ProductCreate;
