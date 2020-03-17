import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Spinner,
  Badge,
  Alert
} from "react-bootstrap";
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

  const [show, setShow] = useState(true);

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
            {product.warning ? (
              <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
                className="mb-4"
              >
                {product.warning}
              </Alert>
            ) : null}
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
              {/* LEFT COLUMN */}
              <Col md={5} className="text-center">
                {/* title and price for smaller devices */}
                <Row className="d-inline-flex d-md-none mb-3 mb-md-0">
                  <Col xs={8}>
                    <h3 className="mb-0 text-left">
                      {product.name}{" "}
                      {product.price.discount.hasDiscount ? (
                        <Badge variant="warning" style={{ color: "#484a4b" }}>
                          {product.price.discount.percentage + "%"}
                        </Badge>
                      ) : null}
                    </h3>
                  </Col>
                  <Col xs={4}>
                    {product.price.discount.hasDiscount ? (
                      <div className="text-right">
                        <h3 className="mb-0 text-muted">
                          <small>
                            <del>{"$" + product.price.salePrice}</del>
                          </small>
                        </h3>
                        <h3 className="mb-0 text-danger">
                          {"$" + product.price.discount.newPrice}
                        </h3>
                      </div>
                    ) : (
                      <h3 className="mb-0 text-danger text-right">
                        {"$" + product.price.salePrice}
                      </h3>
                    )}
                  </Col>
                </Row>
                {/* image */}
                <Image
                  src={"/images/products/" + product.photo}
                  className="productPhoto"
                  fluid
                  alt="product"
                  title={product.name}
                />
              </Col>
              {/* info */}
              <Col md={7}>
                {/* title and price for bigger devices */}
                <Row className="d-none d-md-block">
                  <Col>
                    <h1 className="mb-0">
                      {product.name}{" "}
                      {product.price.discount.hasDiscount ? (
                        <Badge variant="warning" style={{ color: "#484a4b" }}>
                          {product.price.discount.percentage + "%"}
                        </Badge>
                      ) : null}
                    </h1>
                    <h1 className="mb-0 text-danger">
                      {product.price.discount.hasDiscount ? (
                        <>
                          <small className="text-muted">
                            <del>{"$" + product.price.salePrice}</del>
                          </small>
                          <span className="text-danger ml-2">
                            {"$" + product.price.discount.newPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-danger">
                          {"$" + product.price.salePrice}
                        </span>
                      )}
                    </h1>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <h5 className="mb-1">Contenido</h5>
                    <p className="mb-2">{product.content}</p>
                    <h5 className="mb-1">Marca</h5>
                    <p className="mb-2">{product.brand}</p>
                    <h5 className="mb-1">Descripción</h5>
                    <p className="mb-2">{product.description}</p>
                  </Col>
                </Row>
                {/* buttons */}
                <Row className="my-4">
                  <Col md={6}>
                    <AddToBagButton product={product} size="lg" />
                    <FavButton isBlock={true} product={product} />
                  </Col>
                </Row>
                {/* details */}
                <Row>
                  <Col>
                    <h5 className="mb-1">Dosis</h5>
                    <p className="mb-2">{product.dose}</p>
                    <h5 className="mb-1">Ingredientes</h5>
                    {product.ingredients.length ? (
                      <ul className="mb-2 list-unstyled">
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
                      <span className="mb-2">Información no disponible</span>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
            <h3 className="mt-3">Similares</h3>
            <hr className="myDivider" />
            <MyCarousel products={similar} />
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
