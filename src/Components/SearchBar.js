import React, { useState } from "react";

import { TextField } from "@material-ui/core";

import { getYoutubeVideos } from "../API";
import { formatVideoData } from "./../Helpers";

import "./../App.css";

export const SearchBar = ({
  setMainVideo,
  setRelevantVideos,
  setErrorMessage
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const updateVideoState = videoData => {
    setSearchQuery("");
    setRelevantVideos(videoData.relevantVideos);
    setMainVideo(videoData.mainVideo);
  };

  const handleSearch = async e => {
    e.preventDefault();
    const data = await getYoutubeVideos(searchQuery);
    if (!data.ok) return setErrorMessage("Error retrieving videos");
    if (!data.items) return setErrorMessage("No videos found!");
    const videoData = formatVideoData(data.items);
    updateVideoState(videoData);
  };

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
