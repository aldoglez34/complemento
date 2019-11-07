import React, { Component } from "react";
import { Navbar, Spinner, Form } from "react-bootstrap";
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
    return this.state.brands.length ? (
      <Navbar bg="transparent" variant="light" expand="md">
        <Navbar.Toggle
          className="mt-3 border-0 w-100 py-2"
          aria-controls="brandsdropdown"
        >
          Filtra por marca
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="brandsdropdown">
          <Form>
            {this.state.brands.map(brand => {
              return (
                <div key={brand} className="py-1">
                  <Form.Check type="checkbox" id={brand}>
                    <Form.Check.Input type="checkbox" isValid />
                    <Form.Check.Label className="brandItem">
                      {brand}
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              );
            })}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    ) : (
      <div className="text-center my-4">
        <Spinner animation="grow" role="status" variant="success" />
      </div>
    );
  }
}

export default BrandsList;
