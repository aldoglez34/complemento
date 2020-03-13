import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, addItem, decrementQty } from "../redux/actions/cart";
import { Container, Table, Button, Badge, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import API from "../utils/API";

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
          <Table responsive size="sm" striped>
            <thead>
              <tr>
                <th className="border-top-0 pb-2"></th>
                <th className="text-left border-top-0 pb-2">Producto</th>
                <th className="text-center border-top-0 pb-2">Cantidad</th>
                <th className="text-right border-top-0 pb-2">Precio</th>
                <th className="text-right border-top-0 pb-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.counter === 0 ? (
                <tr>
                  <td className="bg-light text-center py-3" colSpan="5">
                    <em>Parece que no hay nada aquí</em>
                  </td>
                </tr>
              ) : this.state.products.length ? (
                <>
                  {this.state.products.map(p => {
                    return (
                      <tr key={p._id}>
                        {/* delete item */}
                        <td className="text-danger text-center">
                          <strong
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              this.decrementQty(
                                p._id,
                                this.props.decrementQty
                              ).then(() => this.createCartReport());
                            }}
                            title="Borrar este producto"
                          >
                            x
                          </strong>
                        </td>
                        {/* name */}
                        <td className="text-left">
                          <a
                            href={"/product/details/" + p._id}
                            className="text-dark"
                          >
                            {p.name}
                          </a>
                          {p.discountPercentage ? (
                            <Badge pill className="ml-2" variant="warning">
                              {p.discountPercentage + "%"}
                            </Badge>
                          ) : null}
                        </td>
                        {/* qty */}
                        <td className="text-center">
                          <input
                            type="number"
                            defaultValue={p.qty}
                            className="text-center"
                            min={0}
                            max={p.stock}
                            style={{ width: "55px" }}
                            onChange={e => {
                              e.target.value > p.qty
                                ? this.incrementQty(
                                    p._id,
                                    this.props.addItem
                                  ).then(() => this.createCartReport())
                                : this.decrementQty(
                                    p._id,
                                    this.props.decrementQty
                                  ).then(() => this.createCartReport());
                            }}
                          />
                        </td>
                        {/* sale price */}
                        <td className="text-right">{"$" + p.price}</td>
                        <td className="text-right">{"$" + p.subTotal}</td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <tr>
                  <td className="text-center" colSpan="5">
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
          {this.state.products.length ? (
            <div className="d-flex flex-row align-items-start">
              <Button
                size="sm"
                variant="link"
                className="text-danger p-0"
                onClick={() => {
                  this.setState({ products: [] }, () => this.props.clear());
                }}
              >
                Vaciar canasta
              </Button>
              <h3 className="ml-auto text-success">
                {"Total: $" +
                  this.state.products
                    .map(p => p.subTotal)
                    .reduce((prev, next) => prev + next)}
              </h3>
            </div>
          ) : null}
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
