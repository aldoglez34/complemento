import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as storeActions from "../redux-actions/store";
import { Container, Row, Col, Button } from "react-bootstrap";
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

  const filter = useSelector(state => state.store.filter);
  const dispatch = useDispatch();

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoute()} />
      <Container fluid className="my-3">
        <Row className="px-3">
          <Col md={3} className="mt-2">
            {/* title */}
            <Row>
              <Col>
                <div className="mt-3 mb-1 d-flex flex-row align-items-center">
                  <h4 className="mb-0 mr-1">
                    <strong>Filtros</strong>
                  </h4>
                  <Button
                    id="clearFiltersBttn"
                    disabled={filter === null ? true : false}
                    onClick={() => dispatch(storeActions.clearFilter())}
                  >
                    <i className="fas fa-times clearFiltersTimes" />
                  </Button>
                </div>
                <hr className="myDivider mb-1" />
              </Col>
            </Row>
            {/* categories */}
            <Row>
              <Col>
                <CategoriesList />
              </Col>
            </Row>
            {/* brands */}
            <Row>
              <Col>
                <BrandsList />
              </Col>
            </Row>
          </Col>
          <Col md={9} className="mt-2">
            {/* title */}
            <Row>
              <Col className="text-center">
                <h4 className="mt-3 mb-1">
                  <strong>
                    {filter !== null ? filter : "Todos los productos"}
                  </strong>
                </h4>
                <hr
                  className="myDivider mb-1 ml-auto"
                  style={{ backgroundColor: "#edcb58" }}
                />
              </Col>
            </Row>
            {/* in order to get the value from the url, it's necessary to declare the component like this */}
            <Route render={props => <ProductsSection routeProps={props} />} />
            {/* <ProductsSection /> */}
          </Col>
        </Row>
      </Container>
      <HelpButton />
      <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
    </Layout>
  );
}

export default Store;
