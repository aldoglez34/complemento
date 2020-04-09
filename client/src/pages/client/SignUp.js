import React from "react";
import { useDispatch } from "react-redux";
import * as userActions from "../../redux/actions/user";
import { Container, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import HelpButton from "../../components/helpbutton/HelpButton";
import ScrollButton from "../../components/scrollbutton/ScrollButton";
import API from "../../utils/API";
import { withFirebase } from "../../firebase";

const SignUp = ({ firebase }) => {
  const dispatch = useDispatch();

  const yupSchema = yup.object({
    clientName: yup
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
    email: yup
      .string()
      .email("Formato de email incorrecto")
      // .notOneOf(emails.emails, "Este correo ya se encuentra dado de alta")
      .required("Requerido"),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Sólo números")
      .length(10, "La longitud exacta debe ser 10 dígitos")
      .required("Requerido"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
      .required("Requerido"),
  });

  return (
    <Layout>
      {console.log("@SIGNUP", firebase)}
      <Container className="mt-4 mb-4">
        <h3>Regístrate con nosotros</h3>
        <hr className="myDivider" />
        <Formik
          initialValues={{
            clientName: "",
            firstSurname: "",
            secondSurname: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={yupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            ////////////////////////// signup //////////////////////////
            firebase
              ._createUserWithEmailAndPassword(values.email, values.password)
              .then((authUser) => {
                console.log("authUser", authUser);
                window.location.href = "/";
              })
              .catch((err) => console.log(err));
            ////////////////////////// signup //////////////////////////
            // fire
            //   .auth()
            //   .createUserWithEmailAndPassword(values.email, values.password)
            //   .then(res => {
            //     return res.user.updateProfile({
            //       displayName: "Client",
            //       phoneNumber: values.phone
            //     });
            //   })
            //   .then(() => {
            // login client to redux immediately
            // API.fetchClientByUID(res.user.uid)
            //   .then(res => {
            //     if (res.data) {
            //       dispatch(userActions.loginClient(res.data));
            //       alert(`Iniciaste sesión con éxito, ${res.data.name}`);
            //       window.location.href = "/";
            //     } else {
            //       alert("Usuario incorrecto");
            //       setSubmitting(false);
            //     }
            //   })
            //   .catch(error => {
            //     alert("Error de autenticación, revisa tus datos");
            //     console.log("Error de fetchClientByUID");
            //     console.log(error);
            //     setSubmitting(false);
            //   });
            // window.location.href = "/";
            // })
            // .catch(err => {
            //   // firebase won't let duplicate emails
            //   alert(
            //     `Lo sentimos. El correo ${values.email} ya está asignado a otra cuenta`
            //   );
            //   setSubmitting(false);
            //   console.log(err);
            // });
            ////////////////////////////////////////////////////////////
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
              <h5 className="mb-3 mt-4">Datos de usuario</h5>
              <Form.Row>
                <Form.Group as={Col} md={4}>
                  <Form.Label>
                    Nombre(s)
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="50"
                    placeholder="Nombre(s)"
                    type="text"
                    name="clientName"
                    value={values.clientNames}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.clientName && !errors.clientName}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="clientName"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>
                    Apellido paterno
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
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
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
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
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Correo electrónico
                    <strong className="ml-1 text-danger">*</strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="50"
                    placeholder="Correo electrónico"
                    type="email"
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
              <h5 className="my-3">Contraseña (5-30 caracteres)</h5>
              <Form.Row>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Contraseña
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="30"
                    placeholder="Contraseña"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.password && !errors.password}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="password"
                    component="div"
                  />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    Repetir contraseña
                    <strong className="ml-1 text-danger" title="Requerido">
                      *
                    </strong>
                  </Form.Label>
                  <Form.Control
                    maxLength="30"
                    placeholder="Repetir contraseña"
                    type="password"
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.passwordConfirm && !errors.passwordConfirm}
                  />
                  <ErrorMessage
                    className="text-danger"
                    name="passwordConfirm"
                    component="div"
                  />
                </Form.Group>
              </Form.Row>
              <Button
                className="mt-3 mb-4"
                variant="warning"
                type="submit"
                disabled={isSubmitting}
              >
                Registrarme
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
};

export default withFirebase(SignUp);