import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Table, Alert, ListGroup, Badge } from "react-bootstrap";
import API from "../../../utils/API";
import * as cartActions from "../../../redux/actions/cart";

const BuyButton = React.memo(() => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [show, setShow] = useState(false);

  const [notEnoughStock, setNotEnoughStock] = useState([]);
  const [zeroStock, setZeroStock] = useState([]);

  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);

  const checkStock = () => {
    // set loading to true so the user don't click the button again
    setLoading(true);
    // generate a string including all cart items with their quantities
    let cartStr = cart.items.reduce((acc, cv, idx) => {
      if (idx === cart.items.length - 1) {
        acc += cv._id + "-" + cv.qty;
      } else {
        acc += cv._id + "-" + cv.qty + ",";
      }
      return acc;
    }, "");
    API.checkStock(cartStr)
      .then(() => (window.location.href = "/checkout"))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert(
              "Ocurrió un error al revisar la existencia de los productos."
            );
        setZeroStock(err.response.data.zeroStock);
        setNotEnoughStock(err.response.data.notEnoughStock);
        handleShow(true);
        // alert(err.response.data.msg);
      });
  };

  const adjustCart = () =>
    dispatch(cartActions.adjustCart({ zeroStock, notEnoughStock }));

  return (
    <>
      <Button
        disabled={loading}
        variant="danger"
        size="lg"
        block
        title="Comprar"
        onClick={checkStock}
      >
        COMPRAR
      </Button>

      <Modal show={show} onHide={() => (window.location.href = "/cart")}>
        <Modal.Body>
          {/* title */}
          <div className="d-flex flex-row">
            <h4 className="mb-0">Advertencia</h4>
            <i
              className="fas fa-times ml-auto"
              style={{ cursor: "pointer" }}
              title="Cerrar"
              onClick={() => (window.location.href = "/cart")}
            />
          </div>
          {/* products with stock 0 */}
          {zeroStock.length ? (
            <div>
              <Alert variant="danger" className="my-3">
                Lo sentimos, los siguientes productos se encuentran fuera de
                existencia.
              </Alert>
              <ListGroup>
                {zeroStock.map((zs) => (
                  <ListGroup.Item key={zs._id}>
                    {zs.name}
                    <Badge variant="danger" className="ml-2">
                      Agotado
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ) : null}
          {/* products with stock less than qty */}
          {notEnoughStock.length ? (
            <div>
              <Alert variant="warning" className="my-3">
                Lo sentimos, no contamos con la existencia suficiente para
                siguientes productos.
              </Alert>
              <Table bordered size="sm" responsive>
                <thead>
                  <tr>
                    <th className="border-top-0 border-right-0 border-left-0 text-center">
                      Producto
                    </th>
                    <th className="border-top-0 border-right-0 border-left-0 text-center">
                      Solicitaste
                    </th>
                    <th className="border-top-0 border-right-0 border-left-0 text-center"></th>
                    <th className="border-top-0 border-right-0 border-left-0 text-center">
                      Tenemos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notEnoughStock.map((e) => (
                    <tr key={e._id}>
                      <td className="border-0 py-2">{e.name}</td>
                      <td className="border-0 py-2 text-center">{e.qty}</td>
                      <td className="border-0 py-2 text-center">
                        <i
                          className="fas fa-arrow-right"
                          style={{ color: "#edcb58" }}
                        />
                      </td>
                      <td className="border-0 py-2 text-center">{e.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : null}
          {/* adjust cart */}
          <div className="mt-3text-center">
            <Button
              size="lg"
              block
              variant="danger"
              title="Hacer ajustes a canasta"
              onClick={adjustCart}
            >
              Hacer ajustes a canasta
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default BuyButton;
