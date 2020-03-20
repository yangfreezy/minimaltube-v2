import React from "react";
import PropTypes from "prop-types";

import { TextField } from "@material-ui/core";

export const SearchBar = ({ searchQuery, handleChange, handleSearch }) => {
  return (
    <form className="form" onSubmit={handleSearch}>
      <TextField
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search"
        fullWidth
        required
      />
    </form>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func
};
