import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import API from "../../utils/API";
import * as clientActions from "../../redux/actions/client";
import "./favbutton.scss";

const FavButton = React.memo(props => {
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

  return (
    <>
      <Button
        title="Agregar a favoritos"
        variant="danger"
        className="favbuttonstyle"
        onClick={
          isClientLogged
            ? handleShow
            : () =>
                alert(
                  "Debes iniciar sesión para poder guardar productos en tus favoritos"
                )
        }
        block={props.isBlock}
      >
        {props.isBlock ? "Favoritos" : <i className="fa fa-heart" />}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h4>Producto agregado</h4>
          <p>
            El producto <strong>{props.product.name}</strong> fue agregado a tus
            favoritos
          </p>
          <div className="d-flex flex-row">
            <Button variant="success" onClick={handleClose}>
              <i className="fas fa-angle-double-left mr-1" />
              Seguir comprando
            </Button>
            <Button
              className="ml-auto"
              variant="danger"
              href="/client/favorites/"
            >
              Ir a mis favoritos
              <i className="fas fa-angle-double-right ml-1" />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

FavButton.propTypes = {
  isBlock: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired
};

export default FavButton;
