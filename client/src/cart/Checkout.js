import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as clientActions from "../redux/actions/client";
import * as cartActions from "../redux/actions/cart";
import { Container, Col, Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import API from "../utils/API";

const Checkout = React.memo(() => {
  const dispatch = useDispatch();

  const client = useSelector(state => state.client);
  const cart = useSelector(state => state.cart);

  const yupSchema = yup.object({
    email: yup
      .string()
      .email("Formato inválido")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Formato inválido")
      .length(10, "La longitud exacta debe ser 10 dígitos")
      .required("Requerido"),
    street: yup.string().required("Requerido"),
    municipality: yup.string().required("Requerido"),
    neighborhood: yup.string().required("Requerido"),
    city: yup.string().required("Requerido"),
    state: yup.string().required("Requerido"),
    zipCode: yup
      .string()
      .matches(/^[0-9]*$/, "Formato inválido")
      .length(5, "Formato inválido")
      .required("Requerido")
  });

  const addressData = () => {
    if (client.isLogged && client.address) {
      return {
        email: client.email,
        phone: client.phone,
        street: client.address.street,
        municipality: client.address.municipality,
        neighborhood: client.address.neighborhood,
        city: client.address.city,
        state: client.address.state,
        zipCode: client.address.zipCode,
        saveAddress: true
      };
    } else if (client.isLogged && !client.address) {
      return {
        email: client.email,
        phone: client.phone,
        street: "",
        municipality: "",
        neighborhood: "",
        city: "",
        state: "",
        zipCode: "",
        saveAddress: true
      };
    } else if (!client.isLogged) {
      return {
        email: "",
        phone: "",
        street: "",
        municipality: "",
        neighborhood: "",
        city: "",
        state: "",
        zipCode: "",
        saveAddress: false
      };
    }
  };

  return (
    <Layout hideBag={true} hideUser={client.isLogged ? false : true}>
      <Container className="my-4">
        <Formik
          initialValues={addressData()}
          validationSchema={yupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            //
            if (values.saveAddress) {
              // if save address is checked
              // update redux before updating db
              dispatch(clientActions.addAddress(values));
              API.saveClientData({ data: values, clientId: client._id })
                .then(() => {
                  API.makeSale({
                    items: cart.items,
                    clientId: client._id,
                    address: values,
                    shipment: 70
                  })
                    .then(res => {
                      alert(res.data.msg);
                      dispatch(cartActions.clear());
                      window.location.href = "/";
                    })
                    .catch(err => {
                      console.log(err.response);
                      alert(err.response.data.msg);
                    });
                })
                .catch(err => {
                  console.log(err.response);
                  alert(err.response.data.msg);
                });
            } else if (!values.saveAddress) {
              // if save address is NOT checked
              API.makeSale({
                items: cart.items,
                clientId: client._id,
                address: values,
                shipment: 70
              })
                .then(res => {
                  alert(res.data.msg);
                  dispatch(cartActions.clear());
                  window.location.href = "/";
                })
                .catch(err => {
                  console.log(err.response);
                  alert(err.response.data.msg);
                });
            }
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
              <h3>Información</h3>
              <hr className="myDivider" />
              <h5 className="mt-3">Datos de contacto</h5>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Correo
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Correo"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="email"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Teléfono
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="10"
                    placeholder="Teléfono"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.phone && !errors.phone}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="phone"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              <h5 className="mt-2">Dirección de envío</h5>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Calle con número
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Calle con número"
                    type="text"
                    name="street"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.street && !errors.street}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="street"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Municipio
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Municipio"
                    type="text"
                    name="municipality"
                    value={values.municipality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.municipality && !errors.municipality}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="municipality"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Colonia
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Colonia"
                    type="text"
                    name="neighborhood"
                    value={values.neighborhood}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.neighborhood && !errors.neighborhood}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="neighborhood"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Ciudad
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="100"
                    placeholder="Ciudad"
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.city && !errors.city}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="city"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Estado
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    name="state"
                    // value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.state && !errors.state}
                    as="select"
                    defaultValue={
                      client.address ? client.address.state : "DEFAULT"
                    }
                  >
                    <option value="DEFAULT" disabled>
                      Elige...
                    </option>
                    <option>Aguascalientes</option>
                    <option>Baja California</option>
                    <option>Baja California Sur</option>
                    <option>Campeche</option>
                    <option>Chiapas</option>
                    <option>Chihuahua</option>
                    <option>Ciudad de México</option>
                    <option>Coahuila</option>
                    <option>Colima</option>
                    <option>Durango</option>
                    <option>Estado de México</option>
                    <option>Guanajuato</option>
                    <option>Guerrero</option>
                    <option>Hidalgo</option>
                    <option>Jalisco</option>
                    <option>Michoacán</option>
                    <option>Morelos</option>
                    <option>Nayarit</option>
                    <option>Nuevo León</option>
                    <option>Oaxaca</option>
                    <option>Puebla</option>
                    <option>Querétaro</option>
                    <option>Quintana Roo</option>
                    <option>San Luis Potosí</option>
                    <option>Sinaloa</option>
                    <option>Sonora</option>
                    <option>Tabasco</option>
                    <option>Tamaulipas</option>
                    <option>Tlaxcala</option>
                    <option>Veracruz</option>
                    <option>Yucatán</option>
                    <option>Zacatecas</option>
                  </Form.Control>
                  <ErrorMessage
                    className="text-danger"
                    name="state"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>
                    Código postal
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="5"
                    placeholder="Código postal"
                    type="text"
                    name="zipCode"
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.zipCode && !errors.zipCode}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="zipCode"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              {client.isLogged ? (
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Guardar datos en mi cuenta"
                    name="saveAddress"
                    value={values.saveAddress}
                    onChange={handleChange}
                    checked={values.saveAddress}
                  />
                </Form.Group>
              ) : null}
              <h3>Forma de pago</h3>
              <hr className="myDivider" />
              <p>Aquí van los datos de la tarjeta</p>
              <Button
                className="my-3"
                size="lg"
                variant="danger"
                type="submit"
                disabled={isSubmitting}
              >
                PAGAR
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
});

export default Checkout;
