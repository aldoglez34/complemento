import React, { useState, useEffect } from "react";
import { Col, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import APIManager from "../../../utils/APIManager";
import ManagerLayout from "../../ManagerLayout";
import ChooseCategory from "../components/ChooseCategory";
import UploadImage from "../components/UploadImage";

const EditProduct = React.memo((props) => {
  const [product, setProduct] = useState();

  const [categories, setCategories] = useState();
  const [providers, setProviders] = useState();

  useEffect(() => {
    APIManager.mngr_fetchOneProduct(props.routeProps.match.params.productId)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el producto.");
      });
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

  // const PHOTO_SIZE = 1000000;
  // const SUPPORTED_FORMATS = [
  //   "image/jpg",
  //   "image/jpeg",
  //   "image/gif",
  //   "image/png",
  // ];

  const yupschema = yup.object({
    // file: yup
    //   .mixed()
    //   // .required("Requerido")
    //   .test(
    //     "fileSize",
    //     "Imagen muy pesada",
    //     (value) => value && value.size <= PHOTO_SIZE
    //   )
    //   .test(
    //     "fileFormat",
    //     "Formato no soportado",
    //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
    //   ),
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
    newCategory: yup.string().min(3, "Nombre demasiado corto"),
    // existingCategory: yup.mixed(),
    brand: yup.string().min(3, "Nombre demasiado corto").required("Requerido"),
    content: yup.string().min(3, "Demasiado corto").required("Requerido"),
    provider: yup
      .mixed()
      .notOneOf(["Elige..."], "Requerido")
      .required("Requerido"),
    ingredients: yup.string(),
    stock: yup.number().positive("Debe ser positivo").required("Requerido"),
    priority: yup.boolean().required("Requerido"),
    dose: yup.string(),
    description: yup.string(),
    warning: yup.string().required("Requerido"),
  });

  return (
    <ManagerLayout
      backBttn="/manager/products"
      leftBarActive="Productos"
      title="Editar Producto"
    >
      {product && categories && providers ? (
        <Formik
          initialValues={{
            name: product.name,
            purchasePrice: product.price.latestPurchasePrice,
            salePrice: product.price.salePrice,
            newCategory: "",
            existingCategory: product.category,
            brand: product.brand,
            content: product.content,
            provider: product.provider._id,
            ingredients: product.ingredients.toString(),
            stock: product.stock,
            priority: product.priority,
            photo: product.photo,
            file: undefined,
            dose: product.dose,
            description: product.description,
            warning: product.warning,
          }}
          validationSchema={yupschema}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
            // it's neccessary to create a FormData so multer can storage the image in the backend
            let data = new FormData();
            data.append("name", values.name);
            data.append("purchasePrice", values.purchasePrice);
            data.append("salePrice", values.salePrice);
            data.append(
              "category",
              values.newCategory.length
                ? values.newCategory
                : values.existingCategory
            );
            data.append("brand", values.brand);
            data.append("content", values.content);
            data.append("provider", values.provider);
            data.append("ingredients", values.ingredients);
            data.append("stock", values.stock);
            data.append("priority", values.priority);
            data.append("photo", values.photo);
            data.append("file", values.file);
            data.append("dose", values.dose);
            data.append("description", values.description);
            data.append("warning", values.warning);
            //
            APIManager.mngr_updateProduct(data)
              .then((res) => {
                console.log(res);
                alert(res.data.msg);
                props.history.push("/manager/products");
              })
              .catch((err) => {
                console.log(err.response);
                err.response.data.msg
                  ? alert(err.response.data.msg)
                  : alert("Ocurrió un error al registrar el producto nuevo.");
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
            setFieldValue,
          }) => (
            <Form
              encType="multipart/form-data"
              noValidate
              onSubmit={handleSubmit}
            >
              {/* name and prices */}
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
                      disabled={
                        product.price.discount.hasDiscount ? true : false
                      }
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
                      disabled={
                        product.price.discount.hasDiscount ? true : false
                      }
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
              {/* category and brand */}
              <Form.Row>
                <ChooseCategory
                  starter="Existente"
                  categories={categories}
                  value4New={values.newCategory}
                  touchedNewCat={touched.newCategory}
                  errorsNewCat={errors.newCategory}
                  value4Existing={values.existingCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
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
              {/* content and provider */}
              <Form.Row>
                <Form.Group as={Col} md={6}>
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
                <Form.Group as={Col} md={6}>
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
                    defaultValue={values.provider}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.provider && !errors.provider}
                    isInvalid={touched.provider && !!errors.provider}
                  >
                    <option disabled>Elige...</option>
                    {providers.map((prov) => {
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
              {/* initial stock, priority and photo */}
              <Form.Row>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    <strong>Existencia</strong>
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
                    isInvalid={touched.stock && !!errors.stock}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="stock"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
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
                <UploadImage
                  photo={values.photo}
                  setFieldValue={setFieldValue}
                  onBlur={handleBlur}
                  file={values.file}
                />
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
                    <span title="Requerido" className="text-danger">
                      *
                    </span>
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
              {/* button */}
              <Form.Group>
                <Button
                  className="shadow-sm"
                  variant="warning"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Editar
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default EditProduct;
