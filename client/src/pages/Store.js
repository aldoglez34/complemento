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

function Store() {
  return (
    <Layout>
      <MyBreadcrumb />
      <Container fluid className="my-3">
        <Row>
          {/* left column */}
          <Col md={3} className="mt-2">
            <Row>
              <Col>
                <h4 className="my-3">
                  <strong>Categorías</strong>
                </h4>
                <hr className="mb-1" />
              </Col>
            </Row>
            <Row>
              <Col>
                {/* in order to get the value from the url, it's necessary to declare the component like this */}
                <Route
                  render={props => <CategoriesList routeProps={props} />}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 className="my-3">
                  <strong>Marcas</strong>
                </h4>
                <hr className="mb-1" />
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
              <Col>
                <h4 className="my-3">
                  <strong>Productos</strong>
                </h4>
                <hr className="mb-3" />
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
