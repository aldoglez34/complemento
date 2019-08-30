import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
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
    products: [],
    // modal
    showModal: false
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
    this.getProducts(data);
  }

  getProducts = data => {
    API.getProducts(data)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChangeCategory = cat => {
    // whenever the category changes
    // first change the cat in the state and set sufferings to ALL
    this.setState({
      selectedCategoryId: cat,
      selectedSuffering: "Todos"
    }, () => {
      // then clear the sufferings in the state
      // and then load all sufferings from the selected cat
      this.setState({ sufferings: [] },
        () => { this.sufferingsByCategory(this.state.selectedCategoryId); });
      // next clear the products
      // and get all the products from that category and ALL sufferings
      // (that is because the default when changing a category is Todos)
      this.setState({ products: [] },
        () => {
          let data = {};
          data.catId = this.state.selectedCategoryId;
          data.suff = "Todos";
          this.getProducts(data);
        });
    });
  };

  handleChangeSuffering = suff => {
    this.setState({
      selectedSuffering: suff,
      products: []
    }, () => {
      let data = {};
      data.catId = this.state.selectedCategoryId;
      data.suff = this.state.selectedSuffering;
      this.getProducts(data);
    });
  };

  showModal = name => this.setState({ productSelected: name }, () => this.setState({ showModal: true }));
  closeModal = () => this.setState({ showModal: false });

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

          {/* categories row */}
          <Row>
            <Col>
              {/* categories card */}
              <Card className="my-2 shadow-sm">
                <Card.Header className="text-success" as="h5">
                  <strong>Categorías</strong>
                </Card.Header>
                <Card.Body className="p-0 py-md-4">
                  <ul className="list-group list-group-horizontal-md justify-content-center flex-wrap">
                    {this.state.categories.length ? (
                      this.state.categories.map(category => {
                        if (category.categoryId === this.state.selectedCategoryId) {
                          return (
                            <button
                              type="button"
                              key={category.categoryId}
                              className="list-group-item border-0 rounded-0 active"
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
                              className="list-group-item border-0 rounded-0"
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
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* sufferings and products row */}
          <Row className="d-flex flex-row my-4">

            {/* left column */}
            <Col xs={12} md={4}>
              <Card className="my-2 shadow-sm">
                <Card.Header className="text-success" as="h5">
                  <strong>Padecimientos</strong>
                </Card.Header>
                <Card.Body className="p-0">
                  <div className="list-group shadow-sm">
                    {this.state.sufferings.length ? (
                      this.state.sufferings.map(suff => {
                        if (suff.name === this.state.selectedSuffering) {
                          return (
                            <button
                              type="button"
                              key={suff.name}
                              className="list-group-item list-group-item-action border-0 rounded-0 active"
                              onClick={() => this.handleChangeSuffering(suff.name)}>
                              {suff.name} <span className="badge badge-light ml-2">{suff.qty}</span>
                            </button>
                          );
                        } else {
                          return (
                            <button
                              type="button"
                              key={suff.name}
                              className="list-group-item list-group-item-action border-0 rounded-0"
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
                </Card.Body>
              </Card>
            </Col>

            {/* right column */}
            <Col xs={12} md={8}>
              {/* products */}
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.products.length ? (
                  this.state.products.map(product => {
                    return (
                      <Card
                        style={{ width: "9.7rem" }}
                        key={product.productId}
                        className="shadow-sm mt-2 mb-4 mx-2">
                        <Card.Header>
                          <a href={"/product/" + product.productId}>{product.name}</a>
                        </Card.Header>
                        {product.photo ? (
                          <Card.Img
                            variant="top"
                            height="250"
                            className="rounded-0"
                            src={"/images/products/" + product.photo} />
                        ) : (
                            <Card.Img
                              variant="top"
                              height="250"
                              className="rounded-0"
                              src={"/images/products/placeholder.jpg"}
                            />
                          )}
                        <Card.Body>
                          {/* <Card.Title>Card Title</Card.Title> */}
                          <Card.Text><strong>{"$" + product.price + " MXN"}</strong></Card.Text>
                          <Card.Text>{product.content}</Card.Text>
                          <Button variant="outline-primary" onClick={() => this.showModal(product.name)}>
                            Agregar<i className="fas fa-shopping-cart ml-2" />
                          </Button>
                        </Card.Body>
                      </Card>
                    );
                  })
                ) : (
                    <Spinner animation="border" role="status" variant="success" />
                  )}
              </div>
            </Col>
          </Row>

        </Container>

        {/* add new product modal */}
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Éxito.</Modal.Title>
          </Modal.Header>
          <Modal.Body>El producto <strong>{this.state.productSelected}</strong> ha sido agregado a tu carrito.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Cerrar</Button>
            <Button variant="primary" href="/cart">Ir al carrito <i className="fas fa-shopping-cart ml-2" /></Button>
          </Modal.Footer>
        </Modal>

      </Layout>
    );
  }
}

export default Store;

