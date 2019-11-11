import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";
import ProductsSection from "../components/ProductsSection";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyBreadcrumb from "../components/MyBreadcrumb";
import "./store.scss";

function Store(props) {
  const breadcrumbRoute = () => {
    let cat = props.routeProps.match.params.cat;
    if (cat === undefined) {
      return [
        { name: "Inicio", to: "/" },
        { name: "Tienda", to: "/store" },
        { name: "Todos los productos", to: "active" }
      ];
    } else {
      return [
        { name: "Inicio", to: "/" },
        { name: "Tienda", to: "/store" },
        { name: cat, to: "active" }
      ];
    }
  };

  const title = () => {
    let filter;
    if (props.routeProps.match.params.cat === undefined) {
      filter = "Todos los productos";
    } else {
      filter = props.routeProps.match.params.cat;
    }
    return filter;
  };

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoute()} />
      <Container fluid className="my-3">
        <Row className="px-3">
          {/* left column */}
          <Col md={3} className="mt-2">
            <Row>
              <Col>
                <h4 className="mt-3 mb-1">
                  <strong>Categorías</strong>
                </h4>
                <hr className="myDivider mb-1" />
              </Col>
            </Row>
            <Row>
              <Col>
                {/* in order to get the value from the url, it's necessary to declare the component like this (as a route) */}
                <Route
                  render={props => <CategoriesList routeProps={props} />}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 className="mt-3 mb-1">
                  <strong>Marcas</strong>
                </h4>
                <hr className="myDivider mb-1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <BrandsList />
              </Col>
            </Row>
          </Col>
          {/* right column */}
          <Col md={9} className="mt-2">
            <Row>
              <Col className="text-center">
                <h4 className="mt-3 mb-1">
                  <strong>{title()}</strong>
                </h4>
                <hr
                  className="myDivider mb-1 ml-auto"
                  style={{ backgroundColor: "#edcb58" }}
                />
              </Col>
            </Row>
            {/* in order to get the value from the url, it's necessary to declare the component like this */}
            <Route render={props => <ProductsSection routeProps={props} />} />
          </Col>
        </Row>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default Store;
