import React, { useState } from "react";
import { Modal, Form, Col, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";
import APIManager from "../../utils/APIManager";
const moment = require("moment");

const MessagesRow = React.memo(({ message }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => {
    APIManager.mngr_markSeen(message._id)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al marcar mensaje como leído.");
      });
    setShow(true);
  };

  const formatDate = (date) => {
    let convertedDate = moment(moment(date).format(moment.HTML5_FMT.DATE));
    return convertedDate.format("DD/MM/YY");
  };

  return (
    <>
      <tr onClick={handleShow} className="rowStyle">
        <td>
          {message.name}
          {message.seen ? null : (
            <Badge
              variant="danger"
              className="ml-1"
              pill
              style={{ fontFamily: "Arial" }}
            >
              Nuevo
            </Badge>
          )}
        </td>
        <td>{message.email}</td>
        <td>{formatDate(message.sentAt)}</td>
        <td>
          {message.message.length > 50
            ? message.message.slice(0, 50) + "..."
            : message.message}
        </td>
      </tr>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body className="bg-light">
          <Formik
            initialValues={{
              sentAt: message.sentAt,
              name: message.name,
              email: message.email,
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
                      value={values.sentAt}
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
                      rows="5"
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
