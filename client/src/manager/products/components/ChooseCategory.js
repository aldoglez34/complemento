import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

const ChooseCategory = React.memo(
  ({
    starter,
    categories,
    value4New,
    touchedNewCat,
    errorsNewCat,
    value4Existing,
    onChange,
    onBlur,
  }) => {
    const [type, setType] = useState(starter);

    const handleChange = (event) => setType(event.target.value);

    const NewCat = () => {
      return (
        <Form.Group as={Col} md={4}>
          <Form.Label className="text-white">C</Form.Label>
          <Form.Control
            maxLength="80"
            type="text"
            placeholder="Ingresa la categoría"
            name="newCategory"
            value={value4New}
            onChange={onChange}
            onBlur={onBlur}
            isValid={touchedNewCat && !errorsNewCat}
            isInvalid={touchedNewCat && !!errorsNewCat}
          />
          <ErrorMessage
            className="text-danger"
            name="newCategory"
            component="div"
          />
        </Form.Group>
      );
    };

    const ExistingCat = () => {
      return (
        <Form.Group as={Col} md={4}>
          <Form.Label className="text-white">C</Form.Label>
          <Form.Control
            as="select"
            type="text"
            name="existingCategory"
            value={value4Existing}
            onChange={onChange}
            onBlur={onBlur}
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
          <ErrorMessage
            className="text-danger"
            name="existingCategory"
            component="div"
          />
        </Form.Group>
      );
    };

    return (
      <>
        <Form.Group as={Col} md={2}>
          <Form.Label>
            <strong>Categoría</strong>
            <span title="Requerido" className="text-danger">
              *
            </span>
          </Form.Label>
          <Form.Control
            as="select"
            defaultValue={starter}
            onChange={handleChange}
          >
            <option value="Nueva">Nueva</option>
            {categories.length ? (
              <option value="Existente">Existente</option>
            ) : null}
          </Form.Control>
        </Form.Group>
        {type === "Nueva" ? <NewCat /> : <ExistingCat />}
      </>
    );
  }
);

ChooseCategory.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ChooseCategory;
