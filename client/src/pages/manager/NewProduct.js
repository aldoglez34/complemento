import React, { Component, useState } from "react";
import ManagerLayout from "../../components/ManagerLayout";
import { Row, Col, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import managerAPI from "../../utils/managerAPI";

class NewProduct extends Component {
  state = {
    categories: []
  };

  getCategories = () => {
    managerAPI
      .loadCategories()
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveCategory = values => {
    managerAPI
      .saveCategory(values)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  NewCategoryBttn = () => {
    const categorySchema = yup.object({
      catName: yup.string().required()
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>
        <Button variant="link" onClick={handleShow} className="m-0 p-0">
          <i className="fas fa-plus-square mr-1"></i>
          Nueva categoría
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva categoría</Modal.Title>
          </Modal.Header>
          {/* begins form */}
          <Formik
            initialValues={{ catName: "" }}
            validationSchema={categorySchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                this.saveCategory(values);
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row className="p-4 mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      placeholder="Ingresa el nombre de la categoría"
                      type="text"
                      name="catName"
                      value={values.catName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.catName && !errors.catName}
                    />
                    <Form.Control.Feedback>Todo bien</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                {/* modal footer */}
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary">
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

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <ManagerLayout email={this.props.manager.email}>
        {/* title */}
        <Row className="mb-2">
          <Col>
            <a href="/manager/panel">
              <i className="fas fa-arrow-alt-circle-left mr-1"></i>Regresar al
              panel
            </a>
            <h3 className="mt-2">Nuevo producto</h3>
          </Col>
        </Row>
        {/* form */}
        <Row>
          <Col>
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Correo electrónico no válido";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* product category */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>
                        Categoría<strong className="text-danger">*</strong>
                      </Form.Label>
                      <Form.Control as="select" type="text" name="category">
                        <option disabled>Elige...</option>
                        {this.state.categories
                          ? this.state.categories.map(cat => {
                              return (
                                <option key={cat.categoryId}>{cat.name}</option>
                              );
                            })
                          : null}
                      </Form.Control>
                      <this.NewCategoryBttn />
                    </Form.Group>
                  </Form.Row>
                  {/* product name */}
                  <Form.Row>
                    <Form.Group as={Col} md={8}>
                      <Form.Label>
                        Nombre<strong className="text-danger">*</strong>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="name"
                      />
                      <ErrorMessage name="name" component="div" />
                    </Form.Group>
                    {/* price */}
                    <Form.Group as={Col} md={4}>
                      <Form.Label>
                        Precio<strong className="text-danger">*</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">
                            $
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="0.00"
                          name="price"
                        />
                      </InputGroup>
                      <ErrorMessage name="price" component="div" />
                    </Form.Group>
                  </Form.Row>
                  {/* product content */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Contenido</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Contenido"
                        name="content"
                      />
                      <ErrorMessage name="content" component="div" />
                    </Form.Group>
                  </Form.Row>
                  {/* dose */}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Dosis</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Dosis"
                        name="dose"
                      />
                      <ErrorMessage name="dose" component="div" />
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
                      />
                      <ErrorMessage name="description" component="div" />
                    </Form.Group>
                  </Form.Row>
                  {/* ingredients */}
                  <Form.Row>
                    <Form.Group as={Col} md>
                      <Form.Label>
                        Ingredientes (nombres científicos)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingredientes"
                        name="scientific"
                      />
                      <div>
                        <Button variant="link" className="m-0 p-0">
                          <i className="fas fa-plus-square mr-1" />
                          Nuevo ingrediente
                        </Button>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} md>
                      <Form.Label>Ingredientes (nombres comunes)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingredientes"
                        name="common"
                      />
                      <div>
                        <Button variant="link" className="m-0 p-0">
                          <i className="fas fa-plus-square mr-1" />
                          Nuevo ingrediente
                        </Button>
                      </div>
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
