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

const StoreDropdown = React.memo(({ store }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const content = type =>
    store.length ? (
      <>
        {/* title */}
        {type === "modal" ? (
          <div className="d-flex flex-row px-3 py-2">
            <div className="d-flex flex-column">
              <h6>
                <strong>TIENDA</strong>
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
              <strong>TIENDA</strong>
            </h6>
            <hr className="myDivider mb-0" />
          </div>
        ) : null}
        <h6 className="dropdown-header px-3" style={{ color: "#59a49a" }}>
          <strong>Categorías</strong>
        </h6>
        {/* the rest */}
        {store.map(c => (
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

  return (
    <React.Fragment>
      {/* sm */}
      <div className="d-block d-md-none">
        <Button
          variant="transparent"
          className="navbarDropdownStyle ml-0 p-0"
          onClick={handleShow}
          style={{ outline: "none", boxShadow: "none" }}
        >
          <i className="fas fa-store mr-1" />
          Tienda
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-0 py-2">{content("modal")}</Modal.Body>
        </Modal>
      </div>
      {/* md */}
      <div className="d-none d-md-block">
        <Dropdown as={NavItem}>
          <Dropdown.Toggle
            as={Nav.Link}
            className="navbarDropdownStyle p-2 pt-3"
            title="Categorías"
          >
            <i className="fas fa-store mr-1" />
            Tienda
          </Dropdown.Toggle>

          <Dropdown.Menu data-display="static">
            {content("dropdown")}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
});

StoreDropdown.propTypes = {
  store: PropTypes.array.isRequired
};

export default StoreDropdown;
