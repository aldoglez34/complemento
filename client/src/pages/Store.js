import React, { Component } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addProducts } from "./actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import SufferingsList from "../components/SufferingsList";
import API from "../utils/API";

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
    // categories
    categories: [],
    selectedCategoryId: 1,
    // sufferings
    sufferings: [],
    selectedSuffering: "Todos",
    // products
    products: [],
    // modal
    showModal: false,
    // cart
    cartCounter: 0
  };

  getCartCounter = () => {
    let counter = localStorage.getItem("cn_counter");
    if (!counter) {
      localStorage.setItem("cn_counter", 0);
    } else {
      this.setState({ cartCounter: localStorage.getItem("cn_counter") });
    }
  }

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
    console.log("component mounted - store");
    this.getCartCounter();
    this.loadCategories();
    this.sufferingsByCategory(this.state.selectedCategoryId);
    let data = {};
    data.catId = this.state.selectedCategoryId;
    data.suff = this.state.selectedSuffering;
    this.getProducts(data);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated - store");
    // console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("component unmounted - store");
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

  handleAddToCart = data => {
    // show modal with the name of the product selected
    this.showModal(data.productName);
    // get the counter and increase it
    let counter = localStorage.getItem("cn_counter");
    counter++;
    // save the new item
    localStorage.setItem("cn_item" + counter, data.productId);
    // set the increased counter back in the local storage
    localStorage.setItem("cn_counter", counter);
    // update the counter in the state
    this.setState({ cartCounter: counter });
  }

  showModal = name => this.setState({ productSelected: name }, () => this.setState({ showModal: true }));
  closeModal = () => this.setState({ showModal: false });

  render() {

    console.log("rendering component - store");

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
              {/* categories list */}
              <CategoriesList
                categories={this.state.categories}
                selectedCategoryId={this.state.selectedCategoryId}
                handleChangeCategory={this.handleChangeCategory} />
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
                handleChangeSuffering={this.handleChangeSuffering} />
            </Col>

            {/* right column */}
            <Col xs={12} md={8}>
              {/* products list */}
              <ProductsList products={this.state.products} handleAddToCart={this.handleAddToCart} />
            </Col>

          </Row>

        </Container>

        {/* add new product modal */}
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Éxito.</Modal.Title>
          </Modal.Header>
          <Modal.Body>El producto <strong>{this.state.productSelected}</strong> ha sido agregado exitosamente a tu carrito.</Modal.Body>
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
