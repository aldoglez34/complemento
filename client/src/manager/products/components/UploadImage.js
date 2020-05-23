import React from "react";
import { Form, Col } from "react-bootstrap";

const UploadImage = React.memo(() => {
  return (
    <Form.Group as={Col} md={6}>
      <Form.Label>
        <strong>Foto</strong>
        <span title="Requerido" className="text-danger">
          *
        </span>
      </Form.Label>
      <Form.Control
        disabled
        type="text"
        placeholder="Ingresa la foto"
        name="photo"
        // value={values.photo}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // isValid={touched.photo && !errors.photo}
        // isInvalid={touched.photo && !!errors.photo}
      />
    </Form.Group>
  );
});

export default UploadImage;
