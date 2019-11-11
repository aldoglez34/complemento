import React, { Component } from "react";
import { Navbar, Nav, Spinner, Badge } from "react-bootstrap";
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
        <Navbar.Toggle
          className="mt-3 border-0 w-100 py-2"
          aria-controls="categoriesdropdown"
        >
          Selecciona una categoría
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="categoriesdropdown">
          <Nav className="flex-column w-100">
            {this.state.categories.map(category => {
              if (category.name === this.state.selectedCat) {
                return (
                  <Nav.Link
                    className="px-2 py-1 catItem active"
                    key={category.name}
                    href={"/store/" + category.name}
                  >
                    {category.name}
                    <Badge pill className="ml-1 catBadge active">
                      {category.productCount}
                    </Badge>
                  </Nav.Link>
                );
              } else {
                return (
                  <Nav.Link
                    className="px-2 py-1 catItem"
                    key={category.name}
                    href={"/store/" + category.name}
                  >
                    {category.name}
                    <Badge pill className="ml-1 catBadge">
                      {category.productCount}
                    </Badge>
                  </Nav.Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <div className="text-center my-4">
        <Spinner animation="grow" role="status" className="spinnerStyle" />
      </div>
    );
  }
}

export default CategoriesList;
