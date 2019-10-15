import React, { useState, useEffect } from "react";
import { Container, Form, Col, Button, Row, Alert } from "react-bootstrap";
import API from "../utils/API";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import ScrollButton from "../components/ScrollButton";
import HelpButton from "../components/HelpButton";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import * as clientActions from "../redux-actions/client";
import { useDispatch } from "react-redux";

function ClientInfo(props) {
  const [client, setClient] = useState({ client: null });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setVariant] = useState();
  const [alertMsg, setMsg] = useState();
  const dispatch = useDispatch();

  function fetchClientInfo() {
    API.fetchClientInfo(props.routeProps.match.params.clientId)
      .then(res => setClient(res.data[0]))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    setClient(fetchClientInfo());
  }, []);

  const breadcrumbRoutes = () => {
    return [
      { name: "Inicio", to: "/" },
      {
        name: client.email,
        to: "/client/info/" + client.clientId
      },
      { name: "Mis datos", to: "active" }
    ];
  };

  const hidePass = pass => {
    if (pass !== undefined) {
      let newPass = "";
      for (let i = 0; i <= pass.length; i++) {
        newPass = newPass.concat("*");
      }
      return newPass;
    } else {
      return null;
    }
  };

  const changeInfoSchema = yup.object({
    name: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    firstSurname: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    secondSurname: yup
      .string()
      .min(2, "Debe ser más largo que 2 letras")
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "La longitud exacta debe ser 10 dígitos")
      .required("Requerido"),
    street: yup.string().required("Requerido"),
    neighborhood: yup.string().required("Requerido"),
    municipality: yup.string().required("Requerido"),
    city: yup.string().required("Requerido"),
    state: yup.string().required("Requerido"),
    zipCode: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(5, "La longitud exacta debe ser 5 dígitos")
      .required("Requerido")
  });

  return client ? (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes()} />
      <Container className="mt-4">
        <Alert
          show={showAlert}
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <p>{alertMsg}</p>
        </Alert>
        <h2>Mis datos</h2>
        <hr />
        <Row>
          <Col>
            <h5>Correo</h5>
            <div className="d-flex flex-row">
              <p>{client.email}</p>
              <a className="ml-1" href="/">
                cambiar
              </a>
            </div>
            <h5>Contraseña</h5>
            <div className="d-flex flex-row">
              <p>{hidePass(client.password)}</p>
              <a className="ml-1" href="/">
                cambiar
              </a>
            </div>
          </Col>
        </Row>
        <Formik
          initialValues={{
            name: client.name,
            firstSurname: client.firstSurname,
            secondSurname: client.secondSurname,
            phone: client.phone,
            street: client.street,
            neighborhood: client.neighborhood,
            municipality: client.municipality,
            city: client.city,
            state: client.state,
            zipCode: client.zipCode
          }}
          validationSchema={changeInfoSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            // this is necessary since the trim() function from yup is not working
            let trimmedValues = {};
            trimmedValues.clientId = props.routeProps.match.params.clientId;
            trimmedValues.name = values.name.trim();
            trimmedValues.firstSurname = values.firstSurname.trim();
            trimmedValues.secondSurname = values.secondSurname.trim();
            trimmedValues.phone = values.phone;
            trimmedValues.street = values.street.trim();
            trimmedValues.neighborhood = values.neighborhood.trim();
            trimmedValues.municipality = values.municipality.trim();
            trimmedValues.city = values.city.trim();
            trimmedValues.state = values.state;
            trimmedValues.zipCode = values.zipCode;
            API.updateClient(trimmedValues)
              .then(res => {
                // if the client is updated in the database,
                // save it to redux and show the alert
                dispatch(clientActions.updateClient(trimmedValues));
                setVariant("success");
                setShowAlert(true);
                setMsg(
                  "La información ha sido actualizada de manera satisfactoria"
                );
                setSubmitting(false);
              })
              .catch(err => {
                // if not then just show the alert
                setVariant("sanger");
                setShowAlert(true);
                setMsg(err);
                setSubmitting(false);
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
            isSubmitting
          }) => (
            <>
              <Form noValidate onSubmit={handleSubmit}>
                <h5 className="my-3">Datos de usuario</h5>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Nombre(s)<strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
                      placeholder="Nombre(s)"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="name"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Apellido paterno
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
                      placeholder="Apellido paterno"
                      type="text"
                      name="firstSurname"
                      value={values.firstSurname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.firstSurname && !errors.firstSurname}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="firstSurname"
                      component="div"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={4}>
                    <Form.Label>
                      Apellido materno
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="50"
                      placeholder="Apellido materno"
                      type="text"
                      name="secondSurname"
                      value={values.secondSurname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.secondSurname && !errors.secondSurname}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="secondSurname"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Teléfono celular
                      <strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      maxLength="10"
                      placeholder="Teléfono celular"
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
                <h5 className="my-3">Datos de entrega</h5>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>
                      Calle con número
                      <strong className="ml-1 text-danger">*</strong>
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
                      Municipio<strong className="ml-1 text-danger">*</strong>
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
                      Colonia<strong className="ml-1 text-danger">*</strong>
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
                      Ciudad<strong className="ml-1 text-danger">*</strong>
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
                      Estado<strong className="ml-1 text-danger">*</strong>
                    </Form.Label>
                    <Form.Control
                      name="state"
                      // value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.state && !errors.state}
                      as="select"
                      defaultValue={client.state}
                    >
                      <option value="DEFAULT" disabled>
                        Elige...
                      </option>
                      <option value="Aguascalientes">Aguascalientes</option>
                      <option value="Baja California">Baja California</option>
                      <option value="Baja California Sur">
                        Baja California Sur
                      </option>
                      <option value="Campeche">Campeche</option>
                      <option value="Chiapas">Chiapas</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="Ciudad de México">Ciudad de México</option>
                      <option value="Coahuila">Coahuila</option>
                      <option value="Colima">Colima</option>
                      <option value="Durango">Durango</option>
                      <option value="Estado de México">Estado de México</option>
                      <option value="Guanajuato">Guanajuato</option>
                      <option value="Guerrero">Guerrero</option>
                      <option value="Hidalgo">Hidalgo</option>
                      <option value="Jalisco">Jalisco</option>
                      <option value="Michoacán">Michoacán</option>
                      <option value="Morelos">Morelos</option>
                      <option value="Nayarit">Nayarit</option>
                      <option value="Nuevo León">Nuevo León</option>
                      <option value="Oaxaca">Oaxaca</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Querétaro">Querétaro</option>
                      <option value="Quintana Roo">Quintana Roo</option>
                      <option value="San Luis Potosí">San Luis Potosí</option>
                      <option value="Sinaloa">Sinaloa</option>
                      <option value="Sonora">Sonora</option>
                      <option value="Tabasco">Tabasco</option>
                      <option value="Tamaulipas">Tamaulipas</option>
                      <option value="Tlaxcala">Tlaxcala</option>
                      <option value="Veracruz">Veracruz</option>
                      <option value="Yucatán">Yucatán</option>
                      <option value="Zacatecas">Zacatecas</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>
                      Código postal
                      <strong className="ml-1 text-danger">*</strong>
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
                <Form.Row>
                  <Form.Group>
                    <Button
                      variant="success"
                      type="submit"
                      className="my-3"
                      disabled={isSubmitting}
                    >
                      Guardar cambios
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </>
          )}
        </Formik>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  ) : null;
}

export default ClientInfo;
