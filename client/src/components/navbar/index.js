import React, { useState, useEffect } from "react";
import NavbarMD from "./NavbarMD";
import NavbarSM from "./NavbarSM";
import PropTypes from "prop-types";
import API from "../../utils/API";
import "./navbarStyles.scss";

const MyNavbar = React.memo(({ hideBag, hideUser }) => {
  const [items, setItems] = useState({});
  const [store, setStore] = useState([]);

  useEffect(() => {
    // fetch items for search bar
    API.fetchItemsForSearchBar()
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert(
              "Ocurrió un error al cargar productos para la barra de búsqueda."
            );
      });
    // fetch items for categories dropdown
    API.fetchItemsForStoreDropdown()
      .then((res) => setStore(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert(
              "Ocurrió un error al cargar categorías para menú desplegable."
            );
      });
  }, []);

  return (
    <>
      <NavbarMD
        store={store}
        items={items}
        hideBag={hideBag}
        hideUser={hideUser}
      />
      <NavbarSM store={store} items={items} />
    </>
  );
});

MyNavbar.propTypes = {
  hideBag: PropTypes.bool,
  hideUser: PropTypes.bool,
};

export default MyNavbar;
