import React, { Component, useState } from "react";
import ManagerLayout from "../../components/ManagerLayout";
import { Row, Col, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

class NewProduct extends Component {
  state = {
    categories: []
  };

  getCategories = () => {
    API.loadCategories()
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  NewCategoryBttn = () => {
    const categorySchema = yup.object({
      name: yup
        .string()
        .min(4, "Demasiado corto")
        .max(254, "Demasiado largo")
        .required("Requerido")
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        {/* button */}
        <Button variant="link" onClick={handleShow} className="m-0 p-0">
          <i className="fas fa-plus-square mr-1"></i>
          Nueva categoría
        </Button>
        {/* modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva categoría</Modal.Title>
          </Modal.Header>
          {/* begins form */}
          <Formik
            initialValues={{ name: "" }}
            validationSchema={categorySchema}
            onSubmit={(values, { setSubmitting }) => {
              this.saveCategory(values);
              setSubmitting(false);
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
                <Form.Row className="p-4 mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      placeholder="Ingresa el nombre de la nueva categoría"
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
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    Guardar
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>
    );
  };

  saveCategory = values => {
    API.saveCategory(values)
      .then(res => {
        // if res.data.errors is undefined, it means there's no msg from the backend
        // go on and save the new cat and reload the window
        if (typeof res.data.errors == "undefined") {
          // reload the page so formik doesn't show error msgs on all the form controls
          this.getCategories();
          window.location.reload();
        } else {
          // it's not undefined then just show the msg coming from the backend
          alert(res.data.errors[0].message);
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    const productSchema = yup.object({
      category: yup
        .mixed()
        .notOneOf(["Elige..."], "Requerido")
        .required("Requerido"),
      name: yup
        .string()
        .min(3)
        .max(254, "Demasiado largo")
        .required("Requerido"),
      price: yup
        .number()
        .typeError("Debe ser un número")
        .moreThan(1, "Debe ser mayor a $1")
        .required("Requerido"),
      content: yup
        .string()
        .max(254, "Demasiado largo")
        .required("Requerido"),
      dose: yup.string().max(1000, "Demasiado largo"),
      description: yup.string().max(1000, "Demasiado largo")
    });

    return (
      <ManagerLayout>
        {/* title */}
        <Row className="mb-2 mt-2">
          <Col>
            <a href="/manager/panel" className="text-dark">
              <i className="fas fa-arrow-alt-circle-left mr-1"></i>
              Regresar al panel
            </a>
            <hr />
          </Col>
        </Row>
        <h3 className="mt-2">Nuevo producto</h3>
        {/* form */}
        <Row>
          <Col>
            <Formik
              initialValues={{
                category: "Elige...",
                name: "",
                price: "",
                content: "",
                dose: "",
                description: "",
                ingredients: ""
              }}
              validationSchema={productSchema}
              onSubmit={(values, { setSubmitting }) => {
                // getting the catid
                const sel = document.getElementById("categoryControl");
                const opt = sel.options[sel.selectedIndex];
                let catId = opt.getAttribute("catId");
                // push it to the values array
                values.categoryId = catId;
                setSubmitting(false);
                // handle adding the new product
                alert(JSON.stringify(values, null, 2));

                // setTimeout(() => {
                //   const sel = document.getElementById("categoryControl");
                //   console.log(sel);
                //   const opt = sel.options[sel.selectedIndex];
                //   console.log(opt);
                //   let cat = opt.getAttribute("key");
                //   console.log(cat);
                //   alert(cat);
                //   // alert(JSON.stringify(values, null, 2));
                //   // handleLoginSubmit(values);
                //   setSubmitting(false);
                // }, 400);
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
                  {/* product category */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>
                        Categoría<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        id="categoryControl"
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
                        {this.state.categories
                          ? this.state.categories.map(cat => {
                              return (
                                <option
                                  catid={cat.categoryId}
                                  key={cat.categoryId}
                                >
                                  {cat.name}
                                </option>
                              );
                            })
                          : null}
                      </Form.Control>
                      <ErrorMessage
                        className="text-danger"
                        name="category"
                        component="div"
                      />
                      <this.NewCategoryBttn />
                    </Form.Group>
                  </Form.Row>
                  {/* product name */}
                  <Form.Row>
                    <Form.Group as={Col} md={8}>
                      <Form.Label>
                        Nombre
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        placeholder="Nombre"
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
                    {/* price */}
                    <Form.Group as={Col} md={4}>
                      <Form.Label>
                        Precio<span className="text-danger">*</span>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">
                            $
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          placeholder="0.00"
                          type="text"
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.price && !errors.price}
                          isInvalid={touched.price && !!errors.price}
                        />
                      </InputGroup>
                      <ErrorMessage
                        className="text-danger"
                        name="price"
                        component="div"
                      />
                    </Form.Group>
                  </Form.Row>
                  {/* product content */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>
                        Contenido<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        placeholder="Contenido"
                        type="text"
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
                  {/* dose */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Dosis</Form.Label>
                      <Form.Control
                        placeholder="Dosis"
                        type="text"
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
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Descripción"
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
                  {/* ingredients */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Ingredientes (1x1)</Form.Label>
                      <Form.Control
                        placeholder="Ingrediente"
                        type="text"
                        name="ingredients"
                        value={values.ingredient}
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
                      <Button variant="link" className="m-0 p-0">
                        <i className="fas fa-plus-square mr-1" />
                        Nuevo ingrediente
                      </Button>
                    </Form.Group>
                  </Form.Row>
                  {/* create button */}
                  <div className="text-right">
                    <Button type="submit" disabled={isSubmitting}>
                      Crear producto
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </ManagerLayout>
    );
  }
}

export default NewProduct;
