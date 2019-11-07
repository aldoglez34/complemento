import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import { Container } from "react-bootstrap";

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

  const [products, setProducts] = useState();
  const favorites = useSelector(state => state.client.favorites);

  // useEffect(() => {}, []);

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes()} />
      <Container className="mt-4">aquí van los favoritos</Container>
    </Layout>
  );
}

export default ClientFavorites;
