import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import API from "../../utils/API";
import * as userActions from "../../redux/actions/user";
import "./favbutton.scss";

const FavButton = React.memo(({ product, isBlock }) => {
  const dispatch = useDispatch();

  const isClientLogged = useSelector((state) => state.user);
  const client = useSelector((state) => state.user);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    // checks if the product isn't already in the user's favorites
    if (client.favorites.includes(product._id)) {
      // alerts the user that the products is already in his/her favorites
      alert(product.name + " ya está en tus favoritos");
    } else {
      // post favorite in the db
      API.addFavorite({ clientId: client._id, product: product._id })
        .then((res) =>
          dispatch(userActions.updateFavorites(res.data.favorites))
        )
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.msg);
        });
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
        block={isBlock}
      >
        {isBlock ? "Favoritos" : <i className="fa fa-heart" />}
      </Button>

      <Modal size="md" show={show} onHide={handleClose} className="text-center">
        <Modal.Body className="bg-light">
          <div className="d-flex flex-row px-2 pt-2 pb-3">
            <h3 className="mb-0">Producto agregado</h3>
            <i
              className="fas fa-times ml-auto"
              style={{ cursor: "pointer" }}
              title="Cerrar"
              onClick={handleClose}
            />
          </div>
          <Image
            className="favImage"
            src={"/images/products/" + product.photo}
            href={"/product/details/" + product._id}
            title={product.name}
            style={{ cursor: "pointer" }}
          />
          <h4 className="mt-2">
            <a
              href={"/product/details/" + product._id}
              title={product.name}
              className="text-dark"
            >
              {product.name}
            </a>
          </h4>
          <div className="mb-2">
            El producto fue agregado a tu lista de favoritos.
          </div>
          <div className="text-center">
            <Button className="favbuttonstyle" href="/client/favorites/">
              Ir a mis favoritos
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
});

FavButton.propTypes = {
  isBlock: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
};

export default FavButton;
