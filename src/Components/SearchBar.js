import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import getYoutubeVideos from "../Handlers/getYoutubeVideos";

import "./../App.css";

const SearchBar = ({ onChange, setMainYoutubeVideo, setRelevantVideos }) => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={e =>
        getYoutubeVideos(
          e,
          setMainYoutubeVideo,
          setRelevantVideos,
          setSearch,
          search
        )
      }
    >
      <TextField
        onChange={e => handleChange(e)}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Search"
        fullWidth
        value={search}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
};
export default SearchBar;
