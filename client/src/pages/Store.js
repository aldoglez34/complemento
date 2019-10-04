import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";
import ProductsSection from "../components/ProductsSection";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import MyBreadcrumb from "../components/MyBreadcrumb";
import ProductDetails from "../components/ProductDetails";

function Store() {
  return (
    <Layout>
      <Container fluid className="mb-3 mt-md-3">
        <Row className="mt-md-3">
          {/* left column */}
          <Col md={3} className="mt-2">
            <Row>
              <Col>
                <h5 className="my-3">
                  <strong>Categorías</strong>
                </h5>
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
                <h5 className="my-3">
                  <strong>Marcas</strong>
                </h5>
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
            <Container>
              <Row>
                <Col>
                  <MyBreadcrumb />
                </Col>
              </Row>
              {/* begins */}
              <Router>
                <Switch>
                  <Route exact path="/store" component={ProductsSection} />
                  <Route
                    exact
                    path="/store/:cat"
                    render={props => <ProductsSection routeProps={props} />}
                  />
                  <Route
                    exact
                    path="/store/product/:productId"
                    render={props => <ProductDetails routeProps={props} />}
                  />
                </Switch>
              </Router>
              {/* ends */}
            </Container>
          </Col>
        </Row>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default Store;
