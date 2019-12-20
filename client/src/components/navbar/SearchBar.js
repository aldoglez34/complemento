import React, { useState, useEffect } from "react";
import "./searchbar.scss";
import API from "../../utils/API";

function SearchBar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.fetchItemsForSearchBar()
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleEditInputChange = e => {
    console.log(e.target.value);
  };

  return (
    <div className="d-flex rounded-pill p-2" id="sb-div">
      <input
        className="d-flex align-items-center w-100 border-0 bg-transparent ml-2 mr-1"
        placeholder="¿Qué estás buscando?"
        type="text"
        id="sb-input"
        maxLength="110"
        autoFocus
        onChange={handleEditInputChange}
      />
      <div
        className="d-flex align-items-center flex-shrink-1 border-0 text-light rounded-circle"
        id="sb-sb-searchIcon"
      >
        <i className="fas fa-search" id="sb-sb-magnifyingGlass" />
      </div>
    </div>
  );
}

export default SearchBar;
