import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import MyBreadcrumb from "../components/breadcrumb/MyBreadcrumb";
import API from "../utils/API";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import FavButton from "../components/buttons/FavButton";
import AddToBagButton from "../components/buttons/AddToBagButton";

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
                to: "/store/category/" + product.category.name
              },
              { name: product.name, to: "active" }
            ]}
          />
          <Container className="my-3">
            <Row className="mt-4">
              {/* photo */}
              <Col md={4} className="text-center">
                <Image
                  src={"/images/products/" + product.photo}
                  className="rounded-lg"
                  fluid
                  alt="product"
                />
              </Col>
              {/* info */}
              <Col md={8}>
                {/* name and price */}
                <Row className="mb-3">
                  <Col>
                    <h1 className="mb-0 text-dark">{product.name}</h1>
                    <hr
                      className="myDivider"
                      style={{ backgroundColor: "#edcb58" }}
                    />
                    <h2 className="mb-0">{product.brand}</h2>
                    <h2 className="mb-0">{product.content}</h2>
                    {product.discount.hasDiscount ? (
                      <Row className="px-3">
                        <h3 className="mb-0 mr-2 text-muted">
                          <del>{"$" + product.salePrice + " MXN"}</del>
                        </h3>
                        <h2 className="mb-0 text-danger">
                          {"$" + product.discount.newPrice + " MXN"}
                        </h2>
                      </Row>
                    ) : (
                      <h2 className="mb-0 text-danger">
                        {"$" + product.salePrice + " MXN"}
                      </h2>
                    )}
                  </Col>
                </Row>
                {/* buttons */}
                <Row className="mb-2">
                  <Col md={5}>
                    <AddToBagButton product={product} size="lg" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={5}>
                    <FavButton
                      block={true}
                      text={"Favoritos "}
                      product={product}
                    />
                  </Col>
                </Row>
                {/* ingredients and sufferings */}
                <Row className="mb-1">
                  <Col>
                    <h4 className="mb-1">Útil para</h4>
                    {product.sufferings.length ? (
                      <ul className="mb-1 list-unstyled">
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
                </Row>
                <Row className="mb-1">
                  <Col>
                    <h4 className="mb-1">Contiene</h4>
                    {product.ingredients.length ? (
                      <ul className="mb-1 list-unstyled">
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
                {/* comments */}
                <Row className="mb-2">
                  <Col className="text-center">
                    <em>{product.comments}</em>
                  </Col>
                </Row>
              </Col>
            </Row>
            <HelpButton />
            <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
          </Container>
        </>
      ) : (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </Layout>
  );
}

export default ProductDetails;
