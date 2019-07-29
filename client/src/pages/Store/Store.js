import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout/Layout";
import MyHeader from "../../components/MyHeader/MyHeader";
import MyBreadcrum from "../../components/MyBreadcrum/MyBreadcrum";
import API from "../../utils/API";

class Store extends Component {
  
  state = {
    categories: []
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    API.loadCategories()
      .then(res => {
        console.log("printing res.data from API");
        console.log(res.data);
        this.setState({ categories: res.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Layout>
        <MyHeader
          bgPhoto="url('images/bg-header-store.jpg')"
          title="Nuestra Tienda"
          text="Contamos con un selecto catálogo de productos naturistas,
            remedios herbolarios, suplementos alimenticios y medicina alternativa a precios de laboratorio,
            hechos a base de plantas, raíces y hierbas."
        />
        <Container>
          <strong>Navegación</strong>
          <MyBreadcrum />

          <Row className="mb-3">
            {/* category filters */}
            <div className="col-12 col-md-4">
              <strong>Categorías</strong>
              <div className="list-group my-3">
                {/* {this.state.categories.map(category => (
                  <span
                    key={category.id}
                    className="list-group-item list-group-item-action"
                  >
                    {category.name}
                  </span>
                ))} */}
              </div>
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