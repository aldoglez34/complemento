import React, { PureComponent } from "react";
import { Row, Col, Spinner, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsSection from "./components/ProductsSection";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import "./store.scss";
import API from "../utils/API";
import FilterSectionBig from "./filters/FilterSectionBig";
import SortDropdown from "./dropdowns/SortDropdown";
import ProductsPerPageDropdown from "./dropdowns/ProductsPerPageDropdown";
import MyPagination from "./components/MyPagination";

class Store extends PureComponent {
  state = {
    categories: [],
    brands: [],
    //
    products: [],
    productsPerPage: 12,
    productsPerPageOptions: "",
    pageCount: "",
    activePage: 1,
    //
    offset: "",
    limit: "",
    //
    filter: "",
    sortBy: "Nombre ascendente"
  };

  componentDidMount() {
    // fetch filters (left bar)
    API.fetchCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err));
    API.fetchBrands()
      .then(res => this.setState({ brands: res.data }))
      .catch(err => console.log(err));
    // fetch products
    API.fetchProducts()
      .then(res => {
        this.setState(
          (prevState, props) => {
            //
            let brand = props.routeProps.match.params.brand;
            let category = props.routeProps.match.params.category;
            let ingredient = props.routeProps.match.params.ingredient;
            // if no filters
            if (!brand && !category && !ingredient) {
              return {
                products: res.data,
                pageCount: Math.ceil(
                  res.data.length / prevState.productsPerPage
                )
              };
            }
            // if category filter
            if (category && !brand && !ingredient) {
              let filtered = res.data.filter(p => p.category === category);
              return {
                filter: category,
                products: filtered,
                pageCount: Math.ceil(
                  filtered.length / prevState.productsPerPage
                )
              };
            }
            // if brands filter
            if (!category && brand && !ingredient) {
              let filtered = res.data.filter(p => p.brand === brand);
              return {
                filter: brand,
                products: filtered,
                pageCount: Math.ceil(
                  filtered.length / prevState.productsPerPage
                )
              };
            }
            // if ingredient filter
            if (!category && !brand && ingredient) {
              let filtered = res.data.filter(p =>
                p.ingredients.includes(ingredient)
              );
              return {
                filter: ingredient,
                products: filtered,
                pageCount: Math.ceil(
                  filtered.length / prevState.productsPerPage
                )
              };
            }
          },
          () => {
            this.setOffsetAndLimit();
            this.setProductsPerPageOptions();
          }
        );
      })
      .catch(err => console.log(err));
  }

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

  setProductsPerPageOptions = () => {
    let pppopt =
      this.state.products.length > 28
        ? [12, 20, 28]
        : this.state.products.length > 20
        ? [12, 20]
        : [12];
    this.setState({ productsPerPageOptions: pppopt });
  };

  handleChangeProductsPerPage = pages => {
    this.setState(
      prevState => {
        return {
          productsPerPage: pages,
          pageCount: Math.ceil(prevState.products.length / pages)
        };
      },
      () => this.setOffsetAndLimit()
    );
  };

  applySorting = opt => {
    this.setState(prevState => {
      let sorted = [];
      switch (opt) {
        case "Nombre ascendente":
          sorted = prevState.products.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          return { sortBy: opt, products: sorted };
        case "Nombre descendente":
          sorted = prevState.products.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          return { sortBy: opt, products: sorted };
        case "Precio: bajo a alto":
          sorted = prevState.products.sort((a, b) =>
            a.price.salePrice > b.price.salePrice
              ? 1
              : b.price.salePrice > a.price.salePrice
              ? -1
              : 0
          );
          return { sortBy: opt, products: sorted };
        case "Precio: alto a bajo":
          sorted = prevState.products.sort((a, b) =>
            a.price.salePrice < b.price.salePrice
              ? 1
              : b.price.salePrice < a.price.salePrice
              ? -1
              : 0
          );
          return { sortBy: opt, products: sorted };
        case "Más vendido":
          sorted = prevState.products.sort((a, b) =>
            a.unitsSold < b.unitsSold ? 1 : b.unitsSold < a.unitsSold ? -1 : 0
          );
          return { sortBy: opt, products: sorted };
        default:
          return { sortBy: opt, products: prevState.products };
      }
    });
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
        this.state.pageCount &&
        this.state.productsPerPageOptions ? (
          <React.Fragment>
            <Container className="my-4">
              <Row>
                {/* left-column, filters */}
                <Col md={3}>
                  <FilterSectionBig
                    categories={this.state.categories}
                    brands={this.state.brands}
                    filterSelected={this.state.filter}
                  />
                </Col>
                {/* right-column, title, sorting and products */}
                <Col md={9}>
                  {/* title */}
                  <h3>
                    {!this.state.filter ? "Productos" : this.state.filter}
                  </h3>
                  <hr
                    className="myDivider"
                    style={{ backgroundColor: "#edcb58" }}
                  />
                  {/* sort and products per page */}
                  <div className="mb-2">
                    <div className="d-flex flex-row">
                      <SortDropdown
                        active={this.state.sortBy}
                        applySorting={this.applySorting}
                      />
                      <span className="ml-3" />
                      <ProductsPerPageDropdown
                        options={this.state.productsPerPageOptions}
                        qty={this.state.productsPerPage}
                        handleChangeProductsPerPage={
                          this.handleChangeProductsPerPage
                        }
                      />
                    </div>
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
                  {/* bottom (products length and pagination) */}
                  <div className="d-flex justify-content-center align-items-center pt-3">
                    <em className="text-muted d-none d-md-block">
                      {this.state.products.length > 1
                        ? this.state.products.length + " productos"
                        : this.state.products.length + " producto"}
                    </em>
                    <div className="ml-md-auto">
                      <MyPagination
                        pageCount={this.state.pageCount}
                        activePage={this.state.activePage}
                        handleChangePage={this.handleChangePage}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <HelpButton />
              <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
            </Container>
          </React.Fragment>
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
