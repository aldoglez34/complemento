import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const UploadImage = React.memo(({ setFieldValue }) => {
  const [file, setFile] = useState();

  // const onChange = (e) => {
  //   setFile(e.target.files);
  // };

  return (
    <Form.Group as={Col} md={6}>
      <Form.Label>
        <strong>Foto</strong>
        <span title="Requerido" className="text-danger">
          *
        </span>
      </Form.Label>
      {/* <input
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
        }}
        className="form-control"
      /> */}
      {/* <Form.Control
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
        }}
      /> */}
      <Form.File
        label="Ingresa la imagen"
        data-browse="Buscar"
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
        }}
        custom
      />
      {/* <Form.Control
        maxLength="80"
        type="text"
        placeholder="Ingresa el contenido"
        name="content"
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched.content && !errors.content}
        isInvalid={touched.content && !!errors.content}
      /> */}
    </Form.Group>
  );
});

export default UploadImage;
