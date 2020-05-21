import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Col, Button } from "react-bootstrap";
import API from "../../utils/API";
import Layout from "../../components/Layout";
import ScrollButton from "../../components/scrollbutton/ScrollButton";
import HelpButton from "../../components/helpbutton/HelpButton";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import * as userActions from "../../redux/actions/user";

const ClientInfo = React.memo(() => {
  const client = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const yupSchema = yup.object({
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
    street: yup.string(),
    neighborhood: yup.string(),
    municipality: yup.string(),
    city: yup.string(),
    state: yup.string(),
    zipCode: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(5, "La longitud exacta debe ser 5 dígitos"),
  });

  return client ? (
    <Layout>
      <Container className="my-4">
        <h3>Mis datos</h3>
        <hr className="myDivider" />
        <Formik
          initialValues={{
            name: client.name,
            firstSurname: client.firstSurname,
            secondSurname: client.secondSurname,
            phone: client.phone,
            email: client.email,
            // address
            street: client.address ? client.address.street : "",
            neighborhood: client.address ? client.address.neighborhood : "",
            municipality: client.address ? client.address.municipality : "",
            city: client.address ? client.address.city : "",
            state: client.address ? client.address.state : "",
            zipCode: client.address ? client.address.zipCode : "",
          }}
          validationSchema={yupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            // this is necessary since the trim() function from yup is not working
            let trimmedValues = {
              _id: client._id,
              name: values.name.trim(),
              firstSurname: values.firstSurname.trim(),
              secondSurname: values.secondSurname.trim(),
              phone: values.phone,
              street: values.street.trim(),
              neighborhood: values.neighborhood.trim(),
              municipality: values.municipality.trim(),
              city: values.city.trim(),
              state: values.state,
              zipCode: values.zipCode,
            };
            API.updateClient(trimmedValues)
              .then(() => {
                alert("Cliente editado con éxito");
                // updating user info on redux
                dispatch(userActions.updateClient(trimmedValues));
                setSubmitting(false);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err.response);
                err.response.data.msg
                  ? alert(err.response.data.msg)
                  : alert(
                      "Ocurrió un error al actualizar los datos del cliente."
                    );
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
            <>
              <Form noValidate onSubmit={handleSubmit}>
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
                  <Form.Group as={Col} md={{ span: 4 }}>
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
                {/* <hr /> */}
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>Calle con número</Form.Label>
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
                    <Form.Label>Municipio</Form.Label>
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
                    <Form.Label>Colonia</Form.Label>
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
                    <Form.Label>Ciudad</Form.Label>
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
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      name="state"
                      // value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.state && !errors.state}
                      as="select"
                      defaultValue={values.state}
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
                    <Form.Label>Código postal</Form.Label>
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
                <Button
                  className="shadow-sm"
                  type="submit"
                  variant="warning"
                  disabled={isSubmitting}
                >
                  Guardar cambios
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  ) : null;
});

export default ClientInfo;
