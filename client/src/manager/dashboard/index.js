import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ManagerLayout from "../ManagerLayout";
import { CardColumns, Spinner } from "react-bootstrap";
import APIManager from "../../utils/APIManager";
import API from "../../utils/API";
import moment from "moment";
import LastProductCard from "./components/LastProductCard";
import LastSaleCard from "./components/LastSaleCard";
import LastProviderCard from "./components/LastProviderCard";
import LastClientCard from "./components/LastClientCard";
import CategoriesCard from "./components/CategoriesCard";
import LastMessageCard from "./components/LastMessageCard";

const Dashboard = React.memo(() => {
  moment.locale("es");

  const manager = useSelector((state) => state.user);

  const [latestProd, setLatestProd] = useState();
  const [categories, setCategories] = useState();
  const [lastProvider, setLastProvider] = useState();
  const [lastSale, setLastSale] = useState();
  const [lastClient, setLastClient] = useState();
  const [lastMessage, setLastMessage] = useState();

  useEffect(() => {
    APIManager.mngr_fetchLatestProduct()
      .then((res) => setLatestProd(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el último producto.");
      });
    API.fetchCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar las categorías.");
      });
    APIManager.mngr_fetchLastProvider()
      .then((res) => setLastProvider(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el último proveedor.");
      });
    APIManager.mngr_fetchLastSale()
      .then((res) => setLastSale(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar la última venta.");
      });
    APIManager.mngr_fetchLastClient()
      .then((res) => setLastClient(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el último cliente.");
      });
    APIManager.mngr_fetchLastMessage()
      .then((res) => setLastMessage(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar el último mensaje.");
      });
  }, []);

  return manager ? (
    <ManagerLayout leftBarActive="Panel" title="Panel" button={null}>
      {latestProd &&
      categories &&
      lastProvider &&
      lastSale &&
      lastClient &&
      lastMessage ? (
        <CardColumns>
          <LastProductCard product={latestProd} />
          <LastMessageCard message={lastMessage} />
          <LastSaleCard sale={lastSale} />
          <LastProviderCard provider={lastProvider} />
          <LastClientCard client={lastClient} />
          <CategoriesCard categories={categories} />
        </CardColumns>
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  ) : null;
});

export default Dashboard;
