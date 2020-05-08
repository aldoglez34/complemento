import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { Container, Spinner } from "react-bootstrap";
import API from "../../utils/API";

const ClientOrders = React.memo(() => {
  const client = useSelector((state) => state.user);

  const [orders, setOrders] = useState();

  useEffect(() => {
    API.fetchOrders(client._id)
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar los favoritos.");
      });
  }, []);

  return (
    <Layout>
      <Container className="my-4">
        <h3>Mis pedidos</h3>
        <hr className="myDivider" />
        <div className="d-flex flex-wrap justify-content-center">
          {orders ? (
            orders.length ? (
              orders.map((or) => {
                return <span>{or}</span>;
              })
            ) : (
              <span>Tu lista de pedidos está vacía</span>
            )
          ) : (
            <div className="text-center my-4">
              <Spinner variant="warning" animation="grow" role="status" />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
});

export default ClientOrders;
