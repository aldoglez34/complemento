import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import SufferingsList from "../components/SufferingsList";
import ScrollButton from "../components/ScrollButton";
import API from "../utils/API";

const styles = {
  header: {
    backgroundImage: "url('images/bg-header-store.jpg')",
    // backgroundColor: "gray",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply"
  }
  // ,
  // container: {
  //   marginLeft: 115,
  //   marginRight: 115
  // }
};

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

  componentDidMount() {
    this.loadCategories();
    this.sufferingsByCategory(this.state.selectedCategoryId);
    let data = {};
    data.catId = this.state.selectedCategoryId;
    data.suff = this.state.selectedSuffering;
    this.getStoreProducts(data);
  }

  getStoreProducts = data => {
    API.getStoreProducts(data)
      .then(res => {
        console.log(res.data);
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

  render() {
    return (
      <Layout>
        {/* header */}
        <Container className="py-4 mb-5" style={styles.header} fluid>
          <Container className="py-4">
            <Row>
              <Col>
                <h1 className="text-light mt-0 mb-2">Nuestra tienda</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="lead mb-4 text-light">
                  Contamos con un selecto catálogo de productos naturistas,
                  remedios herbolarios, suplementos alimenticios y medicina
                  alternativa a precios de laboratorio, hechos a base de
                  plantas, raíces y hierbas.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid>
          {/* categories row */}
          <Row>
            <Col>
              {/* categories list */}
              <CategoriesList
                categories={this.state.categories}
                selectedCategoryId={this.state.selectedCategoryId}
                handleChangeCategory={this.handleChangeCategory}
              />
            </Col>
          </Row>

          {/* sufferings and products row */}
          <Row className="d-flex flex-row my-4">
            {/* left column */}
            <Col xs={12} md={4}>
              {/* sufferings list */}
              <SufferingsList
                sufferings={this.state.sufferings}
                selectedSuffering={this.state.selectedSuffering}
                handleChangeSuffering={this.handleChangeSuffering}
              />
            </Col>

            {/* right column */}
            <Col xs={12} md={8}>
              {/* products list */}
              <ProductsList productsArr={this.state.products} />
            </Col>
          </Row>
        </Container>

        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </Layout>
    );
  }
}

export default Store;
