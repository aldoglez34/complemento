import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, Badge } from "react-bootstrap";
import Layout from "../components/Layout";
import MyBreadcrumb from "../components/breadcrumb/MyBreadcrumb";
import API from "../utils/API";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import FavButton from "../components/buttons/FavButton";
import AddToBagButton from "../components/buttons/AddToBagButton";
import "./productDetails.scss";
import MyCarousel from "../components/carousel/MyCarousel";

const ProductDetails = React.memo(function ProductDetails(props) {
  const [product, setProduct] = useState();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    API.fetchProductDetails(props.routeProps.match.params.productId)
      .then(res => {
        setProduct(res.data);
        API.fetchSimilarProducts(res.data.category).then(res =>
          setSimilar(res.data)
        );
      })
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <Layout>
      {product ? (
        <>
          <Container className="my-4">
            <MyBreadcrumb
              routes={[
                { name: "Inicio", to: "/" },
                { name: "Tienda", to: "/store" },
                {
                  name: product.category,
                  to: "/store/category/" + product.category
                },
                { name: product.name, to: "active" }
              ]}
            />
            <Row>
              {/* photo */}
              <Col md={5} className="text-center">
                <Image
                  src={"/images/products/" + product.photo}
                  className="productPhoto"
                  fluid
                  alt="product"
                  title={product.name}
                />
                {product.price.discount.hasDiscount ? (
                  <Image
                    src="/images/tag.png"
                    className="discountImgBig"
                    alt="discount"
                  />
                ) : null}
              </Col>
              {/* info */}
              <Col md={7}>
                {/* name and price */}
                <div className="text-center text-md-left">
                  <h1 className="mt-4 mt-md-0 mb-2">
                    <strong style={{ color: "#484a4b" }}>{product.name}</strong>
                    {product.price.discount.hasDiscount ? (
                      <Badge
                        variant="warning"
                        className="ml-1 p-1"
                        style={{ color: "#484a4b" }}
                      >
                        {product.price.discount.percentage + "%"}
                      </Badge>
                    ) : null}
                  </h1>
                  <p
                    className="mb-0"
                    style={{ color: "#59a49a", fontWeight: "bold" }}
                  >
                    Contenido
                  </p>
                  <p className="lead mb-0">{product.content}</p>
                  <p
                    className="mb-0"
                    style={{ color: "#59a49a", fontWeight: "bold" }}
                  >
                    Marca
                  </p>
                  <p className="lead mb-0">{product.brand}</p>
                  <div className="d-flex flex-column mb-3">
                    <p
                      className="mb-0"
                      style={{ color: "#59a49a", fontWeight: "bold" }}
                    >
                      Precio
                    </p>
                    {product.price.discount.hasDiscount ? (
                      <div className="d-flex flex-row justify-content-center justify-content-md-start">
                        <p className="lead mb-0" style={{ color: "gainsboro" }}>
                          <del>{"$" + product.price.salePrice}</del>
                        </p>
                        <p className="lead mb-0 ml-2 text-danger">
                          {"$" + product.price.discount.newPrice}
                        </p>
                      </div>
                    ) : (
                      <p
                        className="lead mb-0 text-danger"
                        style={{ fontSize: "25px" }}
                      >
                        {"$" + product.price.salePrice}
                      </p>
                    )}
                  </div>
                </div>
                {/* buttons */}
                <Row className="my-2">
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
                    <strong style={{ color: "#59a49a" }}>Descripción</strong>
                    <br />
                    <span>{product.description}</span>
                  </Col>
                </Row>
                <Row className="mb-1">
                  <Col>
                    <strong style={{ color: "#59a49a" }}>Dosis</strong>
                    <br />
                    <span>{product.dose}</span>
                  </Col>
                </Row>
                <Row className="mb-1">
                  <Col>
                    <strong style={{ color: "#59a49a" }}>Ingredientes</strong>
                    {product.ingredients.length ? (
                      <ul className="mb-1 list-unstyled">
                        <li>
                          <ul>
                            {product.ingredients
                              .sort((a, b) => a.localeCompare(b))
                              .map(ing => (
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
                    <strong className="text-danger">Aviso</strong>
                    <br />
                    <span>{product.warning}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 px-1">
              <Col>
                <h3>Similares</h3>
                <hr className="myDivider" />
                <MyCarousel products={similar} />
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
});

export default ProductDetails;
