import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const UploadImage = React.memo(({ onChange, value, onBlur }) => {
  const [file, setFile] = useState();

  // const onChange = (e) => {
  //   setFile(e.target.files);
  // };

  return (
    <Form>
      <Form.File
        id="custom-file-translate-html"
        label="Ingresa foto"
        data-browse="Buscar"
        custom
      />
    </Form>
  );
});

export default UploadImage;
