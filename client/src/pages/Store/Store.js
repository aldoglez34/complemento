import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout/Layout";
import MyBreadcrum from "../../components/MyBreadcrum/MyBreadcrum";
import API from "../../utils/API";

const styles = {
  header: {
    backgroundImage: "url('images/bg-header-store.jpg')",
    backgroundColor: "gray",
    backgroundBlendMode: "multiply"
  }
};

class Store extends Component {
  state = {
    categories: null,
    selectedCategoryId: 2,
    sufferings: null,
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
        console.log(res.data);
        // this.setState({ sufferings: res.data });
      })
      .catch(err => console.log(err));
  };

  productsByCategory = cat => {
    API.productsByCategory(cat)
      .then(res => {
        console.log(res.data);
        // this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadCategories();
    this.sufferingsByCategory(2);
    this.productsByCategory(2);
  }

  render() {
    return (
      <Layout>
        <header className="py-5 mb-5" style={styles.header}>
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

        <Container>
          <MyBreadcrum
            pages={[
              { page: "Inicio", link: "/" },
              { page: "Tienda", link: "nolink" }
            ]}
          />

          <Row className="mb-3">
            {/* category filters */}
            <div className="col-12 col-md-4">
              <strong>Categorías</strong>
              <ul className="list-group my-3">
                {/* categories filter */}
                {this.state.categories ? (
                  this.state.categories.map(category => (
                    <li key={category.categoryId} className="list-group-item">
                      {category.name}
                    </li>
                    // <span
                    //   key={category.categoryId}
                    //   className="list-group-item list-group-item-action item"
                    // >
                    //   {category.name}
                    // </span>
                  ))
                ) : (
                  <Spinner animation="border" role="status" variant="success" />
                )}
              </ul>
            </div>
            {/* products */}
            <div className="col-12 col-md-8">
              {/* sufferings */}
              <div className="d-flex flex-wrap">
                <div className="dropdown mr-auto">
                  <button
                    className="btn btn-transparent dropdown-toggle py-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <strong className="text-primary" id="suffsText">
                      Todos los Padecimientos
                    </strong>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    id="sufferingsdropdown"
                  />
                </div>
                <strong
                  className="pt-0 px-md-3 px-3 text-secondary"
                  id="totalProducts"
                />
              </div>
              {/* pagination */}
              <nav className="mt-3" aria-label="...">
                <ul
                  className="pagination pagination-sm justify-content-center"
                  id="pages"
                >
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">
                      1<span className="sr-only">(current)</span>
                    </span>
                  </li>
                </ul>
              </nav>
              {/* product rendering */}
              <nav
                className="d-flex flex-wrap justify-content-center"
                id="cards"
              />
            </div>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Store;
