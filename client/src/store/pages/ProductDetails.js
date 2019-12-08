import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import Layout from "./Layout";
import MyBreadcrumb from "../components/MyBreadcrumb";
import API from "../../utils/API";
import HelpButton from "../components/HelpButton";
import ScrollButton from "../components/ScrollButton";
import FavButton from "../components/FavButton";
import AddToBagButton from "../components/AddToBagButton";

function ProductDetails(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
    API.fetchProductDetails(props.routeProps.match.params.productId)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      {product ? (
        <>
          <MyBreadcrumb
            routes={[
              { name: "Inicio", to: "/" },
              { name: "Tienda", to: "/store" },
              {
                name: product.category.name,
                to: "/store/" + product.category.name
              },
              { name: product.name, to: "active" }
            ]}
          />
          <Container className="my-4 p-3">
            <h2 className="mb-1">{product.name}</h2>
            <hr className="myDivider" />
            <Row className="mt-4">
              {/* column 1 */}
              <Col md={3} className="text-center">
                <Image
                  src={"/images/products/" + product.photo}
                  className="rounded-lg"
                  fluid
                  alt="product"
                />
              </Col>
              {/* column 2 */}
              <Col md={3} className="mt-2 mt-md-0 text-center text-md-left">
                <div className="my-3">
                  {product.discount.hasDiscount ? (
                    <div className="h2 mt-0 mb-1 text-dark">
                      <small>
                        <del className="text-muted">
                          {"$" + product.salePrice + " MXN"}
                        </del>
                      </small>
                      <strong className="ml-1">
                        {"$" + product.discount.newPrice + " MXN"}
                      </strong>
                    </div>
                  ) : (
                    <div className="h2 mt-0 mb-1 text-dark">
                      <strong>{"$" + product.salePrice + " MXN"}</strong>
                    </div>
                  )}
                  <hr />
                  <div className="lead mb-0 text-dark">{product.content}</div>
                  <hr />
                  <div
                    className="lead mt-0 mb-0 text-dark"
                    style={{ textTransform: "uppercase" }}
                  >
                    {product.brand}
                  </div>
                </div>
                <div className="mt-2">
                  <AddToBagButton product={product} size="lg" />
                </div>
                <div className="mt-2">
                  <FavButton
                    block={true}
                    text={"Favoritos "}
                    product={product}
                  />
                </div>
              </Col>
              {/* column 3 */}
              <Col md={3} className="mt-3 mt-md-0">
                <p className="lead mb-1 text-dark">Útil para</p>
                {product.sufferings.length ? (
                  <ul className="list-unstyled">
                    <li>
                      <ul>
                        {product.sufferings.map(suff => (
                          <li key={suff}>{suff}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                ) : (
                  <span>No hay información disponible</span>
                )}
              </Col>
              {/* column 4 */}
              <Col md={3}>
                <p className="lead mb-1 text-dark">Contiene</p>
                {product.ingredients.length ? (
                  <ul className="list-unstyled">
                    <li>
                      <ul>
                        {product.ingredients.map(ing => (
                          <li key={ing}>{ing}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                ) : (
                  <span>No hay información disponible</span>
                )}
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>{product.comments}</Col>
            </Row>
            <HelpButton />
            <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
          </Container>
        </>
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" className="spinnerStyle" />
        </div>
      )}
    </Layout>
  );
}

export default ProductDetails;
