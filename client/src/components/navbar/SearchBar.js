import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Form, FormControl } from "react-bootstrap";
import "./searchbar.scss";

SearchBar.propTypes = {
  items: PropTypes.array.isRequired
};

function SearchBar(props) {
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
            className="text-dark suggestionsItem"
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
        autoFocus
        onChange={handleEditInputChange}
        className="mr-sm-2 border-0"
        style={{ outline: 0 }}
      />
      {renderSuggestions()}
    </Form>
  );
}

export default SearchBar;
