import React from "react";
import { Dropdown, Nav, NavItem, Spinner, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CategoriesDropdown = React.memo(({ categories }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      {/* sm */}
      <div className="d-block d-md-none">
        <Button
          variant="transparent"
          className="navbarDropdownStyle ml-0 ml-md-2 p-0 p-md-2 pt-md-3"
          onClick={handleShow}
          style={{ outline: "none", boxShadow: "none" }}
        >
          <i className="fas fa-store mr-1" />
          Categorías
        </Button>

        <Modal className="py-3" show={show} onHide={handleClose}>
          <Modal.Body>
            <h6>
              <strong>BUSCAR</strong>
            </h6>
            <hr className="myDivider mb-4" />
            <FormControl
              autoFocus
              className="w-100 mb-2"
              placeholder="¿Qué estás buscando?"
              onChange={handleEditInputChange}
            />
            {renderSuggestions()}
          </Modal.Body>
        </Modal>
      </div>
      {/* md */}
      <div className="d-none d-md-block">
        <Dropdown as={NavItem}>
          <Dropdown.Toggle
            as={Nav.Link}
            className="navbarDropdownStyle p-0 p-md-2 pt-md-3"
            title="Categorías"
          >
            <i className="fas fa-store mr-1" />
            Categorías
          </Dropdown.Toggle>

          <Dropdown.Menu data-display="static">
            {categories.length ? (
              <>
                <div className="px-3 py-2">
                  <h6>
                    <strong>CATEGORÍAS</strong>
                  </h6>
                  <hr className="myDivider mb-0" />
                </div>
                {categories.map(c => (
                  <Dropdown.Item
                    key={c.name}
                    href={"/store/category/" + c.name}
                    title={c.name}
                    className="navbarDropdownItemStyle"
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
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
});

CategoriesDropdown.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesDropdown;
