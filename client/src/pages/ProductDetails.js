import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, Badge } from "react-bootstrap";
import Layout from "../components/Layout";
import MyBreadcrumb from "../components/breadcrumb/MyBreadcrumb";
import API from "../utils/API";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import FavButton from "../components/buttons/FavButton";
import AddToBagButton from "../components/buttons/AddToBagButton";
import SimilarProducts from "./components/SimilarProducts";

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
            <Row>
              {/* photo */}
              <Col md={5} className="text-center">
                <Image
                  src={"/images/products/" + product.photo}
                  className="rounded-lg"
                  fluid
                  alt="product"
                />
              </Col>
              {/* info */}
              <Col md={7}>
                {/* name and price */}
                <Row className="mb-2 mt-2 mt-md-0">
                  <Col>
                    <div className="d-flex flex-row">
                      <h2>{product.name}</h2>
                      {product.price.discount.hasDiscount ? (
                        <h3>
                          <Badge variant="warning" className="ml-2">
                            {product.price.discount.percentage + "%"}
                          </Badge>
                        </h3>
                      ) : null}
                    </div>
                    <hr
                      className="myDivider"
                      style={{ backgroundColor: "#edcb58" }}
                    />
                    <h5 className="mb-1">{product.content}</h5>
                    <h5 className="mb-2">{product.brand}</h5>
                    <div className="d-flex flex-row">
                      {product.price.discount.hasDiscount ? (
                        <>
                          <h3 className="mb-0" style={{ color: "gainsboro" }}>
                            <del>{"$" + product.price.salePrice + " MXN"}</del>
                          </h3>
                          <h3 className="mb-0 ml-1 text-danger">
                            {"$" + product.price.discount.newPrice + " MXN"}
                          </h3>
                        </>
                      ) : (
                        <h3 className="mb-0 text-danger">
                          {"$" + product.price.salePrice + " MXN"}
                        </h3>
                      )}
                    </div>
                  </Col>
                </Row>
                {/* buttons */}
                <Row className="mb-2">
                  <Col md={5}>
                    <AddToBagButton product={product} size="lg" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={5}>
                    <FavButton isBlock={true} product={product} />
                  </Col>
                </Row>
                {/* ingredients and sufferings */}
                <Row className="mb-1">
                  <Col>
                    <strong>Útil para</strong>
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
                    <strong>Contiene</strong>
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
                  <Col>
                    <small>{product.comments}</small>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 px-1">
              <Col>
                <h2>Similares</h2>
                <hr className="myDivider" />
                <SimilarProducts categoryId={product.category._id} />
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
