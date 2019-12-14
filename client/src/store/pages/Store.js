import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./Layout";
import ProductsSection from "../store-comps/ProductsSection";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyBreadcrumb from "../components/MyBreadcrumb";
import "./store.scss";
import API from "../../utils/API";
import FilterSection from "../store-comps/FilterSection";
import SortDropdown from "../store-comps/SortDropdown";
import ProductsPerPageDropdown from "../store-comps/ProductsPerPageDropdown";

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
    API.fetchCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    API.fetchBrands()
      .then(res => setBrands(res.data))
      .catch(err => console.log(err));
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
      <Container fluid className="mt-3">
        <Row className="p-3">
          {/* left-column, filters */}
          <Col md={3}>
            <h2>Filtros</h2>
            <hr className="myDivider" />
            <FilterSection categories={categories} brands={brands} />
          </Col>
          {/* right-column, title, sorting and products */}
          <Col md={9}>
            {/* title */}
            <Row className="px-3 mb-2">
              <Col className="text-center">
                <h2 className="mt-1">Todos los productos</h2>
                <hr
                  className="myDivider mb-1 ml-auto"
                  style={{ backgroundColor: "#edcb58" }}
                />
              </Col>
            </Row>
            {/* sorting */}
            <Row className="px-3 mb-2">
              <div className="d-flex flex-row align-items-center justify-content-center mr-3">
                <span className="mr-2">Orden</span>
                <SortDropdown active={"Ninguno"} />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <span className="mr-2">Productos por página</span>
                <ProductsPerPageDropdown qty={20} />
              </div>
              <div className="ml-auto">{products.length} productos</div>
            </Row>
            {/* products */}
            <Row className="mb-3">
              <Col>
                <ProductsSection products={products} filter={filter} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default Store;
