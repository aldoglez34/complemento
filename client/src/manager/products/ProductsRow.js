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

  const productValidation = yup.object({
    // clientAbr: yup.string().required("Requerido"),
    // year: yup
    //   .string()
    //   .matches(/^[0-9]*$/, "Formato de año incorrecto")
    //   .length(4, "Longitud de año incorrecto")
    //   .required("Requerido"),
    // description: yup.string().required("Requerido")
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
              variant="danger"
              style={{ fontFamily: "Arial" }}
            >
              Sin existencias
            </Badge>
          ) : null}
        </td>
        <td>{props.product.category.name}</td>
        <td className="text-center">{"$" + props.product.purchasePrice}</td>
        <td className="text-center">{"$" + props.product.salePrice}</td>
        <td className="text-center">{props.product.stock}</td>
      </tr>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle de Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              _id: props.product._id,
              name: props.product.name,
              purchasePrice: props.product.purchasePrice,
              salePrice: props.product.salePrice,
              category: props.product.category.name,
              content: props.product.content,
              provider: props.product.provider.name,
              brand: props.product.brand,
              sufferings: JSON.stringify(props.product.sufferings),
              ingredients: JSON.stringify(props.product.ingredients),
              description: props.product.description,
              unitsSold: props.product.unitsSold,
              stock: props.product.stock,
              priority: props.product.priority,
              createdAt: props.product.createdAt,
              photo: props.product.photo
            }}
            validationSchema={productValidation}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              API.updateProduct(values)
                .then(data => {
                  handleClose();
                  alert("Producto actualizado");
                  window.location.reload();
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
                      maxLength="50"
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
                {/* category and content */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                      maxLength="50"
                      type="text"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="category"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control
                      maxLength="50"
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="content"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* prices */}
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Precio de compra</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          $
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        name="purchasePrice"
                        value={values.purchasePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    <ErrorMessage
                      className="text-danger"
                      name="purchasePrice"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Precio de venta</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          $
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        name="salePrice"
                        value={values.salePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    <ErrorMessage
                      className="text-danger"
                      name="salePrice"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Utilidad</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          $
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled
                        type="text"
                        value={values.purchasePrice - values.salePrice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                {/* provider and brand */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Proveedor</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="provider"
                      value={values.provider}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="provider"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                      maxLength="50"
                      type="text"
                      name="brand"
                      value={values.brand}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="brand"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* sufferings */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Padecimientos
                      <small className="ml-1">(separados por comas)</small>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="sufferings"
                      value={values.sufferings}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="sufferings"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* ingredients */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Ingredientes
                      <small className="ml-1">(separados por comas)</small>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="ingredients"
                      value={values.ingredients}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="ingredients"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* unitsSold and stock */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Unidades vendidas</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="unitsSold"
                      value={values.unitsSold}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Existencia</Form.Label>
                    <Form.Control
                      type="number"
                      name="stock"
                      value={values.stock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="stock"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* priority and createdAt */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Prioridad</Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="priority"
                      value={values.priority}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Fecha de creación</Form.Label>
                    <Form.Control
                      disabled
                      name="createdAt"
                      value={values.createdAt}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="createdAt"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* photo */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Foto</Form.Label>
                    <Form.Control
                      type="text"
                      name="photo"
                      value={values.photo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* description */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      type="text"
                      maxLength="250"
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
                </Form.Row>
                {/* buttons */}
                <Form.Group className="text-right">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="mr-2"
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Guardar cambios
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

export default ProductsRow;
