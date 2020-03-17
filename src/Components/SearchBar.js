import React, { useState } from "react";

import { TextField } from "@material-ui/core";

import { getYoutubeVideos } from "../Handlers";

import "./../App.css";

const SearchBar = ({
  setMainYoutubeVideo,
  setDisplayMainYoutubeVideo,
  setRelevantVideos,
  setErrorMessage
}) => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = async e => {
    e.preventDefault();

    const data = await getYoutubeVideos(search);

    if (!data.ok) {
      return data.empty
        ? setErrorMessage("No videos found!")
        : setErrorMessage("Error retrieving videos");
    }
    setSearch("");
    setRelevantVideos(data.relevantVideos);
    setMainYoutubeVideo(data.mainVideo);
    setDisplayMainYoutubeVideo(true);
  };

  return (
    <form className="form" onSubmit={handleSearch}>
      <TextField
        value={search}
        onChange={handleChange}
        placeholder="Search"
        fullWidth
        required
      />
    </form>
  );
};
export default SearchBar;
