import React from "react";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";

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

  return (
    <Layout>
      <MyBreadcrumb routes={breadcrumbRoutes()} />
    </Layout>
  );
}

export default ClientFavorites;
