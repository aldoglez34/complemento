import React from "react";

const styles = {
  div: {
    height: 45,
    backgroundColor: "white"
  },
  input: {
    outline: 0
  },
  searchIcon: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "mediumseagreen"
  }
};

function SearchBar() {
  return (
    <>
      <div className="d-flex rounded-pill p-2" style={styles.div}>
        <input
          className="d-flex align-items-center w-100 border-0 bg-transparent ml-2 mr-1"
          placeholder="¿Qué estás buscando?"
          type="text"
          style={styles.input}
          autoFocus
        />
        <div
          className="d-flex align-items-center flex-shrink-1 border-0 text-light rounded-circle"
          style={styles.searchIcon}
        >
          <i className="fas fa-search" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
