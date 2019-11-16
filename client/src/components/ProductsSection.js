import React, { Component } from "react";
import { Spinner, Col, Row, Dropdown } from "react-bootstrap";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import MyPagination from "./MyPagination";

class ProductsSection extends Component {
  state = {
    nameSorting: "Ascendente",
    priceSorting: "Sin orden",
    productsPerPage: 20,
    pageCount: 0,
    activePage: 1,
    intervalId: 0,
    offset: 0,
    limit: 20
  };

  componentDidUpdate(prevProps) {
    let productsPerPage = this.state.productsPerPage;
    if (this.props.products !== prevProps.products) {
      this.setState(
        { pageCount: Math.ceil(this.props.products.length / productsPerPage) },
        () => this.setOffsetAndLimit()
      );
    }
  }

  setOffsetAndLimit() {
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

  handleChangeProductsPerPage = number => {
    let productsPerPage = this.state.productsPerPage;
    this.setState({ productsPerPage: number, activePage: 1 }, () => {
      this.setState(
        { pageCount: Math.ceil(this.props.products.length / productsPerPage) },
        () => this.setOffsetAndLimit()
      );
    });
  };

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

  render() {
    return (
      <>
        {/* title */}
        <Row>
          <Col className="text-center">
            <h4 className="mt-3 mb-1">
              <strong>
                {this.props.filter === ""
                  ? "Todos los productos"
                  : this.props.filter}
              </strong>
            </h4>
            <hr
              className="myDivider mb-1 ml-auto"
              style={{ backgroundColor: "#edcb58" }}
            />
          </Col>
        </Row>
        {/* product section */}
        <Row>
          <Col>
            {this.props.products.length ? (
              <>
                {/* filters */}
                <Row className="my-3">
                  <Col md={4}>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <span
                        className="mr-1 text-dark"
                        style={{ fontSize: "17px" }}
                      >
                        Orden por nombre:
                      </span>
                      <Dropdown>
                        <Dropdown.Toggle className="dropdownSort" size="sm">
                          {this.state.nameSorting}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() =>
                              this.setState({ nameSorting: "Ascendente" })
                            }
                            active={
                              this.state.nameSorting === "Ascendente"
                                ? true
                                : false
                            }
                          >
                            Ascendente
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() =>
                              this.setState({ nameSorting: "Descendente" })
                            }
                            active={
                              this.state.nameSorting === "Descendente"
                                ? true
                                : false
                            }
                          >
                            Descendente
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <span
                        className="mr-1 text-dark"
                        style={{ fontSize: "17px" }}
                      >
                        Orden por precio:
                      </span>
                      <Dropdown>
                        <Dropdown.Toggle className="dropdownSort" size="sm">
                          {this.state.priceSorting}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() =>
                              this.setState({ priceSorting: "Sin orden" })
                            }
                            active={
                              this.state.priceSorting === "Sin orden"
                                ? true
                                : false
                            }
                          >
                            Sin orden
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() =>
                              this.setState({ priceSorting: "Más barato" })
                            }
                            active={
                              this.state.priceSorting === "Más barato"
                                ? true
                                : false
                            }
                          >
                            Más barato
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() =>
                              this.setState({ priceSorting: "Más caro" })
                            }
                            active={
                              this.state.priceSorting === "Más caro"
                                ? true
                                : false
                            }
                          >
                            Más caro
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() =>
                              this.setState({ priceSorting: "Con descuento" })
                            }
                            active={
                              this.state.priceSorting === "Con descuento"
                                ? true
                                : false
                            }
                          >
                            Con descuento
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <span
                        className="mr-1 text-dark"
                        style={{ fontSize: "17px" }}
                      >
                        Productos por página:
                      </span>
                      <Dropdown alignRight>
                        <Dropdown.Toggle className="dropdownSort" size="sm">
                          {this.state.productsPerPage}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() => this.handleChangeProductsPerPage(20)}
                            active={
                              this.state.productsPerPage === 20 ? true : false
                            }
                          >
                            20
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() => this.handleChangeProductsPerPage(30)}
                            active={
                              this.state.productsPerPage === 30 ? true : false
                            }
                          >
                            30
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdownItemSort"
                            onClick={() => this.handleChangeProductsPerPage(40)}
                            active={
                              this.state.productsPerPage === 40 ? true : false
                            }
                          >
                            40
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
                {/* product cards */}
                <Row>
                  <Col className="d-flex flex-wrap justify-content-center">
                    {this.props.filter === ""
                      ? // if props.filter is empty, map everything
                        this.props.products
                          .slice(this.state.offset, this.state.limit)
                          .map(product => {
                            return (
                              <ProductCard
                                key={product._id}
                                product={product}
                              />
                            );
                          })
                      : // if not then filter the products either by cat or brand
                        this.props.products
                          .filter(
                            product =>
                              product.category === this.props.filter ||
                              product.brand === this.props.filter
                          )
                          .slice(this.state.offset, this.state.limit)
                          .map(product => {
                            return (
                              <ProductCard
                                key={product._id}
                                product={product}
                              />
                            );
                          })}
                  </Col>
                </Row>
                {/* pagination */}
                <Row>
                  <Col
                    md={4}
                    className="d-flex justify-content-center align-items-center"
                  >
                    Mostrando {this.props.products.length} productos
                  </Col>
                  <Col
                    md={8}
                    className="d-flex justify-content-end align-items-center"
                  >
                    {console.log(this.state)}
                    <MyPagination
                      pageCount={this.state.pageCount}
                      activePage={this.state.activePage}
                      handleChangePage={this.handleChangePage}
                    />
                  </Col>
                </Row>
              </>
            ) : (
              <div className="text-center my-4">
                <Spinner
                  animation="grow"
                  role="status"
                  className="spinnerStyle"
                />
              </div>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
};

export default ProductsSection;
