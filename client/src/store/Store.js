import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsSection from "./components/ProductsSection";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import "./store.scss";
import API from "../utils/API";
import FilterSection from "./components/FilterSection";
import SortDropdown from "./components/SortDropdown";
import ProductsPerPageDropdown from "./components/ProductsPerPageDropdown";

function Store(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [filter, setFilter] = useState();

  useEffect(() => {
    API.fetchCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    API.fetchBrands()
      .then(res => setBrands(res.data))
      .catch(err => console.log(err));
    API.fetchProducts()
      .then(res => {
        // no filters
        if (
          !props.routeProps.match.params.brand ||
          !props.routeProps.match.params.category
        ) {
          setProducts(res.data);
        }
        // category filter
        if (props.routeProps.match.params.category) {
          setFilter(props.routeProps.match.params.category);
          setProducts(
            res.data.filter(
              p => p.category.name === props.routeProps.match.params.category
            )
          );
        }
        // brand filter
        if (props.routeProps.match.params.brand) {
          setFilter(props.routeProps.match.params.brand);
          setProducts(
            res.data.filter(
              p => p.brand === props.routeProps.match.params.brand
            )
          );
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      {products.length && categories.length && brands.length ? (
        <>
          <Container fluid className="mt-3">
            <Row className="p-3">
              {/* left-column, filters */}
              <Col md={3}>
                <h2>Filtros</h2>
                <hr className="myDivider" />
                <FilterSection
                  categories={categories}
                  brands={brands}
                  filterSelected={filter}
                />
              </Col>
              {/* right-column, title, sorting and products */}
              <Col md={9}>
                {/* title */}
                <Row className="px-3 mb-2">
                  <Col className="text-center">
                    <h2 className="mt-1">
                      {!filter ? "Todos los productos" : filter}
                    </h2>
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
                    <ProductsSection products={products} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <HelpButton />
          <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
        </>
      ) : (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </Layout>
  );
}

export default Store;
