import React, { useState, useEffect } from "react";
import { Dropdown, FormControl, Spinner, Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchButton = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [productSuggestions, setProductSuggestions] = useState([]);
  const [categorySuggestions, setCategorySuggestions] = useState([]);
  const [brandSuggestions, setBrandSuggestions] = useState([]);

  useEffect(() => {
    if (props.items.products) setProducts(props.items.products);
    if (props.items.categories) setCategories(props.items.categories);
    if (props.items.brands) setBrands(props.items.brands);
  }, [props.items.products]);

  const handleEditInputChange = e => {
    const value = e.target.value;
    const regex = new RegExp(`^${value}`, "i");
    // get product suggestions
    let prodSugg = [];
    if (value.length > 0) prodSugg = products.filter(p => regex.test(p.name));
    setProductSuggestions(prodSugg);
    // get product suggestions
    let catSugg = [];
    if (value.length > 0) catSugg = categories.filter(c => regex.test(c));
    setCategorySuggestions(catSugg);
    // get product suggestions
    let brandSugg = [];
    if (value.length > 0) brandSugg = brands.filter(b => regex.test(b));
    setBrandSuggestions(brandSugg);
  };

  const renderSuggestions = () => {
    let allSuggestions = [];

    if (productSuggestions.length) {
      allSuggestions.push(
        <>
          <h6 className="dropdown-header px-0" style={{ color: "#59a49a" }}>
            <strong>Productos</strong>
          </h6>
          {productSuggestions.map(i => (
            <Dropdown.Item
              className="navbarDropdownItemStyle px-0"
              key={i._id}
              href={"/product/details/" + i._id}
            >
              {i.name}
            </Dropdown.Item>
          ))}
        </>
      );
    }

    if (categorySuggestions.length) {
      allSuggestions.push(
        <>
          <h6 className="dropdown-header px-0" style={{ color: "#59a49a" }}>
            <strong>Categorías</strong>
          </h6>
          {categorySuggestions.map(c => (
            <Dropdown.Item
              className="navbarDropdownItemStyle px-0"
              key={c}
              href={"/store/category/" + c}
            >
              {c}
            </Dropdown.Item>
          ))}
        </>
      );
    }

    if (brandSuggestions.length) {
      allSuggestions.push(
        <>
          <h6 className="dropdown-header px-0" style={{ color: "#59a49a" }}>
            <strong>Marcas</strong>
          </h6>
          {brandSuggestions.map(b => (
            <Dropdown.Item
              className="navbarDropdownItemStyle px-0"
              key={b}
              href={"/store/brand/" + b}
            >
              {b}
            </Dropdown.Item>
          ))}
        </>
      );
    }

    return allSuggestions;
  };

  const content = type =>
    products.length ? (
      <>
        {/* title */}
        {type === "modal" ? (
          <div className="d-flex flex-row pt-2 mb-3">
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
          <div className="pt-2 pb-3">
            <h6>
              <strong>BUSCAR</strong>
            </h6>
            <hr className="myDivider mb-0" />
          </div>
        ) : null}
        {/* the rest */}
        <FormControl
          autoFocus
          className="w-100 mb-3"
          placeholder="¿Qué estás buscando?"
          onChange={handleEditInputChange}
        />
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
          <Modal.Body className="px-3 py-2">{content("modal")}</Modal.Body>
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

          <Dropdown.Menu className="px-3 py-2" id="searchDropdownMenu">
            {content("dropdown")}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
};

SearchButton.propTypes = {
  items: PropTypes.object.isRequired
};

export default SearchButton;
