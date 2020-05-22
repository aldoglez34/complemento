import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const ChooseCategory = React.memo(({ categories }) => {
  const [type, setType] = useState("Existente");

  const handleChange = (event) => setType(event.target.value);

  return (
    <>
      <Form.Group as={Col} md={2}>
        <Form.Label>
          <strong>Categoría</strong>
          <span title="Requerido" className="text-danger">
            *
          </span>
        </Form.Label>
        <Form.Control as="select" onChange={handleChange}>
          <option value="Existente">Existente</option>
          <option value="Nueva">Nueva</option>
        </Form.Control>
      </Form.Group>
      {type === "Existente" ? (
        <Form.Group as={Col} md={4}>
          <Form.Label className="text-white">C</Form.Label>
          <Form.Control
            as="select"
            type="text"
            name="category"
            defaultValue="Elige..."
            // value={values.category}
            // onChange={handleChange}
            // onBlur={handleBlur}
          >
            <option disabled>Elige...</option>
            {categories.map((cat) => {
              return (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              );
            })}
          </Form.Control>
          {/* <ErrorMessage
            className="text-danger"
            name="category"
            component="div"
          /> */}
        </Form.Group>
      ) : (
        <Form.Group as={Col} md={4}>
          <Form.Label className="text-white">C</Form.Label>
          <Form.Control
            maxLength="80"
            type="text"
            placeholder="Ingresa la categoría"
            name="category"
            // value={values.category}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // isValid={touched.category && !errors.category}
            // isInvalid={touched.category && !!errors.category}
          />
          {/* <ErrorMessage
            className="text-danger"
            name="category"
            component="div"
          /> */}
        </Form.Group>
      )}
    </>
  );
});

ChooseCategory.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ChooseCategory;
