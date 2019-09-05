import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

AddToCartButton.propTypes = {
    product: PropTypes.object.isRequired
};

function AddToCartButton(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        // get the counter and increase it
        let counter = localStorage.getItem("cn_counter");
        counter++;
        // save the new item
        localStorage.setItem("cn_item" + counter, props.product.productId);
        // set the increased counter back in the local storage
        localStorage.setItem("cn_counter", counter);
        // show modal
        setShow(true);
    };

    return (

        <>

            <Button variant="outline-primary" block onClick={handleShow}>
                Agregar<i className="fas fa-shopping-cart ml-2" />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Éxito.</Modal.Title>
                </Modal.Header>
                <Modal.Body>El producto <strong>{props.product.name}</strong> ha sido agregado exitosamente a tu carrito.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary" href="/cart">
                        Ir al carrito<i className="fas fa-shopping-cart ml-2" />
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );

}

export default AddToCartButton;