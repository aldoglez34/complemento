import React, { Component } from "react";
import { Spinner, Col, Row } from "react-bootstrap";
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
        {/* product section */}
        <Row>
          <Col>
            {this.props.products.length ? (
              <>
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
                    {/* {console.log(this.state)} */}
                    <MyPagination
                      pageCount={this.state.pageCount}
                      activePage={this.state.activePage}
                      handleChangePage={this.handleChangePage}
                    />
                  </Col>
                </Row>
              </>
            ) : (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <Spinner animation="grow" role="status" variant="warning" />
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
