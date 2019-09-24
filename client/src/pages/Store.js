import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import CategoriesList from "../components/CategoriesList";
import ProductsList from "../components/ProductsList";
// import SufferingsList from "../components/SufferingsList";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyBreadcrumb from "../components/MyBreadcrumb";
import SearchBar from "../components/SearchBar";
import MyPagination from "../components/MyPagination";
import API from "../utils/API";

class Store extends Component {
  state = {
    // categories
    categories: [],
    selectedCategoryId: 1,
    // sufferings
    sufferings: [],
    selectedSuffering: "Todos",
    // products
    products: []
  };

  loadCategories = () => {
    API.loadCategories()
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => console.log(err));
  };

  sufferingsByCategory = cat => {
    API.sufferingsByCategory(cat)
      .then(res => {
        this.setState({ sufferings: res.data });
      })
      .catch(err => console.log(err));
  };

  getStoreProducts = data => {
    API.getStoreProducts(data)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChangeCategory = cat => {
    // whenever the category changes
    // first change the cat in the state and set sufferings to ALL
    this.setState(
      {
        selectedCategoryId: cat,
        selectedSuffering: "Todos"
      },
      () => {
        // then clear the sufferings in the state
        // and then load all sufferings from the selected cat
        this.setState({ sufferings: [] }, () => {
          this.sufferingsByCategory(this.state.selectedCategoryId);
        });
        // next clear the products
        // and get all the products from that category and ALL sufferings
        // (that is because the default when changing a category is Todos)
        this.setState({ products: [] }, () => {
          let data = {};
          data.catId = this.state.selectedCategoryId;
          data.suff = "Todos";
          this.getStoreProducts(data);
        });
      }
    );
  };

  handleChangeSuffering = suff => {
    this.setState(
      {
        selectedSuffering: suff,
        products: []
      },
      () => {
        let data = {};
        data.catId = this.state.selectedCategoryId;
        data.suff = this.state.selectedSuffering;
        this.getStoreProducts(data);
      }
    );
  };

  componentDidMount() {
    this.loadCategories();
    this.sufferingsByCategory(this.state.selectedCategoryId);
    let data = {};
    data.catId = this.state.selectedCategoryId;
    data.suff = this.state.selectedSuffering;
    this.getStoreProducts(data);
  }

  render() {
    return (
      <Layout>
        <MyBreadcrumb />

        <Container fluid className="mb-3">
          <Row>
            {/* categories column */}
            <Col md={3} className="mt-2">
              <Row>
                <Col>
                  <h5 className="my-3 text-light">Categorías</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CategoriesList
                    categories={this.state.categories}
                    selectedCategoryId={this.state.selectedCategoryId}
                    handleChangeCategory={this.handleChangeCategory}
                  />
                </Col>
              </Row>
            </Col>
            {/* products, filters, sufferings column */}
            <Col md={9} className="my-3 bg-transaparent">
              <Row>
                <Col>
                  <SearchBar />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="d-flex align-items-center py-2">
                  <span className="text-muted">Filtros de categoría</span>
                </Col>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-md-end justify-content-sm-center py-2"
                >
                  <span className="text-muted mr-4">
                    <em>5 productos</em>
                  </span>
                  <MyPagination />
                </Col>
              </Row>
              <Row>
                <Col>
                  <ProductsList productsArr={this.state.products} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <HelpButton />
        <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
      </Layout>
    );
  }
}

export default Store;
