import React, { Component } from "react";
import { Navbar, Spinner, Form } from "react-bootstrap";
import API from "../utils/API";
import "./brandslist.scss";

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
        <Navbar.Toggle
          className="mt-3 border-0 w-100 py-2"
          aria-controls="brandsdropdown"
        >
          Filtra por marca
          <i className="fas fa-chevron-down ml-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="brandsdropdown">
          <Form>
            <div>
              {this.state.brands.length ? (
                this.state.brands.map(brand => {
                  return (
                    <div key={brand.name} className="py-1">
                      <Form.Check type="checkbox" id={brand.name}>
                        <Form.Check.Input type="checkbox" isValid />
                        <Form.Check.Label className="brandItem">
                          {brand.name}
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-3">
                  <Spinner animation="border" role="status" variant="success" />
                </div>
              )}
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BrandsList;
