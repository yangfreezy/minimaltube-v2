import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";

import "./../App.css";

const SearchBar = ({ onChange, setMainYoutubeVideo, setYoutubeVideos }) => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const getYoutubeVideos = async e => {
    e.preventDefault();
    let data;
    try {
      data = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 6,
          q: search,
          key: process.env.REACT_APP_YOUTUBE_API_KEY
        }
      });
      setMainYoutubeVideo(data.data.items[0]);
      setYoutubeVideos(data.data.items.slice(1));
      setSearch("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className="form" onSubmit={e => getYoutubeVideos(e)}>
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
