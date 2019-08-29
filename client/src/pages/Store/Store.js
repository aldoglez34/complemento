import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Layout from "../../components/Layout/Layout";
import API from "../../utils/API";
import "./store.css";

const styles = {
  header: {
    backgroundImage: "url('images/bg-header-store.jpg')",
    backgroundColor: "gray",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply"
  },
  container: {
    marginLeft: 115,
    marginRight: 115
  }
};

class Store extends Component {
  state = {
    // breadcrum
    items: [{ item: "Inicio", link: "/store" }],
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
        // console.log(res.data);
        this.setState({ sufferings: res.data });
      })
      .catch(err => console.log(err));
  };

  productsByCategory = cat => {
    API.productsByCategory(cat)
      .then(res => {
        // console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  productsByCatAndSuff = data => {
    API.productsByCatAndSuff(data)
      .then(res => {
        // console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadCategories();
    this.sufferingsByCategory(this.state.selectedCategoryId);
    this.productsByCategory(this.state.selectedCategoryId);
  }

  handleChangeCategory = cat => {
    this.setState({ selectedCategoryId: cat, selectedSuffering: "Todos" },
      () => {
        this.setState({ sufferings: [] },
          () => {
            this.sufferingsByCategory(this.state.selectedCategoryId);
          });
        this.setState({ products: [] },
          () => {
            this.productsByCategory(this.state.selectedCategoryId);
          });
      });
  };

  handleChangeSuffering = suff => {
    this.setState({ selectedSuffering: suff, products: [] },
      () => {
        let data = {};
        data.catId = this.state.selectedCategoryId;
        data.suff = this.state.selectedSuffering;
        this.productsByCatAndSuff(data);
      });
  };

  render() {
    return (
      <Layout>

        <header className="py-5 mb-4" style={styles.header}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 text-white mt-5 mb-2">
                  Nuestra Tienda
                </h1>
                <p className="lead mb-5 text-light">
                  Contamos con un selecto catálogo de productos naturistas,
                  remedios herbolarios, suplementos alimenticios y medicina
                  alternativa a precios de laboratorio, hechos a base de
                  plantas, raíces y hierbas.
                </p>
              </div>
            </div>
          </div>
        </header>

        <Container fluid>

          {/* categories */}

          <div className="d-flex flex-row flex-wrap">

            <ul className="list-group list-group-horizontal-lg shadow-sm mt-2 mb-3">
              {this.state.categories.length ? (
                this.state.categories.map(category => {
                  if (category.categoryId === this.state.selectedCategoryId) {
                    return (
                      <button
                        type="button"
                        key={category.categoryId}
                        className="catItem activeItem"
                        onClick={() =>
                          this.handleChangeCategory(category.categoryId)
                        }
                      >
                        {category.name}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        type="button"
                        key={category.categoryId}
                        className="catItem"
                        onClick={() =>
                          this.handleChangeCategory(category.categoryId)
                        }
                      >
                        {category.name}
                      </button>
                    );
                  }
                })
              ) : (
                  <Spinner animation="border" role="status" variant="success" />
                )}
            </ul>

          </div>

          <Row className="d-flex flex-row mb-3">

            {/* column 1 */}
            <div className="col-12 col-md-4">

              {/* sufferings */}
              <div className="list-group my-3 shadow-sm">
                {this.state.sufferings.length ? (
                  this.state.sufferings.map(suff => {
                    if (suff.name === this.state.selectedSuffering) {
                      return (
                        <button
                          type="button"
                          key={suff.name}
                          className="list-group-item list-group-item-action active"
                          onClick={() => this.handleChangeSuffering(suff.name)}>
                          {suff.name} <span className="badge badge-light ml-2">{suff.qty}</span>
                        </button>
                      );
                    } else {
                      return (
                        <button
                          type="button"
                          key={suff.name}
                          className="list-group-item list-group-item-action"
                          onClick={() => this.handleChangeSuffering(suff.name)}>
                          {suff.name} <span className="badge badge-secondary ml-2">{suff.qty}</span>
                        </button>
                      );
                    }
                  })
                ) : (
                    <Spinner animation="border" role="status" variant="success" />
                  )}
              </div>

            </div>

            {/* column 2 */}
            <div className="col-12 col-md-8">

              {/* search bar */}
              <Form inline className="justify-content-center my-3">
                <FormControl type="text" placeholder="Buscar en la tienda" className="w-75 mr-3" />
                <Button variant="outline-primary">Buscar</Button>
              </Form>

              {/* products */}
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.products.length ? (
                  this.state.products.map(product => {
                    return (
                      <Card
                        style={{ width: "9.5rem" }}
                        key={product.productId}
                        className="shadow-sm m-2">
                        <Card.Header>
                          <a href={"/product/" + product.productId}>{product.name}</a>
                        </Card.Header>
                        {product.photo ? (
                          <Card.Img
                            variant="top"
                            height="250"
                            src={"/images/products/" + product.photo} />
                        ) : (
                            <Card.Img
                              variant="top"
                              height="250"
                              src={"/images/products/placeholder.jpg"}
                            />
                          )}
                        <Card.Body>
                          {/* <Card.Title>Card Title</Card.Title> */}
                          <Card.Text className="h4">{product.price}</Card.Text>
                          <Card.Text>{product.content}</Card.Text>
                          <Button variant="success">
                            <i className="fas fa-shopping-cart mr-2" />
                            Agregar
                          </Button>
                        </Card.Body>
                      </Card>
                    );
                  })
                ) : (
                    <Spinner animation="border" role="status" variant="success" />
                  )}
              </div>

            </div>

          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Store;

