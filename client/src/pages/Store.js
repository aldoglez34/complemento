import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import SufferingsList from "../components/SufferingsList";
import HelpButton from "../components/HelpButton";
import CustomDropdown from "../components/CustomDropdown";
import API from "../utils/API";

// const styles = {
//   header: {
//     backgroundImage: "url('images/bg-header-store.jpg')",
//     backgroundSize: "cover",
//     backgroundBlendMode: "multiply"
//   }
// };

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
        <Container>
          <Row className="mt-4">
            <Col md={6}>
              <Row>
                <CustomDropdown
                  title="Categorías"
                  items={this.state.categories}
                  activeItem="Alimentos Terapéuticos"
                />
              </Row>
              <Row>
                <CustomDropdown
                  title="Padecimientos"
                  items={this.state.sufferings}
                  activeItem="Todos"
                />
              </Row>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              pagination...
            </Col>
          </Row>
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

        <HelpButton />
      </Layout>
    );
  }
}

export default Store;
