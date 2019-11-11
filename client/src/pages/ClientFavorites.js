import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import { Container, Spinner } from "react-bootstrap";
import API from "../utils/API";
import ProductCard from "../components/ProductCard";

function ClientFavorites() {
  const client = useSelector(state => state.client);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    API.fetchFavorites(client._id)
      .then(res => {
        setFavorites(res.data.favorites);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const breadcrumbRoutes = () => {
    return [
      { name: "Inicio", to: "/" },
      {
        name: client.name + " " + client.firstSurname,
        to: "/client/info/"
      },
      { name: "Mis favoritos", to: "active" }
    ];
  };

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes()} />
      <Container className="mt-4">
        <h2 className="mb-1">Mis favoritos</h2>
        <hr className="myDivider mb-1" />
        <div className="d-flex flex-wrap justify-content-center">
          {isLoading ? (
            <div className="text-center my-4">
              <Spinner className="spinnerStyle" animation="grow" role="status" />
            </div>
          ) : favorites.length ? (
            favorites.map(fav => {
              return <ProductCard key={fav} product={fav} />;
            })
          ) : (
            <span>Tu lista de favoritos está vacía</span>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export default ClientFavorites;
