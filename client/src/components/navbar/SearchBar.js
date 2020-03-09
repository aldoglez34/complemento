import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Form, FormControl } from "react-bootstrap";
import "./searchbar.scss";

const SearchBar = React.memo(function SearchBar(props) {
  const [suggestions, setSuggestions] = useState([]);

  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
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
      temp = props.items.sort().filter(i => regex.test(i.name));
    }
    setSuggestions(temp);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul id="suggestions">
        {suggestions.map(i => (
          <a
            key={i._id}
            href={"/product/details/" + i._id}
            className="text-dark"
          >
            <li>{i.name}</li>
          </a>
        ))}
      </ul>
    );
  };

  return (
    <Form
      // inline
      ref={node}
    >
      <FormControl
        type="text"
        placeholder="¿Qué estás buscando?"
        maxLength="50"
        // autoFocus
        onChange={handleEditInputChange}
        className="border-0 ml-2"
        id="searchBarStyle"
        style={{ outline: 0, boxShadow: "none" }}
      />
      {renderSuggestions()}
    </Form>
  );
});

SearchBar.propTypes = {
  items: PropTypes.array.isRequired
};

export default SearchBar;
