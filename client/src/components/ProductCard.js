import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function ProductCard(props) {
    return (

        <Card
            style={{ width: "9.7rem" }}
            key={props.productId}
            className="shadow-sm mt-2 mb-4 mx-2">
            <Card.Header className="text-center">
                <a href={"/product/" + props.productId}>{props.name}</a>
            </Card.Header>
            {props.photo ? (
                <Card.Img
                    variant="top"
                    height="250"
                    className="rounded-0"
                    src={"/images/products/" + props.photo} />
            ) : (
                    <Card.Img
                        variant="top"
                        height="250"
                        className="rounded-0"
                        src={"/images/products/placeholder.jpg"}
                    />
                )}
            <Card.Body>
                <Card.Text><strong>{"$" + props.price + " MXN"}</strong></Card.Text>
                <Card.Text>{props.content}</Card.Text>
                <Button variant="outline-primary" block
                    onClick={() => {
                        let data = {};
                        data.productName = props.name;
                        data.productId = props.productId;
                        props.handleAddToCart(data);
                    }}>Agregar<i className="fas fa-shopping-cart ml-2" /></Button>
            </Card.Body>
        </Card>

    )
}

export default ProductCard;
