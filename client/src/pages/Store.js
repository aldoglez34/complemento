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
import MyPagination from "../components/MyPagination";
import API from "../utils/API";

class Store extends Component {
  state = {
    intervalId: 0,
    categories: [],
    catFilter: null,
    brands: [],
    sufferings: [],
    suffFilter: null,
    products: [],
    pCounter: 0,
    pPerPage: 20,
    pages: 0,
    activeP: 1
  };

  fetchCategories = () => {
    API.fetchCategories()
      .then(res => {
        this.setState({ categories: res.data });
      })
      .catch(err => console.log(err));
  };

  fetchProducts = () => {
    let filters = {};
    // there are 3 possible scenarios here
    // 1 /store means there are no filters so fetch all the products
    // 2 /store/cat means there is a filter of category
    // 3 /store/cat/suff means there are two filters
    if (this.props.routeProps === undefined) {
      // 1 - no filters
      filters.cat = null;
      filters.suff = null;
    } else {
      if (
        this.props.routeProps.match.params.cat &&
        !this.props.routeProps.match.params.suff
      ) {
        // 2 - cat filter
        filters.cat = this.props.routeProps.match.params.cat;
        filters.suff = null;
        this.setState({ catFilter: this.props.routeProps.match.params.cat });
      }
      if (
        this.props.routeProps.match.params.cat &&
        this.props.routeProps.match.params.suff
      ) {
        // 3 - cat and suff filters
        filters.cat = this.props.routeProps.match.params.cat;
        filters.suff = this.props.routeProps.match.params.suff;
        this.setState({ catFilter: this.props.routeProps.match.params.cat });
        this.setState({ suffFilter: this.props.routeProps.match.params.suff });
      }
    }
    // fetch products
    API.fetchProducts(filters)
      .then(res => {
        let pPerPage = this.state.pPerPage;
        this.setState({
          products: res.data,
          pCounter: res.data.length,
          pages: Math.ceil(res.data.length / pPerPage)
        });
      })
      .catch(err => console.log(err));
  };

  fetchBrands = () => {
    API.fetchBrands()
      .then(res => {
        this.setState({ brands: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchCategories();
    this.fetchProducts();
    this.fetchBrands();
    // this.fetchSufferings(this.state.selCatId);
    // let data = {};
    // data.catId = this.state.selCatId;
    // data.suff = this.state.selSuff;
    // this.fetchProducts(data);
  }

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

  handleChangePage = page => {
    this.setState({ activeP: page }, () => this.scrollToTop());
  };

  render() {
    return (
      <Layout>
        {/* <MyBreadcrumb /> */}
        <Container fluid className="mb-3 mt-md-3">
          <Row className="mt-md-3">
            {/* categories column */}
            <Col md={3} className="mt-2">
              <Row>
                <Col>
                  <h5 className="my-3">
                    <strong style={{ color: "#0c2c2c" }}>Categorías</strong>
                  </h5>
                  <hr className="mb-1" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CategoriesList
                    categories={this.state.categories}
                    selected={this.state.catFilter}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="my-3">
                    <strong style={{ color: "#0c2c2c" }}>Marcas</strong>
                  </h5>
                  <hr className="mb-1" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <BrandsList brands={this.state.brands} />
                </Col>
              </Row>
            </Col>
            {/* products, filters, sufferings column */}
            <Col md={9} className="mt-2">
              <Container>
                <Row>
                  <Col>
                    <MyBreadcrumb />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6} className="d-flex align-items-center py-2">
                    <span>
                      {this.state.pCounter === 1 ? (
                        <>{"Mostrando " + this.state.pCounter + " producto"}</>
                      ) : (
                        <>{"Mostrando " + this.state.pCounter + " productos"}</>
                      )}
                    </span>
                  </Col>
                  <Col
                    md={6}
                    className="d-flex align-items-center justify-content-md-end justify-content-sm-center py-2"
                  >
                    <span>
                      Página {this.state.activeP + " de " + this.state.pages}
                    </span>
                  </Col>
                </Row>
                {/* BEGINS what is supposed to change */}
                <div className="bg-info">
                  <h1>{this.state.catFilter}</h1>
                  <Row className="mb-2">
                    <Col>
                      <ProductsList
                        productsArr={this.state.products}
                        activeP={this.state.activeP}
                        productsPerPage={this.state.pPerPage}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col className="d-flex justify-content-center">
                      <MyPagination
                        pages={this.state.pages}
                        activeP={this.state.activeP}
                        handleChangePage={this.handleChangePage}
                      />
                    </Col>
                  </Row>
                </div>
                {/* ENDS what is supposed to change */}
              </Container>
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
