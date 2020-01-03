import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { Container, Spinner } from "react-bootstrap";
import API from "../utils/API";
import ProductCard from "../components/cards/ProductCard";

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

  return (
    <Layout>
      <Container className="mt-4">
        <h2>Mis favoritos</h2>
        <hr className="myDivider" />
        <div className="d-flex flex-wrap justify-content-center">
          {isLoading ? (
            <div className="text-center my-4">
              <Spinner variant="warning" animation="grow" role="status" />
            </div>
          ) : favorites.length ? (
            favorites.map(fav => {
              return <ProductCard key={fav._id} product={fav} />;
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
