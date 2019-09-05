import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import API from "../utils/API";

// checks if a given id is inside an array
const itemExists = (productId, arr) => {
    let exists = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].productId === productId) {
            exists = true;
        }
    }
    return exists;
}

class Cart extends Component {
    state = {
        cart: []
    }

    buildCart = () => {

        let fullCart = [];

        // get all the items in the local storage and sort it in descending order
        let ls = Object.keys(localStorage);
        ls.sort();
        ls.reverse();

        // for each local storage item
        ls.forEach(function (i) {

            // if the local storage item is a cart item
            if (i.substring(0, 7) === "cn_item") {

                // get the value (productId) from the local storage
                let productId = localStorage.getItem(i);

                // create an object with that productId and set qty to 1
                let obj = {};
                obj.productId = productId;
                obj.qty = 1;

                // insert the productId and qty in the fullCart array
                // and if it already exists, add 1 to it
                if (itemExists(productId, fullCart)) {
                    // if this returns true, it means it exists
                    // so look for it and add 1
                    for (let i = 0; i < fullCart.length; i++) {
                        if (fullCart[i].productId === productId) {
                            fullCart[i].qty = parseInt(fullCart[i].qty) + 1;
                        }
                    }
                } else {
                    // if it returns false it means it doesn't exist
                    // so just push the object
                    fullCart.push(obj);
                }
            }

        });

        // get the details of each item in the cart and push them into the state
        fullCart.forEach(item => {
            API.getProductDetails(item.productId)
                .then(res => {
                    let product = res.data;
                    product.qty = item.qty;
                    product.subtotal = parseFloat(parseFloat(product.price) * item.qty).toFixed(2);
                    let tempArr = this.state.cart;
                    tempArr.push(product);
                    this.setState({ cart: tempArr });
                })
        })

    }

    componentDidMount() {
        console.log("component mounted")
        this.buildCart();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component updated")
        // console.log(prevProps, prevState);
    }

    render() {
        return (

            <Layout>

                {/* regresar */}
                <div className="bg-white p-2">
                    <a href="/store" className="ml-2"><i className="fas fa-arrow-circle-left mr-2"></i>Regresa a la tienda</a>
                </div>

                <Container className="text-center my-4">
                    <h2 className="text-center mb-3">- Mi Carrito -</h2>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>

                            {(this.state.cart.length) ? (
                                <div>
                                    <Table className="table-striped" responsive>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Contenido</th>
                                                <th>Cantidad</th>
                                                <th>Precio Unitario</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.cart.map(product => {
                                                return (
                                                    <tr key={product.productId}>
                                                        <td className="text-left">{product.name}</td>
                                                        <td className="text-left">{product.content}</td>
                                                        <td>{product.qty}</td>
                                                        <td className="text-right">{product.price}</td>
                                                        <td className="text-right">{product.subtotal}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                    <div>
                                        <Button block variant="danger"><i className="fas fa-dollar-sign mr-2"></i>PAGAR</Button>
                                    </div>
                                    <div className="text-right">
                                        <Button variant="link">Limpiar carrito</Button>
                                    </div>
                                </div>
                            ) : (
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Contenido</th>
                                                <th>Cantidad</th>
                                                <th>Precio Unitario</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-muted" colSpan="5"><em>Tu carrito está vacío</em></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                )}

                        </Col>
                    </Row>

                </Container>
            </Layout >

        );
    }

};

export default Cart;
