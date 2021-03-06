import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { Row, Col, Image, Badge, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import QtyPickerForCart from "./components/QtyPickerForCart";
import Summary from "./Summary";
import BuyButton from "./components/BuyButton";

const SmallCart = React.memo(({ formatNumber, products = [] }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleDecrementQty = (_id) => dispatch(cartActions.decrementQty(_id));
  const handleIncrementQty = (_id) =>
    dispatch(cartActions.addItem({ _id, qty: 1 }));

  return (
    <React.Fragment>
      {cart.counter === 0 ? (
        <>
          <h2>Canasta</h2>
          <hr className="myDivider" />
          <em>Canasta vacía</em>
        </>
      ) : (
        <>
          <h2>Canasta</h2>
          <hr className="myDivider" />
          {products.map((p) => {
            return (
              <React.Fragment key={p._id}>
                <Row className="mb-3">
                  <Col xs={3}>
                    <Image
                      className="cartProductPhotoSmall"
                      src={"/images/products/" + p.photo}
                      title={p.name}
                    />
                  </Col>
                  <Col xs={9}>
                    <h4>
                      {p.name}
                      <small>
                        {" "}
                        {p.discountPercentage ? (
                          <Badge variant="warning">
                            {p.discountPercentage + "%"}
                          </Badge>
                        ) : null}{" "}
                        {p.stock === 0 ? (
                          <Badge variant="danger">Agotado</Badge>
                        ) : null}
                      </small>
                    </h4>

                    <div className="d-flex flex-column">
                      <div className="w-50">
                        <QtyPickerForCart
                          qty={p.qty}
                          _id={p._id}
                          handleDecrementQty={handleDecrementQty}
                          handleIncrementQty={handleIncrementQty}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <span>Precio:</span>
                      <strong className="ml-2">{formatNumber(p.price)}</strong>
                    </div>
                    <div className="d-flex flex-row">
                      <span>Subtotal:</span>
                      <strong className="ml-2">
                        {formatNumber(p.subTotal)}
                      </strong>
                    </div>
                  </Col>
                </Row>
              </React.Fragment>
            );
          })}
          {cart.counter > 0 ? (
            <div className="my-3">
              <Button
                variant="link"
                className="p-0 text-danger"
                title="Vaciar canasta"
                onClick={() => dispatch(cartActions.clear())}
              >
                Vaciar canasta
              </Button>
            </div>
          ) : null}
          <Row>
            <Col>
              <h2>Resumen de Compra</h2>
              <hr className="myDivider" />
              <Summary
                counter={cart.counter}
                subTotal={formatNumber(
                  products.reduce((acc, cv) => {
                    acc += cv.subTotal;
                    return acc;
                  }, 0)
                )}
                shipment={"$70"}
                total={formatNumber(
                  products.reduce((acc, cv) => {
                    acc += cv.subTotal;
                    return acc;
                  }, 0) + 70
                )}
              />
              {/* buy button */}
              <div className="mt-3">
                <BuyButton />
              </div>
            </Col>
          </Row>
        </>
      )}
    </React.Fragment>
  );
});

SmallCart.propTypes = {
  formatNumber: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default SmallCart;
