import React, { Component } from "react";
import { Navbar, Nav, Spinner } from "react-bootstrap";
import API from "../utils/API";

class BrandsList extends Component {
  state = {
    brands: []
  };

  componentDidMount() {
    API.fetchBrands()
      .then(res => {
        this.setState({ brands: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Navbar bg="transparent" variant="light" expand="md">
        <Navbar.Toggle aria-controls="categoriesdropdown">
          Filtra por marca
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="categoriesdropdown">
          <Nav className="flex-column">
            {this.state.brands.length ? (
              this.state.brands.map(brand => {
                return (
                  <Nav.Link
                    className="px-0 py-1 text-dark"
                    key={brand.DISTINCT}
                    href={"/store/" + brand.DISTINCT}
                    style={{ textTransform: "uppercase" }}
                  >
                    {brand.DISTINCT}
                  </Nav.Link>
                );
              })
            ) : (
              <div className="text-center py-3">
                <Spinner animation="border" role="status" variant="success" />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BrandsList;
