import React from "react";
import Layout from "./Layout";

function NoMatch() {
  return (
    <Layout>
      <div className="text-center p-4">
        <h1 className="display-2">404</h1>
        <h1>Error</h1>
        <p className="lead">La página que estás buscando no existe</p>
      </div>
    </Layout>
  );
}

export default NoMatch;
