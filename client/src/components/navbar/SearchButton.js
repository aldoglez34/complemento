import React, { useState, useEffect } from "react";
import { Dropdown, FormControl, Spinner, Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchButton = React.memo(({ items }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [productSuggestions, setProductSuggestions] = useState([]);
  const [ingredientSuggestions, setIngredientSuggestions] = useState([]);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (items.products) setProducts(items.products);
    if (items.ingredients) setIngredients(items.ingredients);
  }, [items]);

  const handleEditInputChange = e => {
    setValue(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    let v = e.target.value;

    // for upper or lower case
    let regex = new RegExp(`^${v}`, "i");

    // suggestions
    let prodSugg = [];
    let ingSugg = [];

    // clear state
    setProductSuggestions([]);
    setIngredientSuggestions([]);

    // make search (by filtering suggestions)
    if (v.length >= 3) {
      prodSugg = products.filter(p => regex.test(p.cleanName));
      ingSugg = ingredients.filter(i => regex.test(i.cleanName));
    }
    setProductSuggestions(prodSugg);
    setIngredientSuggestions(ingSugg);
  };

  const renderSuggestions = () => {
    let allSuggestions = [];

    // no results
    if (
      !productSuggestions.length &&
      !ingredientSuggestions.length &&
      value.length >= 3
    ) {
      allSuggestions.push(
        <div key="noResults" className="pb-2 px-3">
          <em>
            No encontramos resultados en la tienda para "
            <strong>{value}</strong>"
          </em>
        </div>
      );
    }

    // render products suggestion
    if (productSuggestions.length) {
      allSuggestions.push(
        <React.Fragment key="productsSuggestions">
          <h6 className="dropdown-header px-3" style={{ color: "#59a49a" }}>
            <strong>Productos</strong>
          </h6>
          {productSuggestions.map(i => (
            <Dropdown.Item
              className="navbarDropdownItemStyle px-3"
              key={i._id}
              href={"/product/details/" + i._id}
            >
              {i.name}
            </Dropdown.Item>
          ))}
        </React.Fragment>
      );
    }

    // render ingredients suggestions
    if (ingredientSuggestions.length) {
      allSuggestions.push(
        <React.Fragment key="categorySuggestions">
          <h6 className="dropdown-header px-3" style={{ color: "#59a49a" }}>
            <strong>Ingredientes</strong>
          </h6>
          {ingredientSuggestions.map(i => (
            <Dropdown.Item
              className="navbarDropdownItemStyle px-3"
              key={i.name}
              href={"/store/ingredient/" + i.name}
            >
              {i.name}
            </Dropdown.Item>
          ))}
        </React.Fragment>
      );
    }

    return allSuggestions;
  };

  const content = type =>
    products.length ? (
      <>
        {/* title */}
        {type === "modal" ? (
          <div className="d-flex flex-row pt-2 mb-3 px-3">
            <div className="d-flex flex-column">
              <h6>
                <strong>BUSCAR</strong>
              </h6>
              <hr className="myDivider mb-0" />
            </div>
            <div className="ml-auto">
              <i className="fas fa-times" onClick={handleClose} />
            </div>
          </div>
        ) : type === "dropdown" ? (
          <div className="pt-2 pb-3 px-3">
            <h6>
              <strong>BUSCAR</strong>
            </h6>
            <hr className="myDivider mb-0" />
          </div>
        ) : null}
        {/* the rest */}
        <div className="mb-3 px-3">
          <FormControl
            autoFocus
            className="w-100"
            placeholder="¿Qué estás buscando?"
            onChange={handleEditInputChange}
          />
        </div>
        {renderSuggestions()}
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
          <i className="fas fa-search mr-1" />
          Buscar
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-0 py-2">{content("modal")}</Modal.Body>
        </Modal>
      </div>
      {/* md */}
      <div className="d-none d-md-block">
        <Dropdown>
          <Dropdown.Toggle
            className="navbarDropdownStyle ml-2 p-2 pt-3"
            variant="transparent"
            id="dropdown-basic"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <i className="fas fa-search mr-1" />
            Buscar
          </Dropdown.Toggle>

          <Dropdown.Menu className="px-0 py-2" id="searchDropdownMenu">
            {content("dropdown")}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
});

SearchButton.propTypes = {
  items: PropTypes.object.isRequired
};

export default SearchButton;
