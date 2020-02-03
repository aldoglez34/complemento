import React, { PureComponent } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsSection from "./components/ProductsSection";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import "./store.scss";
import API from "../utils/API";
import FilterSection from "./components/FilterSection";
import SortDropdown from "./components/SortDropdown";
import ProductsPerPageDropdown from "./components/ProductsPerPageDropdown";
import MyPagination from "./components/MyPagination";

class Store extends PureComponent {
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
          a.price.salePrice < b.price.salePrice
            ? 1
            : b.price.salePrice < a.price.salePrice
            ? -1
            : 0
        );
        this.setState({ products: temp });
        break;
      case "Más barato primero":
        temp.sort((a, b) =>
          a.price.salePrice > b.price.salePrice
            ? 1
            : b.price.salePrice > a.price.salePrice
            ? -1
            : 0
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
            <Container className="mt-3 p-3">
              <Row>
                {/* left-column, filters */}
                <Col md={3}>
                  <FilterSection
                    categories={this.state.categories}
                    brands={this.state.brands}
                    filterSelected={this.state.filter}
                  />
                </Col>
                {/* right-column, title, sorting and products */}
                <Col md={9}>
                  {/* title */}
                  <div>
                    <h5>
                      <strong>
                        {!this.state.filter ? "PRODUCTOS" : this.state.filter}
                      </strong>
                    </h5>
                    <hr
                      className="myDivider"
                      style={{ backgroundColor: "#edcb58" }}
                    />
                  </div>
                  {/* filters */}
                  <div className="d-flex flex-row mb-2">
                    <SortDropdown
                      active={this.state.sortBy}
                      applySorting={this.applySorting}
                    />
                    <span className="ml-2" />
                    <ProductsPerPageDropdown
                      qty={this.state.productsPerPage}
                      handleChangeProductsPerPage={
                        this.handleChangeProductsPerPage
                      }
                    />
                  </div>
                  {/* products */}
                  <div className="mb-2">
                    <ProductsSection
                      products={this.state.products.slice(
                        this.state.offset,
                        this.state.limit
                      )}
                    />
                  </div>
                  {/* pagination */}
                  <div className="d-flex justify-content-center mb-2">
                    <MyPagination
                      pageCount={this.state.pageCount}
                      activePage={this.state.activePage}
                      handleChangePage={this.handleChangePage}
                    />
                  </div>
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
