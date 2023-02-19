import React from "react";

const SearchBox = ({ searchfield, onSearchChange }) => {
  return (
    <div className="tc pa2">
      <input
        className="pa2 br3 ba b--yellow bg-light-yellow"
        type="search"
        placeholder="Please type here..."
        onChange={onSearchChange}
        value={searchfield}
      />
    </div>
  );
};

export default SearchBox;
