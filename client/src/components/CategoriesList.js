import React, { Component } from "react";
import { Navbar, Nav, Spinner } from "react-bootstrap";
import API from "../utils/API";

class CategoriesList extends Component {
  state = {
    categories: [],
    selectedCat: null
  };

  componentDidMount() {
    API.fetchCategories()
      .then(res => {
        this.setState({ selectedCat: this.props.routeProps.match.params.cat });
        this.setState({ categories: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.categories.length ? (
      <Navbar bg="transparent" variant="light" expand="md">
        <Navbar.Toggle aria-controls="categoriesdropdown">
          Selecciona una categoría
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="categoriesdropdown">
          <Nav className="flex-column">
            {this.state.categories.map(category => {
              if (category.name === this.state.selectedCat) {
                return (
                  <Nav.Link
                    className="px-0 py-1 text-danger"
                    key={category.categoryId}
                    href={"/store/" + category.name}
                  >
                    <i className="fas fa-caret-right mr-1" />
                    <strong>{category.name}</strong>
                  </Nav.Link>
                );
              } else {
                return (
                  <Nav.Link
                    className="px-0 py-1 text-dark"
                    key={category.categoryId}
                    href={"/store/" + category.name}
                  >
                    {category.name}
                  </Nav.Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <div className="text-center py-3">
        <Spinner animation="border" role="status" variant="success" />
      </div>
    );
  }
}

export default CategoriesList;
