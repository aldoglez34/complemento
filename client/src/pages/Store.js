import React, { Component } from "react";
import { connect } from "react-redux";
import { setCategory, setSuffering } from "../redux-actions/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";
import ProductsList from "../components/ProductsList";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyBreadcrumb from "../components/MyBreadcrumb";
import SearchBar from "../components/SearchBar";
import MyPagination from "../components/MyPagination";
import SufferingsDropdown from "../components/SufferingsDropdown";
import API from "../utils/API";

class Store extends Component {
  state = {
    // categories
    categories: [],
    // selCatId: 1,
    // selCatName: "",
    // sufferings
    sufferings: [],
    // selSuff: "Todos",
    // products
    products: [],
    pCounter: 0
  };

  fetchCategories = () => {
    API.fetchCategories()
      .then(res => {
        this.setState(
          { categories: res.data }
          // , () =>
          // // set the name of the first category in the state, for the breadcrumb to use
          // {
          //   // this.props.setCategory(this.state.categories[0].name);
          //   // this.props.setSuffering("Todos");
          //   // this.setState({
          //   //   selCatName: this.state.categories[0].name
          //   // });
          // }
        );
      })
      .catch(err => console.log(err));
  };

  fetchSufferingsByCategory = cat => {
    API.fetchSufferingsByCategory(cat)
      .then(res => {
        this.setState({ sufferings: res.data });
      })
      .catch(err => console.log(err));
  };

  fetchProducts = () => {
    let filters = {
      cat: this.props.routeProps.match.params.cat,
      suff: this.props.routeProps.match.params.suff
    };
    API.fetchProducts(filters)
      .then(res => {
        this.setState({
          products: res.data.products,
          pCounter: res.data.productsCounter
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log(this.props.routeProps.match.params.cat);
    this.fetchCategories();
    // this.fetchSufferingsByCategory(this.state.selCatId);
    // let data = {};
    // data.catId = this.state.selCatId;
    // data.suff = this.state.selSuff;
    // this.fetchProducts(data);
  }

  handleChangeCat = cat => {
    // change the cat in the state and set sufferings to ALL
    this.setState(
      {
        selCatId: cat.catId,
        selCatName: cat.catName,
        selSuff: "Todos"
      },
      () => {
        // breadcrumb
        this.props.setCategory(this.state.selCatName);
        this.props.setSuffering("Todos");
        // clear the sufferings in the state
        // and then load all sufferings from the selected cat
        this.setState({ sufferings: [] }, () => {
          this.fetchSufferingsByCategory(this.state.selCatId);
        });
        // next clear the products
        // and get all the products from that category and ALL sufferings
        // (that is because the default when changing a category is "Todos")
        this.setState({ products: [] }, () => {
          let data = {};
          data.catId = this.state.selCatId;
          data.suff = "Todos";
          this.fetchProducts(data);
        });
      }
    );
  };

  handleChangeSuff = suff => {
    this.setState(
      {
        selSuff: suff,
        products: []
      },
      () => {
        let data = {};
        data.catId = this.state.selCatId;
        data.suff = this.state.selSuff;
        this.fetchProducts(data);
      }
    );
  };

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
                  <h5 className="my-3 text-dark">
                    <strong>Categorías</strong>
                  </h5>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CategoriesList
                    categories={this.state.categories}
                    selectedCategoryId={this.state.selCatId}
                    handleChangeCategory={this.handleChangeCat}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="my-3 text-dark">
                    <strong>Marcas</strong>
                  </h5>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <BrandsList />
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
                  {/* <span className="text-muted">Filtros de categoría</span> */}
                  <SufferingsDropdown
                    sufferings={this.state.sufferings}
                    selectedSuffering={this.state.selSuff}
                    handleChangeSuffering={this.handleChangeSuff}
                  />
                </Col>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-md-end justify-content-sm-center py-2"
                >
                  <span className="text-muted mr-4">
                    <em>
                      {this.state.pCounter === 1 ? (
                        <span>{this.state.pCounter + " producto"}</span>
                      ) : (
                        <span>{this.state.pCounter + " productos"}</span>
                      )}
                    </em>
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

const mapDispatchToProps = {
  setCategory,
  setSuffering
};

export default connect(
  null,
  mapDispatchToProps
)(Store);
