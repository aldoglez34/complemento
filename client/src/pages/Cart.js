import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, addItem, decrementQty } from "../redux/actions/cart";
import {
  Container,
  Table,
  Button,
  Badge,
  Spinner,
  Image,
  Row,
  Col
} from "react-bootstrap";
import Layout from "../components/Layout";
import API from "../utils/API";
import "./cart.scss";

class Cart extends Component {
  state = {
    products: []
  };

  formatNumber(num) {
    return num !== undefined
      ? "$" +
          num
            .toFixed(2)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  }

  componentDidMount() {
    this.createCartReport();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart.counter !== this.props.cart.counter) {
      this.createCartReport();
    }
  }

  createCartReport() {
    // clear products first
    this.setState({ products: [] }, () => {
      // generate a string including all cart items with their quantities
      let cartStr = this.props.cart.items.reduce((acc, cv, idx) => {
        if (idx === this.props.cart.items.length - 1) {
          acc += cv._id + "-" + cv.qty;
        } else {
          acc += cv._id + "-" + cv.qty + ",";
        }
        return acc;
      }, "");
      // fetch cart items (if there are any)
      if (cartStr !== "")
        API.fetchCartProducts(cartStr)
          .then(res => this.setState({ products: res.data }))
          .catch(err => console.log(err));
    });
  }

  async decrementQty(id, dispatchAction) {
    return dispatchAction(id);
  }

  async incrementQty(id, dispatchAction) {
    return dispatchAction({ _id: id, qty: 1 });
  }

  // makeSale() {
  //   API.buyProducts({ products, client })
  //     .then(res => {
  //       if (!res.data.errors) {
  //         API.updateStock(products)
  //           .then(() => {
  //             alert("Gracias por tu compra");
  //             this.props.clear();
  //           })
  //           .catch(err => console.log(err));
  //       } else {
  //         alert(res.data.errors.message);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Layout hideBag={true}>
        <Container className="my-4">
          <h3>Canasta</h3>
          <hr className="myDivider" />
          {/* content */}
          <Row className="pt-3">
            <Col md={8}>
              <Table responsive>
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
                  {this.props.cart.count === 0 ? (
                    <tr>
                      <td className="text-center py-3" colSpan="6">
                        <em>Canasta vacía</em>
                      </td>
                    </tr>
                  ) : this.state.products.length ? (
                    this.state.products.map(p => {
                      return (
                        <tr key={p.name}>
                          <td className="text-center align-middle">
                            <i
                              className="fas fa-times text-danger"
                              title="Borrar este producto"
                              style={{ cursor: "pointer" }}
                            />
                          </td>
                          <td>
                            <Image
                              className="cartProductPhoto"
                              src={"/images/products/" + p.photo}
                              title={p.name}
                            />
                          </td>
                          <td>
                            <h5 className="m-0">{p.name}</h5>
                            {p.discountPercentage ? (
                              <Badge variant="warning">
                                {p.discountPercentage + "%"}
                              </Badge>
                            ) : null}
                          </td>
                          <td className="text-right">{p.qty}</td>
                          <td className="text-right">
                            {this.formatNumber(p.price)}
                          </td>
                          <td className="text-right">
                            {this.formatNumber(p.subTotal)}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td className="text-center my-4" colSpan="6">
                        <div className="text-center my-4">
                          <Spinner
                            variant="warning"
                            animation="grow"
                            role="status"
                          />
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
            <Col md={4}>
              <h3 style={{ color: "#343638" }}>Resumen de compra</h3>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {
  clear,
  addItem,
  decrementQty
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
