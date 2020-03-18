import React, { useState } from "react";

import { TextField } from "@material-ui/core";

import { getYoutubeVideos } from "../Handlers";
import { formatVideoData } from "./../Helpers";

import "./../App.css";

const SearchBar = ({
  setMainVideo,
  setShowMainVideo,
  setRelevantVideos,
  setErrorMessage
}) => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const updateVideoState = (videoData, setSearch, setRelevantVideos, setMainVideo, setShowMainVideo) => {
    setSearch("");
    setRelevantVideos(videoData.relevantVideos);
    setMainVideo(videoData.mainVideo);
    setShowMainVideo(true);
  }

  const handleSearch = async e => {
    e.preventDefault();
    const data = await getYoutubeVideos(search);
    if (!data.ok) return setErrorMessage("Error retrieving videos");
    if (!data.items) return setErrorMessage("No videos found!");
    let formattedVideoData = formatVideoData(data.items);
    updateVideoState(formattedVideoData)
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
