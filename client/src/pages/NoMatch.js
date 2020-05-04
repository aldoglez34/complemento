import React from "react";
import Layout from "../components/Layout";
import { Image } from "react-bootstrap";

const NoMatch = React.memo(function NoMatch() {
  return (
    <Layout>
      <div className="text-center p-4 mt-5">
        <Image src="./images/404.png" width="200px" height="200px" />
        <h1 className="display-2">404</h1>
        <p className="lead">La página que estás buscando no existe.</p>
      </div>
    </Layout>
  );
});

export default NoMatch;
