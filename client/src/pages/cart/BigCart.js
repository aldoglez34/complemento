import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { Row, Col, Table, Image, Badge, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import QtyPickerForCart from "./components/QtyPickerForCart";
import Summary from "./Summary";
import BuyButton from "./components/BuyButton";

const BigCart = React.memo(({ formatNumber, products = [] }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleDecrementQty = (_id) => dispatch(cartActions.decrementQty(_id));
  const handleIncrementQty = (_id) =>
    dispatch(cartActions.addItem({ _id, qty: 1 }));

  return (
    <React.Fragment>
      <Row>
        <Col lg={8}>
          <h2>Canasta</h2>
          <hr className="myDivider" />
          <Table className="mb-0">
            <thead>
              <tr>
                <th className="border-top-0"></th>
                <th
                  className="border-top-0"
                  colSpan="2"
                  style={{ color: "#484a4b" }}
                >
                  Producto
                </th>
                <th className="border-top-0" style={{ color: "#484a4b" }}>
                  Cantidad
                </th>
                <th className="border-top-0" style={{ color: "#484a4b" }}>
                  Precio
                </th>
                <th className="border-top-0" style={{ color: "#484a4b" }}>
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.counter === 0 ? (
                <tr>
                  <td className="text-center py-3" colSpan="6">
                    <em>Canasta vacía</em>
                  </td>
                </tr>
              ) : (
                products.map((p) => {
                  return (
                    <tr key={p.name}>
                      <td className="text-center align-middle py-1">
                        <i
                          className="fas fa-times text-danger"
                          title={`Borrar ${p.name} de tu canasta`}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch(cartActions.deleteItem(p._id))
                          }
                        />
                      </td>
                      <td className="py-1">
                        <Image
                          className="cartProductPhotoBig"
                          src={"/images/products/" + p.photo}
                          title={p.name}
                        />
                      </td>
                      <td className="align-middle py-1">
                        <h4 className="m-0">
                          <a
                            style={{ color: "#343638" }}
                            href={"/product/details/" + p._id}
                            title={p.name}
                          >
                            {p.name}
                          </a>
                        </h4>{" "}
                        {p.discountPercentage ? (
                          <Badge variant="warning">
                            {p.discountPercentage + "%"}
                          </Badge>
                        ) : null}{" "}
                        {p.stock === 0 ? (
                          <Badge variant="danger">Agotado</Badge>
                        ) : null}
                      </td>
                      <td className="align-middle text-center py-1">
                        {/* {p.qty} */}
                        <div style={{ width: "120px" }}>
                          <QtyPickerForCart
                            qty={p.qty}
                            _id={p._id}
                            handleDecrementQty={handleDecrementQty}
                            handleIncrementQty={handleIncrementQty}
                          />
                        </div>
                      </td>
                      <td className="text-right align-middle py-1">
                        {formatNumber(p.price)}
                      </td>
                      <td className="text-right align-middle py-1">
                        {formatNumber(p.subTotal)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
          {cart.counter > 0 ? (
            <div className="text-right">
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
        </Col>
        <Col lg={4}>
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
    </React.Fragment>
  );
});

BigCart.propTypes = {
  formatNumber: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default BigCart;
