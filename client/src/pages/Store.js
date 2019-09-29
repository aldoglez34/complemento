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
import SufferingsDropdown from "../components/SufferingsDropdown";
import API from "../utils/API";

class Store extends Component {
  state = {
    categories: [],
    catFilter: null,
    sufferings: [],
    suffFilter: null,
    products: [],
    pCounter: 0,
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
    API.fetchProducts(filters)
      .then(res => {
        console.log(res.data);
        this.setState({
          products: res.data.products,
          pCounter: res.data.productsCounter,
          pages: res.data.pages
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchCategories();
    this.fetchProducts();
    // this.fetchSufferings(this.state.selCatId);
    // let data = {};
    // data.catId = this.state.selCatId;
    // data.suff = this.state.selSuff;
    // this.fetchProducts(data);
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
                    selected={this.state.catFilter}
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
            <Col md={9} className="mt-2">
              <Row>
                <Col md={6} className="d-flex align-items-center py-2">
                  <em>
                    {this.state.pCounter === 1 ? (
                      <>{this.state.pCounter + " producto"}</>
                    ) : (
                      <>{this.state.pCounter + " productos"}</>
                    )}
                  </em>
                </Col>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-md-end justify-content-sm-center py-2"
                >
                  {/* <SufferingsDropdown /> */}
                  Sufferings dropdown
                  {/* <MyPagination
                    pages={this.state.pages}
                    activeP={this.state.activeP}
                  /> */}
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <ProductsList productsArr={this.state.products} />
                </Col>
              </Row>
              <Row>
                <Container>
                  <MyPagination
                    pages={this.state.pages}
                    activeP={this.state.activeP}
                  />
                </Container>
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
