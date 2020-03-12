import React, { useState } from "react";
import {
  Dropdown,
  Nav,
  NavItem,
  Spinner,
  Modal,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";
import DropdownTemplate from "./components/DropdownTemplate";

const TestDropdown = React.memo(({ categories }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const content = type =>
    categories.length ? (
      <>
        {/* title */}
        {type === "modal" ? (
          <div className="d-flex flex-row px-3 py-2">
            <div className="d-flex flex-column">
              <h6>
                <strong>CATEGORÍAS</strong>
              </h6>
              <hr className="myDivider mb-0" />
            </div>
            <div className="ml-auto">
              <i className="fas fa-times" onClick={handleClose} />
            </div>
          </div>
        ) : type === "dropdown" ? (
          <div className="px-3 py-2">
            <h6>
              <strong>CATEGORÍAS</strong>
            </h6>
            <hr className="myDivider mb-0" />
          </div>
        ) : null}
        {/* the rest */}
        {categories.map(c => (
          <Dropdown.Item
            key={c.name}
            href={"/store/category/" + c.name}
            title={c.name}
            className="navbarDropdownItemStyle px-3"
          >
            {c.name}
            <span className="categoriesProductCounter ml-1">
              {c.productCount}
            </span>
          </Dropdown.Item>
        ))}
      </>
    ) : (
      <div className="text-center py-4">
        <Spinner animation="grow" role="status" variant="warning" />
      </div>
    );

  return <DropdownTemplate icon={<i class="fas fa-vials" />} title="Test" />;
});

TestDropdown.propTypes = {
  categories: PropTypes.array.isRequired
};

export default TestDropdown;
