import React from "react";
import { Form, Col } from "react-bootstrap";
import { ErrorMessage } from "formik";

const UploadImage = React.memo(({ setFieldValue, onBlur, file }) => {
  return (
    <Form.Group as={Col} md={6}>
      <Form.Label>
        <strong>Foto</strong>
        <span title="Requerido" className="text-danger">
          *
        </span>
        <small className="ml-1">(.jpg, .jpeg, .gif y .png)</small>
      </Form.Label>
      <Form.File
        encType="multipart/form-data"
        accept="image/*"
        label={file ? file.name : "Ingresa la imagen"}
        data-browse="Buscar"
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
          setFieldValue(
            "photo",
            event.currentTarget.files[0]
              ? event.currentTarget.files[0].name
              : ""
          );
        }}
        onBlur={onBlur}
        custom
      />
      <ErrorMessage className="text-danger" name="file" component="div" />
    </Form.Group>
  );
});

export default UploadImage;
