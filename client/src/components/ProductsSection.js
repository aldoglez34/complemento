import React, { Component } from "react";
import { connect } from "react-redux";
import { sortByName, sortByPrice } from "../redux-actions/store";
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
    activePage: 1
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

  componentDidMount() {
    API.fetchProducts()
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

  handleFilters = filter => {

  }

  handleSorting = name => {
    let productsSorted = [];
    this.setState({ sortBy: name }, () => {
      switch (name) {
        case "Ascendente":
          productsSorted = this.state.products.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          this.setState({ products: productsSorted });
          break;
        case "Descendente":
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

  render() {
    return (
      <>
        <Row className="mb-1 py-1">
          {/* sorting */}
          <Col
            md
            className="d-flex flex-row justify-content-md-center align-items-center mb-2 mb-md-0"
          >
            <span>Ordenar por nombre</span>
            <DropdownButton
              size="sm"
              variant="outline-secondary"
              className="ml-2"
              title={this.props.store.nameSorting}
            >
              <Dropdown.Item onClick={() => this.props.sortByName("Ascendente")}>
                Ascendente
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.sortByName("Descendente")}>
                Descendente
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col
            md
            className="d-flex flex-row justify-content-md-center align-items-center mb-2 mb-md-0"
          >
            <span>Ordenar por precio</span>
            <DropdownButton
              size="sm"
              variant="outline-secondary"
              className="ml-2"
              title={this.props.store.priceSorting}
            >
              <Dropdown.Item onClick={() => this.props.sortByPrice("Más barato")}>
                Más barato
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.sortByPrice("Más caro")}>
                Más caro
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.sortByPrice("Más caro")}>
                Con descuento
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          {/* products */}
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
                  <Spinner
                    animation="grow"
                    role="status"
                    className="spinnerStyle"
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          {/* pagination */}
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

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

const mapDispatchToProps = {
  sortByName,
  sortByPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection);
