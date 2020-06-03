import React, { useState } from "react";
import PropTypes from "prop-types";
import APIManager from "../../../utils/APIManager";
import {
  Image,
  Spinner,
  Button,
  Modal,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import moment from "moment";
import { formatNumber } from "../../../utils/formatNumber";

const ProductsByProvider = React.memo(({ providerId, name }) => {
  const [show, setShow] = useState(false);

  const [products, setProducts] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    APIManager.mngr_fetchProductsByProvider(providerId)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
        err.data
          ? alert(err.data.msg)
          : alert(
              "Ocurrió un error al cargar los productos para la bolsa de compras."
            );
      });
  };

  return (
    <>
      <Button
        variant="warning"
        size="sm"
        title="Productos"
        onClick={handleShow}
        className="shadow-sm"
      >
        Productos
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {products ? (
            products.length ? (
              <>
                <ListGroup variant="flush">
                  {products.map((p) => {
                    return (
                      <ListGroup.Item key={p.name}>
                        <Row>
                          <Col md={3} className="px-0 text-center">
                            <Image
                              src={"/images/products/" + p.photo}
                              width="83"
                              height="138"
                            />
                          </Col>
                          <Col md={9}>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: "20px" }}
                            >
                              <strong>{p.name}</strong>
                            </div>
                            <p className="mb-0">{p.category}</p>
                            <p className="mb-0">{p.brand}</p>
                            <p className="mb-0">{p.content}</p>
                            <p className="mb-0">{`Compra: ${formatNumber(
                              p.price.latestPurchasePrice
                            )} | Venta: ${formatNumber(p.price.salePrice)}`}</p>
                            <p className="mb-2 lead">
                              {moment(p.createdAt).format("DD/MM/YYYY")}
                            </p>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </>
            ) : (
              <em>Lista de productos vacía</em>
            )
          ) : (
            <div className="text-center py-4 my-4">
              <Spinner variant="warning" animation="grow" role="status" />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});

ProductsByProvider.propTypes = {
  providerId: PropTypes.string.isRequired,
};

export default ProductsByProvider;
