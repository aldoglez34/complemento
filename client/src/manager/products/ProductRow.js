import React, { useState } from "react";
import { Button, Modal, Form, Col, InputGroup, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import APIManager from "../../utils/APIManager";

const ProductRow = React.memo(({ product }) => {
  const [show, setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const yupschema = yup.object({
    name: yup.string().min(3, "Demasiado corto").required("Requerido"),
    latestPurchasePrice: yup
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
    brand: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
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
    stock: yup.number().positive("Debe ser positivo").required("Requerido"),
    photo: yup.string(),
    priority: yup.boolean(),
    comments: yup.string(),
  });

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        {/* name */}
        <td>
          {product.name}
          {product.price.discount.hasDiscount ? (
            <Badge
              title="Este producto tiene descuento"
              pill
              className="ml-1"
              variant="warning"
              style={{ fontFamily: "Arial" }}
            >
              {product.price.discount.percentage + "%"}
            </Badge>
          ) : null}
        </td>
        {/* category */}
        <td>{product.category}</td>
        {/* provider */}
        <td>{product.provider.name}</td>
        {/* sale price */}
        <td className="text-right">
          {product.price.discount.hasDiscount
            ? product.price.discount.newPrice
            : product.price.salePrice}
        </td>
        {/* units sold */}
        <td className="text-right">{product.unitsSold}</td>
        {/* stock */}
        <td className="text-right">{product.stock}</td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="p-4">
          <Formik
            initialValues={{
              _id: product._id,
              name: product.name,
              photo: product.photo,
              content: product.content,
              brand: product.brand,
              category: product.category,
              provider: product.provider.name,
              ingredients: product.ingredients.toString(),
              stock: product.stock,
              priority: product.priority,
              description: product.description,
              dose: product.dose,
              warning: product.warning,
              // prices
              latestPurchasePrice: product.price.latestPurchasePrice,
              salePrice: product.price.salePrice,
              discount: product.price.discount.hasDiscount,
              percentage: 0,
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              APIManager.mngr_updateProduct(values)
                .then((res) => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Producto actualizado");
                    handleClose();
                    window.location.reload();
                  }
                })
                .catch((err) => {
                  console.log(err.response);
                  alert(err.response.data.msg);
                });
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
                <h3 className="managerTitleModal">DETALLE</h3>
                <hr className="myDivider" />
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
                  {/* photo */}
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Foto
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
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
                      type="text"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.category && !errors.category}
                      isInvalid={touched.category && !!errors.category}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="category"
                      component="div"
                    />
                  </Form.Group>
                  {/* provider */}
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Proveedor
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="provider"
                      value={values.provider}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.provider && !errors.provider}
                      isInvalid={touched.provider && !!errors.provider}
                    />
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
                {/* stock */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Existencia
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="1"
                      name="stock"
                      value={values.stock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.stock && !errors.stock}
                      isInvalid={touched.initialStstockock && !!errors.stock}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="stock"
                      component="div"
                    />
                  </Form.Group>
                  {/* priority */}
                  <Form.Group as={Col} md={6}>
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
                {/* description */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="3"
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
                {/* dose */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Dosis</Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="3"
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
                {/* warning */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Advertencia</Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="3"
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
                {/* prices */}
                <h3 className="mb-2" style={{ color: "#464646" }}>
                  PRECIOS
                </h3>
                <hr className="myDivider" />
                {/* purchase price */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
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
                        name="latestPurchasePrice"
                        value={values.latestPurchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={
                          touched.latestPurchasePrice &&
                          !errors.latestPurchasePrice
                        }
                        isInvalid={
                          touched.latestPurchasePrice &&
                          !!errors.latestPurchasePrice
                        }
                      />
                    </InputGroup>
                    <ErrorMessage
                      className="text-danger"
                      name="latestPurchasePrice"
                      component="div"
                    />
                  </Form.Group>
                  {/* salePrice */}
                  <Form.Group as={Col} md={4}>
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
                  <Form.Group as={Col} md={4}>
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
                        value={values.salePrice - values.latestPurchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                {/* discount */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Descuento
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      name="discount"
                      value={values.discount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Sí</option>
                    </Form.Control>
                  </Form.Group>
                  {/* percentage */}
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Porcentaje
                      <span title="Requerido" className="text-danger">
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      name="percentage"
                      value={values.percentage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value={0} disabled>
                        Elige...
                      </option>
                      <option value={10}>10%</option>
                      <option value={15}>15%</option>
                      <option value={20}>20%</option>
                      <option value={30}>30%</option>
                      <option value={40}>40%</option>
                      <option value={50}>50%</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Row className="px-1 mt-2">
                  <Button disabled variant="danger">
                    <i className="fas fa-times-circle mr-1" />
                    Borrar
                  </Button>
                  <Button
                    className="ml-auto"
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <i className="fas fa-check-circle mr-1" />
                    Guardar
                  </Button>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
});

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductRow;
