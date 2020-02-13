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
          key: "AIzaSyDq43D0kSIw0fkhyRHFtBO1oGWRuJ9NYkk"
        }
      });
      await setMainYoutubeVideo(data.data.items[0]);
      await setYoutubeVideos(data.data.items.slice(1));
      await setSearch("");
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
        margin="100px"
        value={search}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
};
export default SearchBar;
