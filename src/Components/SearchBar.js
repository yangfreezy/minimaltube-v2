import React, { useState } from "react";

import { TextField } from "@material-ui/core";

import getYoutubeVideos from "../Handlers/getYoutubeVideos";

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

  const handleSearch = async (e, search) => {
    e.preventDefault();

    const data = await getYoutubeVideos(search);

    if (!data.ok) {
      return setErrorMessage("Error retrieving videos");
    }
    if (!data.mainVideo || !data.relevantVideos.length) {
      return setErrorMessage("No videos found!");
    }

    setMainYoutubeVideo(data.mainVideo);
    setRelevantVideos(data.relevantVideos);
    setDisplayMainYoutubeVideo(true);
    setSearch("");
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
