import React, { useState } from "react";
import { Modal, Form, Col, Badge, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";
import APIManager from "../../utils/APIManager";
import moment from "moment";
import "moment/locale/es";

const MessagesRow = React.memo(({ message }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => {
    APIManager.mngr_markSeen(message._id)
      .then((res) => console.log("marked seen."))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al marcar mensaje como leído.");
      });
    setShow(true);
  };

  const formatDate = (date, format) => {
    let convertedDate = moment(moment(date).format(moment.HTML5_FMT.DATE));
    return convertedDate.format(format);
  };

  return (
    <>
      <tr className="rowStyle">
        <td>
          {message.name}
          {message.seen ? null : (
            <Badge variant="danger" className="ml-1">
              Nuevo
            </Badge>
          )}
        </td>
        <td>{message.email}</td>
        <td>{moment(message.sentAt).format("L")}</td>
        <td>{message.subject}</td>
        <td>
          <Button
            variant="warning"
            size="sm"
            className="shadow-sm"
            onClick={handleShow}
            title="Ver"
          >
            <i className="fas fa-envelope" />
          </Button>
        </td>
      </tr>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <Formik
            initialValues={{
              name: message.name,
              email: message.email,
              subject: message.subject,
              sentAt: message.sentAt,
              message: message.message,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h3 className="managerTitleModal">MENSAJE</h3>
                <hr className="myDivider" />
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Cliente</strong>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* date */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Fecha</strong>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="sentAt"
                      value={moment(values.sentAt).format("LLLL")}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* email */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Correo</strong>
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* subject */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Asunto</strong>
                    </Form.Label>
                    <Form.Control
                      disabled
                      as="textarea"
                      rows="2"
                      type="text"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
                {/* message */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Mensaje</strong>
                    </Form.Label>
                    <Form.Control
                      disabled
                      as="textarea"
                      rows="6"
                      type="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
});

MessagesRow.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessagesRow;
