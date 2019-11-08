import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import API from "../utils/API";
import ProductCard from "../components/ProductCard";

function ClientFavorites() {
  const breadcrumbRoutes = () => {
    return [
      { name: "Inicio", to: "/" },
      {
        name: "Aldo Solano",
        to: "/client/favorites/"
      },
      { name: "Mis favoritos", to: "active" }
    ];
  };

  const clientId = useSelector(state => state.client._id);
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.fetchFavorites(clientId)
      .then(res => {
        setProducts(res.data.favorites);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes()} />
      <Container className="mt-4">
        <Row>
          <Col>
            <h3>Mis favoritos</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-wrap justify-content-center">
              {isLoading ? (
                <div className="text-center my-4">
                  <Spinner animation="grow" role="status" variant="success" />
                </div>
              ) : products ? (
                products.map(product => {
                  return <ProductCard key={product._id} product={product} />;
                })
              ) : (
                <span>Tu lista de favoritos está vacía</span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default ClientFavorites;
