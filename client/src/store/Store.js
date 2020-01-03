import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsSection from "./components/ProductsSection";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import "./store.scss";
import API from "../utils/API";
import FilterSection from "./components/FilterSection";
import SortDropdown from "./components/SortDropdown";
import SmallSortDropdown from "./components/SmallSortDropdown";
import ProductsPerPageDropdown from "./components/ProductsPerPageDropdown";
import SmallProductsPerPageDropdown from "./components/SmallProductsPerPageDropdown";
import MyPagination from "./components/MyPagination";

class Store extends Component {
  state = {
    categories: [],
    brands: [],
    //
    products: [],
    productsPerPage: 12,
    pageCount: "",
    activePage: 1,
    //
    offset: "",
    limit: "",
    //
    filter: "",
    sortBy: "Nombre ascendente"
  };

  setOffsetAndLimit = () => {
    let offset;
    let limit;
    if (this.state.activePage === 1) {
      offset = 0;
      limit = offset + this.state.productsPerPage;
    } else {
      offset = (this.state.activePage - 1) * this.state.productsPerPage;
      limit = offset + this.state.productsPerPage;
    }
    this.setState({ offset, limit });
  };

  componentDidMount() {
    // fetch filters
    API.fetchCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err));
    API.fetchBrands()
      .then(res => this.setState({ brands: res.data }))
      .catch(err => console.log(err));
    // fetch products
    API.fetchProducts()
      .then(res => {
        // no filters
        if (
          !this.props.routeProps.match.params.brand ||
          !this.props.routeProps.match.params.category
        ) {
          this.setState(
            {
              products: res.data,
              pageCount: Math.ceil(res.data.length / this.state.productsPerPage)
            },
            () => this.setOffsetAndLimit()
          );
        }
        // category filter
        if (this.props.routeProps.match.params.category) {
          this.setState({
            filter: this.props.routeProps.match.params.category
          });
          let filteredProducts = res.data.filter(
            p => p.category.name === this.props.routeProps.match.params.category
          );
          this.setState(
            {
              products: filteredProducts,
              pageCount: Math.ceil(
                filteredProducts.length / this.state.productsPerPage
              )
            },
            () => this.setOffsetAndLimit()
          );
        }
        // brand filter
        if (this.props.routeProps.match.params.brand) {
          this.setState({ filter: this.props.routeProps.match.params.brand });
          let filteredProducts = res.data.filter(
            p => p.brand === this.props.routeProps.match.params.brand
          );
          this.setState(
            {
              products: filteredProducts,
              pageCount: Math.ceil(
                filteredProducts.length / this.state.productsPerPage
              )
            },
            () => this.setOffsetAndLimit()
          );
        }
      })
      .catch(err => console.log(err));
  }

  handleChangeProductsPerPage = pages => {
    this.setState(
      {
        productsPerPage: pages,
        pageCount: Math.ceil(this.state.products.length / pages)
      },
      () => this.setOffsetAndLimit()
    );
  };

  applySorting = opt => {
    this.setState({ sortBy: opt });
    let temp = this.state.products;
    switch (opt) {
      case "Nombre ascendente":
        temp.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        this.setState({ products: temp });
        break;
      case "Nombre descendente":
        temp.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
        this.setState({ products: temp });
        break;
      case "Más vendido":
        temp.sort((a, b) =>
          a.unitsSold < b.unitsSold ? 1 : b.unitsSold < a.unitsSold ? -1 : 0
        );
        this.setState({ products: temp });
        break;
      case "Más caro primero":
        temp.sort((a, b) =>
          a.salePrice < b.salePrice ? 1 : b.salePrice < a.salePrice ? -1 : 0
        );
        this.setState({ products: temp });
        break;
      case "Más barato primero":
        temp.sort((a, b) =>
          a.salePrice > b.salePrice ? 1 : b.salePrice > a.salePrice ? -1 : 0
        );
        this.setState({ products: temp });
        break;
      default:
        this.setState({ products: temp });
    }
  };

  handleChangePage = page => {
    this.setState({ activePage: page }, () => this.setOffsetAndLimit());
  };

  render() {
    return (
      <Layout>
        {this.state.products.length &&
        this.state.categories.length &&
        this.state.brands.length &&
        this.state.pageCount ? (
          <>
            <Container fluid className="mt-3">
              <Row className="p-3">
                {/* left-column, filters */}
                <Col md={3}>
                  <h2>Filtros</h2>
                  <hr className="myDivider" />
                  <FilterSection
                    categories={this.state.categories}
                    brands={this.state.brands}
                    filterSelected={this.state.filter}
                  />
                </Col>
                {/* right-column, title, sorting and products */}
                <Col md={9}>
                  {/* title */}
                  <Row className="px-md-3 mb-2 mt-3 mt-md-0">
                    <Col className="text-md-center">
                      <h2 className="mt-1">
                        {!this.state.filter
                          ? "Todos los productos"
                          : this.state.filter}
                      </h2>
                      <hr
                        className="myDivider mb-1 ml-md-auto"
                        style={{ backgroundColor: "#edcb58" }}
                      />
                    </Col>
                  </Row>
                  {/* sorting */}
                  <Row className="px-3 mb-2">
                    {/* for md to xlg display */}
                    <Row className="d-none d-md-block">
                      <div className="d-flex flex-row">
                        <div className="d-flex flex-row align-items-center">
                          <span className="mr-2">Orden</span>
                          <SortDropdown
                            active={this.state.sortBy}
                            applySorting={this.applySorting}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center ml-2">
                          <span className="mr-2">Ver</span>
                          <ProductsPerPageDropdown
                            qty={this.state.productsPerPage}
                            handleChangeProductsPerPage={
                              this.handleChangeProductsPerPage
                            }
                          />
                        </div>
                      </div>
                    </Row>
                    {/* for smaller devices */}
                    <div className="d-md-none">
                      <div className="d-flex flex-row">
                        <SmallSortDropdown
                          active={this.state.sortBy}
                          applySorting={this.applySorting}
                        />
                        <div className="ml-2">
                          <SmallProductsPerPageDropdown
                            qty={this.state.productsPerPage}
                            handleChangeProductsPerPage={
                              this.handleChangeProductsPerPage
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      {this.state.products.length} productos
                    </div>
                  </Row>
                  {/* products */}
                  <Row className="mb-3">
                    <Col className="px-0">
                      <ProductsSection
                        products={this.state.products.slice(
                          this.state.offset,
                          this.state.limit
                        )}
                      />
                    </Col>
                  </Row>
                  {/* pagination */}
                  <Row className="mb-3 justify-content-center">
                    <MyPagination
                      pageCount={this.state.pageCount}
                      activePage={this.state.activePage}
                      handleChangePage={this.handleChangePage}
                    />
                  </Row>
                </Col>
              </Row>
            </Container>
            <HelpButton />
            <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
          </>
        ) : (
          <div className="h-100 d-flex align-items-center justify-content-center">
            <Spinner animation="grow" role="status" variant="warning" />
          </div>
        )}
      </Layout>
    );
  }
}

export default Store;
