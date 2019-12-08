import React, { useState } from "react";
import { Button, Modal, Form, Col, InputGroup, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

ProductsRow.propTypes = {
  product: PropTypes.object.isRequired
};

function ProductsRow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>
          {props.product.name}
          {props.product.stock === 0 ? (
            <Badge
              pill
              className="ml-1"
              variant="warning"
              style={{ fontFamily: "Arial" }}
            >
              Sin existencias
            </Badge>
          ) : null}
          {props.product.discount.hasDiscount ? (
            <Badge
              title="Este producto tiene descuento"
              pill
              className="ml-1"
              variant="warning"
              style={{ fontFamily: "Arial" }}
            >
              {props.product.discount.percentage + "%"}
            </Badge>
          ) : null}
        </td>
        <td>{props.product.category.name}</td>
        <td>{props.product.provider.name}</td>
        <td className="text-center">{"$" + props.product.purchasePrice}</td>
        <td className="text-center">
          {"$"}
          {props.product.discount.hasDiscount
            ? props.product.discount.newPrice
            : props.product.salePrice}
        </td>
        <td className="text-center">
          {"$"}
          {props.product.discount.hasDiscount
            ? props.product.discount.newPrice - props.product.purchasePrice
            : props.product.salePrice - props.product.purchasePrice}
        </td>
        <td className="text-center">{props.product.unitsSold}</td>
        <td className="text-center">{props.product.stock}</td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="mb-0">Producto</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.product._id,
              name: props.product.name,
              purchasePrice: props.product.purchasePrice,
              salePrice: props.product.salePrice,
              content: props.product.content,
              brand: props.product.brand,
              category: props.product.category.name,
              provider: props.product.provider.name,
              ingredients: props.product.ingredients.toString(),
              sufferings: props.product.sufferings.toString(),
              stock: props.product.stock,
              photo: props.product.photo,
              priority: props.product.priority,
              comments: props.product.comments,
              unitsSold: props.product.unitsSold,
              hasDiscount: props.product.discount.hasDiscount,
              percentage: props.product.discount.percentage,
              newPrice: props.product.discount.newPrice
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
              API.updateProduct(values)
                .then(res => {
                  if (res.data.errmsg) {
                    alert("ERROR => " + res.data.errmsg);
                    setSubmitting(false);
                  } else {
                    alert("Producto actualizado");
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
                {/* purchase price */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Precio de compra
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
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Precio de venta
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
                        name="utility"
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
                      disabled
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
                      disabled
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
                <Form.Row className="px-1 mt-2">
                  <Button variant="danger" disabled onClick={handleClose}>
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
}

export default ProductsRow;
