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
import "./productDetails.scss";

const ProductDetails = React.memo(function ProductDetails(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
    API.fetchProductDetails(props.routeProps.match.params.productId)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
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
                    <strong>{product.name}</strong>
                    {product.price.discount.hasDiscount ? (
                      <Badge variant="warning" className="ml-1 p-1">
                        {product.price.discount.percentage + "%"}
                      </Badge>
                    ) : null}
                  </h1>
                  <p className="h5 mb-1">{product.content}</p>
                  <p className="h5 mb-2">{product.brand}</p>
                  <div className="mb-3">
                    {product.price.discount.hasDiscount ? (
                      <div className="">
                        <span
                          className="h4 mb-0"
                          style={{ color: "gainsboro" }}
                        >
                          <del>{"$" + product.price.salePrice + " MXN"}</del>
                        </span>
                        <span className="h3 mb-0 ml-1 text-danger">
                          {"$" + product.price.discount.newPrice + " MXN"}
                        </span>
                      </div>
                    ) : (
                      <span className="h3 mb-0 text-danger mb-3">
                        {"$" + product.price.salePrice + " MXN"}
                      </span>
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
                <h3>Similares</h3>
                <hr className="myDivider" />
                <SimilarProducts category={product.category} />
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
