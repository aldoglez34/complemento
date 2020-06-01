import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

const ChooseCategory = React.memo(
  ({
    setActiveCat,
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

    const handleChange = (event) => {
      setType(event.target.value);
      setActiveCat(event.target.value);
    };

    return (
      <Form.Group as={Col} md={6}>
        <Form.Label>
          <strong>Categoría</strong>
          <span title="Requerido" className="text-danger">
            *
          </span>
        </Form.Label>
        <Row>
          <Col md={4}>
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
          </Col>
          <Col className="pl-0" md={8}>
            {type === "Nueva" ? (
              <>
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
              </>
            ) : (
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
            )}
          </Col>
        </Row>
      </Form.Group>
    );
  }
);

ChooseCategory.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ChooseCategory;
