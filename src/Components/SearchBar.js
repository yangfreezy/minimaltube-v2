import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import getYoutubeVideos from "../Handlers/getYoutubeVideos";

import "./../App.css";

const SearchBar = ({
  onChange,
  setMainYoutubeVideo,
  setRelevantVideos,
  setErrorMessage
}) => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const searchHandler = async (e, search) => {
    e.preventDefault();
    try {
      const data = await getYoutubeVideos(search);
      if (!data) return setErrorMessage("Error retrieving videos");
      if (!data.items) {
        return setErrorMessage("No videos found for that query!");
      } else {
        await setMainYoutubeVideo(data.items[0]);
        await setRelevantVideos(data.items.slice(1));
        setSearch("");
      }
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
