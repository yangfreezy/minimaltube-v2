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

  const loadVideos = data => {
    setMainYoutubeVideo(data.items[0]);
    setDisplayMainYoutubeVideo(true);
    setRelevantVideos(data.items.slice(1));
    setSearch("");
  };

  const searchHandler = async (e, search) => {
    e.preventDefault();
    try {
      const { data } = await getYoutubeVideos(search);
      if (!data.items.length) return setErrorMessage("No videos found!");
      data.ok ? loadVideos(data) : setErrorMessage("Error retrieving videos");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={e => searchHandler(e, search)}>
      <TextField
        onChange={e => handleChange(e)}
        style={{ margin: 8 }}
        placeholder="Search"
        fullWidth
        value={search}
        required={true}
      />
    </form>
  );
};
export default SearchBar;
