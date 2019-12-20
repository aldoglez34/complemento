import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import API from "../../utils/API";
import * as clientActions from "../../redux/actions/client";
import "./favbutton.scss";

FavButton.propTypes = {
  block: PropTypes.bool.isRequired,
  text: PropTypes.string,
  product: PropTypes.object.isRequired
};

function FavButton(props) {
  const dispatch = useDispatch();

  const isClientLogged = useSelector(state => state.client.isLogged);
  const client = useSelector(state => state.client);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    // checks if the product isn't already in the user's favorites
    if (client.favorites.includes(props.product._id)) {
      // alerts the user that the products is already in his/her favorites
      alert(props.product.name + " ya está en tus favoritos");
    } else {
      // post favorite in the db
      API.addFavorite({ clientId: client._id, product: props.product._id })
        .then(res =>
          dispatch(clientActions.updateFavorites(res.data.favorites))
        )
        .catch(err => alert(err));
      // show modal
      setShow(true);
    }
  };

  return isClientLogged ? (
    <>
      <Button
        variant="danger"
        className="favbuttonstyle"
        onClick={handleShow}
        title="Agregar a mis favoritos"
        block={props.block}
      >
        {props.text}
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
      variant="danger"
      className="favbuttonstyle"
      onClick={() =>
        alert(
          "Debes iniciar sesión para poder guardar productos en tus favoritos"
        )
      }
      title="Agregar a mis favoritos"
      block={props.block}
    >
      {props.text}
      <i className="fa fa-heart" />
    </Button>
  );
}

export default FavButton;
