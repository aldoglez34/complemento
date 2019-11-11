import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import API from "../utils/API";

FavButton.propTypes = {
  product: PropTypes.object.isRequired
};

function FavButton(props) {
  const isClientLogged = useSelector(state => state.client.isLogged);
  const clientId = useSelector(state => state.client._id);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    // show modal
    setShow(true);
    // post favorite in the db
    let data = { client: clientId, product: props.product._id };
    API.addFavorite(data)
      .then(res => console.log(res))
      .catch(err => alert(err));
  };

  return isClientLogged ? (
    <>
      <Button className="favbuttonstyle" onClick={handleShow}>
        <i className="fa fa-heart" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El producto <strong>{props.product.name}</strong> fue agregado a tus
          favoritos
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className="globalbttn" href="/client/favorites/">
            Ir a mis favoritos
            <i className="fas fa-heart ml-1" />
            <i className="fas fa-angle-double-right ml-1" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <Button
      disabled
      className="favbuttonstyle"
      title="Inicia sesión para guardar este producto en tus favoritos"
    >
      <i className="fas fa-heart" />
    </Button>
  );
}

export default FavButton;
