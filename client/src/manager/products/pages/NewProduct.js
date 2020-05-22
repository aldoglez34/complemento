import React, { useState, useEffect } from "react";
import { Col, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import APIManager from "../../../utils/APIManager";
import ManagerLayout from "../../ManagerLayout";
import ChooseCategory from "../components/ChooseCategory";

const NewProduct = React.memo(() => {
  const [categories, setCategories] = useState();
  const [providers, setProviders] = useState();

  useEffect(() => {
    APIManager.mngr_fetchCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar las categorías.");
      });
    APIManager.mngr_fetchProviders()
      .then((res) => setProviders(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los proveedores.");
      });
  }, []);

  const yupschema = yup.object({
    name: yup.string().min(3, "Demasiado corto").required("Requerido"),
    purchasePrice: yup
      .number()
      .positive("Debe ser positivo")
      .required("Requerido"),
    salePrice: yup
      .number()
      .positive("Debe ser positivo")
      .moreThan(yup.ref("purchasePrice"), "Debe ser mayor al precio de compra")
      .required("Requerido"),
    content: yup.string().min(3, "Demasiado corto").required("Requerido"),
    brand: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
    category: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    provider: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    ingredients: yup.string().required("Requerido"),
    initialStock: yup
      .number()
      .positive("Debe ser positivo")
      .required("Requerido"),
    photo: yup.string().required("Requerido"),
    priority: yup.string(),
    description: yup.string(),
    dose: yup.string(),
    warning: yup.string().required("Requerido"),
  });

  return (
    <ManagerLayout
      backBttn="/manager/products"
      leftBarActive="Productos"
      title="Nuevo producto"
    >
      {categories && providers ? (
        providers.length ? (
          <Formik
            initialValues={{
              name: "",
              photo: "",
              content: "",
              brand: "",
              categoryType: "Existente",
              category: "",
              provider: "Elige...",
              ingredients: "",
              stock: "1",
              priority: false,
              description: "",
              dose: "",
              warning:
                "Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo usa y de quien lo recomienda.",
              purchasePrice: "",
              salePrice: "",
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
              // APIManager.mngr_newProduct(values)
              //   .then((res) => {
              //     if (res.data.errmsg) {
              //       alert("ERROR => " + res.data.errmsg);
              //       setSubmitting(false);
              //     } else {
              //       alert("Producto creado");
              //       props.history.push("/manager/products");
              //     }
              //   })
              //   .catch((err) => {
              //     console.log(err.response);
              //     err.response.data.msg
              //       ? alert(err.response.data.msg)
              //       : alert("Ocurrió un error al registrar el producto nuevo.");
              //   });
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
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      <strong>Nombre</strong>
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
                      <strong>Compra</strong>
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
                      <strong>Venta</strong>
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
                    <Form.Label>
                      <strong>Utilidad</strong>
                    </Form.Label>
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
                {/* category */}
                <Form.Row>
                  <ChooseCategory categories={categories} />
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      <strong>Marca</strong>
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
                {/* content */}
                <Form.Row>
                  <Form.Group as={Col} md={12}>
                    <Form.Label>
                      <strong>Contenido</strong>
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
                </Form.Row>
                {/* provider */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Proveedor</strong>
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      name="provider"
                      // value={values.provider}
                      value="Elige..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.provider && !errors.provider}
                      isInvalid={touched.provider && !!errors.provider}
                    >
                      <option disabled>Elige...</option>
                      {providers.map((prov) => {
                        return (
                          <option value={prov.name} key={prov._id}>
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
                      <strong>Ingredientes</strong>
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
                      <strong>Padecimientos</strong>
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
                      <strong>Existencia inicial</strong>
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
                    <Form.Label>
                      <strong>Foto</strong>
                    </Form.Label>
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
                      <strong>Destacado</strong>
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
                {/* dose */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Dosis</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="2"
                      type="text"
                      placeholder="Ingresa la dosis"
                      name="dose"
                      value={values.dose}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.dose && !errors.dose}
                      isInvalid={touched.dose && !!errors.dose}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="dose"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* description */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Descripción</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="2"
                      type="text"
                      placeholder="Ingresa la descripción"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.description && !errors.description}
                      isInvalid={touched.description && !!errors.description}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="description"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* warning */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Advertencia</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="2"
                      type="text"
                      placeholder="Ingresa la advertencia"
                      name="warning"
                      value={values.warning}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.warning && !errors.warning}
                      isInvalid={touched.warning && !!errors.warning}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="warning"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Group>
                  <Button
                    className="shadow-sm"
                    variant="warning"
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
          <em>Asegúrate que haya mínimo 1 proveedor</em>
        )
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default NewProduct;
