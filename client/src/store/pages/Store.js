import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "./Layout";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";
import ProductsSection from "../components/ProductsSection";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyBreadcrumb from "../components/MyBreadcrumb";
import "./store.scss";
import API from "../utils/API";

function Store() {
  const breadcrumbRoute = () => {
    return [
      { name: "Inicio", to: "/" },
      { name: "Tienda", to: "/store" },
      { name: "Todos los productos", to: "active" }
    ];
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // fetch categories
    API.fetchCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    // fetch brands
    API.fetchBrands()
      .then(res => setBrands(res.data))
      .catch(err => console.log(err));
    // fetch all products
    API.fetchProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleFiltering = filter => {
    setFilter(filter);
  };

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoute()} />
      <Container fluid className="my-3">
        <Row className="px-3">
          <Col md={3} className="mt-2">
            <Row>
              <Col>
                <div className="mt-3 mb-1 d-flex flex-row align-items-center">
                  <h4 className="mb-0 mr-1">
                    <strong>Filtros</strong>
                  </h4>
                  <i className="fas fa-filter" />
                  <Button
                    id="clearFiltersBttn"
                    disabled={filter === "" ? true : false}
                    onClick={() => setFilter("")}
                  >
                    <i className="fas fa-times clearFiltersTimes" />
                  </Button>
                </div>
                <hr className="myDivider mb-1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <CategoriesList
                  categories={categories}
                  filter={filter}
                  handleFiltering={handleFiltering}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <BrandsList
                  brands={brands}
                  filter={filter}
                  handleFiltering={handleFiltering}
                />
              </Col>
            </Row>
          </Col>
          <Col md={9} className="mt-2">
            <ProductsSection products={products} filter={filter} />
          </Col>
        </Row>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default Store;
