import React, { Component } from "react";
import { Row, Col, Spinner, DropdownButton, Dropdown } from "react-bootstrap";
import ProductCard from "./ProductCard";
import API from "../utils/API";
import MyPagination from "../components/MyPagination";

class ProductsSection extends Component {
  state = {
    intervalId: 0,
    products: [],
    offset: null,
    limit: null,
    productCounter: 0,
    productsPerPage: 20,
    pageCount: 0,
    activePage: 1,
    sortBy: "A-Z",
    groupBy: "None"
  };

  setOffsetAndLimit() {
    // setting up offset and limit
    let offset;
    let limit;
    if (this.state.activePage === 1) {
      offset = 0;
      limit = offset + this.state.productsPerPage;
      this.setState({ offset, limit });
    } else {
      offset = (this.state.activePage - 1) * 20;
      limit = offset + this.state.productsPerPage;
      this.setState({ offset, limit });
    }
  }

  componentDidMount() {
    let cat;
    // there are 2 possible scenarios here
    // 1 /store means there are no filters so fetch all the products
    // 2 /store/:cat means there is a filter of category
    if (this.props.routeProps.match.params.cat === undefined) {
      // 1 - no filters
      cat = null;
    } else if (this.props.routeProps.match.params.cat !== undefined) {
      // 2 - category filter
      cat = this.props.routeProps.match.params.cat;
    }
    // fetch products
    API.fetchProducts(cat)
      .then(res => {
        let productsPerPage = this.state.productsPerPage;
        this.setState(
          {
            products: res.data,
            productCounter: res.data.length,
            pageCount: Math.ceil(res.data.length / productsPerPage)
          },
          () => this.setOffsetAndLimit()
        );
      })
      .catch(err => console.log(err));
  }

  handleChangePage = page => {
    this.setState({ activePage: page }, () => {
      this.scrollToTop();
      this.setOffsetAndLimit();
    });
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }

  handleSorting = name => {
    let productsSorted = [];
    this.setState({ sortBy: name }, () => {
      switch (name) {
        case "A-Z":
          productsSorted = this.state.products.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          this.setState({ products: productsSorted });
          break;
        case "Z-A":
          productsSorted = this.state.products.sort((a, b) =>
            a.name < b.name ? 1 : b.name < a.name ? -1 : 0
          );
          this.setState({ products: productsSorted });
          break;
        case "Más barato":
          productsSorted = this.state.products.sort((a, b) =>
            a.salePrice > b.salePrice ? 1 : b.salePrice > a.salePrice ? -1 : 0
          );
          this.setState({ products: productsSorted });
          break;
        case "Más caro":
          productsSorted = this.state.products.sort((a, b) =>
            a.salePrice < b.salePrice ? 1 : b.salePrice < a.salePrice ? -1 : 0
          );
          this.setState({ products: productsSorted });
          break;
        default:
          return null;
      }
    });
  };

  handleGrouping = name => {
    switch (name) {
      case "none":
        console.log("grouping by none");
        break;
      case "By Brand":
        console.log("grouping by brand");
        break;
      case "By Discounts":
        console.log("grouping by discounts");
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        {/* first row */}
        <Row className="mb-2 py-1">
          <Col
            md
            className="d-flex flex-row justify-content-md-center align-items-center mb-2 mb-md-0"
          >
            <span>Ordenar por</span>
            <DropdownButton
              size="sm"
              variant="outline-secondary"
              className="ml-2"
              title={this.state.sortBy}
            >
              <Dropdown.Item onClick={() => this.handleSorting("A-Z")}>
                A-Z
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSorting("Z-A")}>
                Z-A
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSorting("Más barato")}>
                Más barato
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSorting("Más caro")}>
                Más caro
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col
            md
            className="d-flex flex-row justify-content-md-center align-items-center mb-2 mb-md-0"
          >
            <span>Agrupar por</span>
            <DropdownButton
              size="sm"
              variant="outline-secondary"
              className="ml-2"
              title="Nada"
            >
              <Dropdown.Item
                onClick={() => {
                  this.handleGrouping("None");
                }}
              >
                Nada
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  this.handleGrouping("By Brand");
                }}
              >
                Marcas
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  this.handleGrouping("By Discounts");
                }}
              >
                Descuentos
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        {/* second row */}
        <Row>
          <Col>
            <div className="d-flex flex-wrap justify-content-center">
              {this.state.products.length ? (
                this.state.products
                  .slice(this.state.offset, this.state.limit)
                  .map(product => {
                    return <ProductCard key={product._id} product={product} />;
                  })
              ) : (
                <div className="text-center my-4">
                  <Spinner animation="grow" role="status" className="spinnerStyle" />
                </div>
              )}
            </div>
          </Col>
        </Row>
        {/* third row */}
        <Row>
          <Col className="d-flex justify-content-center">
            <MyPagination
              pageCount={this.state.pageCount}
              activePage={this.state.activePage}
              handleChangePage={this.handleChangePage}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default ProductsSection;
