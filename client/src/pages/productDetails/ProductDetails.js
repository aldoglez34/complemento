import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap";
import Layout from "../../components/Layout";
import MyBreadcrumb from "../../components/breadcrumb/MyBreadcrumb";
import API from "../../utils/API";
import HelpButton from "../../components/helpbutton/HelpButton";
import ScrollButton from "../../components/scrollbutton/ScrollButton";
import FavButton from "../../components/buttons/FavButton";
import AddToBagButton from "../../components/buttons/AddToBagButton";
import "./productDetails.scss";
import MyCarousel from "../../components/carousel/MyCarousel";
import TitleAndPrice from "./components/TitleAndPrice";
import ProductContentPt1 from "./components/ProductContentPt1";
import ProductContentPt2 from "./components/ProductContentPt2";

const ProductDetails = React.memo(function ProductDetails(props) {
  const [product, setProduct] = useState();
  const [similar, setSimilar] = useState([]);

  const [show, setShow] = useState(true);

  useEffect(() => {
    API.fetchProductDetails(props.routeProps.match.params.productId)
      .then((res) => {
        setProduct(res.data);
        API.fetchSimilarProducts(res.data.category).then((res) =>
          setSimilar(res.data)
        );
      })
      .catch((err) => {
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
                  to: "/store/category/" + product.category,
                },
                { name: product.name, to: "active" },
              ]}
            />
            <Row>
              {/* LEFT COLUMN (image) */}
              <Col md={5} className="text-center">
                <div className="d-block d-md-none mb-2">
                  <TitleAndPrice name={product.name} price={product.price} />
                </div>
                <Image
                  src={"/images/products/" + product.photo}
                  className="productPhoto"
                  fluid
                  alt="product"
                  title={product.name}
                />
              </Col>
              {/* RIGHT COLUMN */}
              <Col md={7}>
                {/* title and price for bigger devices */}
                <div className="d-none d-md-block">
                  <TitleAndPrice name={product.name} price={product.price} />
                </div>
                {/* content, brand and description */}
                <Row className="mt-3">
                  <ProductContentPt1
                    price={product.price}
                    content={product.content}
                    brand={product.brand}
                    description={product.description}
                  />
                </Row>
                {/* buttons */}
                <Row className="mt-3 mb-4">
                  <Col md={6}>
                    <AddToBagButton product={product} size="lg" />
                    <FavButton isBlock={true} product={product} />
                  </Col>
                </Row>
                {/* dose and ingredients */}
                <Row>
                  <ProductContentPt2
                    dose={product.dose}
                    ingredients={product.ingredients}
                  />
                </Row>
              </Col>
            </Row>
            {/* carousel */}
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
