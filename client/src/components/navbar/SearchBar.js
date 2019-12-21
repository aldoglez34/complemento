import React, { useState, useEffect, useRef } from "react";
import "./searchbar.scss";
import API from "../../utils/API";

function SearchBar() {
  const [items, setItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // fetch items
    API.fetchItemsForSearchBar()
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      // do nothing
    } else {
      // outside click
      setSuggestions([]);
    }
  };

  const handleEditInputChange = e => {
    const value = e.target.value;
    const regex = new RegExp(`^${value}`, "i");
    let temp = [];
    if (value.length > 0) {
      temp = items.sort().filter(i => regex.test(i.name));
    }
    setSuggestions(temp);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul id="suggestions">
        {suggestions.map(item => (
          <a
            key={item._id}
            href={"/product/details/" + item._id}
            className="text-dark suggestionsItem"
          >
            <li>{item.name}</li>
          </a>
        ))}
      </ul>
    );
  };

  return items.length ? (
    <div ref={node}>
      <input
        placeholder="¿Qué estás buscando?"
        type="text"
        id="sb-input"
        maxLength="110"
        autoFocus
        onChange={handleEditInputChange}
      />
      {renderSuggestions()}
    </div>
  ) : null;
}

export default SearchBar;
