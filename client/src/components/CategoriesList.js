import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as storeActions from "../redux-actions/store";
import { Navbar, Nav, Spinner, Badge } from "react-bootstrap";
import API from "../utils/API";

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  const filter = useSelector(state => state.store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    API.fetchCategories()
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return categories.length ? (
    <>
      <h5 className="mt-3">Categorías</h5>
      <Navbar expand="md" className="filterSection shadow-sm">
        <Navbar.Toggle
          className="mt-3 border-0 w-100 py-2"
          aria-controls="categoriesdropdown"
        >
          Filtrar por categoría
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="categoriesdropdown">
          <Nav variant="pills" className="flex-column w-100">
            {categories.map(category => {
              return (
                <Nav.Item key={category.name}>
                  <Nav.Link
                    className="py-1 filterItem"
                    onClick={() =>
                      dispatch(storeActions.filterProducts(category.name))
                    }
                    active={category.name === filter ? true : false}
                  >
                    {category.name}
                    <Badge className="ml-1 filterBadge">
                      {category.productCount}
                    </Badge>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  ) : (
    <div className="text-center my-4">
      <Spinner animation="grow" role="status" className="spinnerStyle" />
    </div>
  );
}

export default CategoriesList;
