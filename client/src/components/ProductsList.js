import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

function ProductsList(props) {

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {props.products.length ? (
                props.products.map(product => {
                    return (
                        <Card
                            style={{ width: "9.7rem" }}
                            key={product.productId}
                            className="shadow-sm mt-2 mb-4 mx-2">
                            <Card.Header className="text-center">
                                <a href={"/product/" + product.productId}>{product.name}</a>
                            </Card.Header>
                            {product.photo ? (
                                <Card.Img
                                    variant="top"
                                    height="250"
                                    className="rounded-0"
                                    src={"/images/products/" + product.photo} />
                            ) : (
                                    <Card.Img
                                        variant="top"
                                        height="250"
                                        className="rounded-0"
                                        src={"/images/products/placeholder.jpg"}
                                    />
                                )}
                            <Card.Body>
                                <Card.Text><strong>{"$" + product.price + " MXN"}</strong></Card.Text>
                                <Card.Text>{product.content}</Card.Text>
                                <Button variant="outline-primary" block
                                    onClick={() => {
                                        let data = {};
                                        data.productName = product.name;
                                        data.productId = product.productId;
                                        props.handleAddToCart(data);
                                    }}>Agregar<i className="fas fa-shopping-cart ml-2" /></Button>
                            </Card.Body>
                        </Card>
                    );
                })
            ) : (
                    <Spinner className="text-center" animation="border" role="status" variant="success" />
                )}
        </div>
    );

}

export default ProductsList;
