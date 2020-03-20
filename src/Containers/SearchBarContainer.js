import React, { useState } from "react";
import PropTypes from "prop-types";

import { SearchBar } from "./../Components";

import { getYoutubeVideos } from "../API";
import { formatVideoData } from "./../Helpers";

export const SearchBarContainer = ({
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
    <SearchBar
      searchQuery={searchQuery}
      handleChange={handleChange}
      handleSearch={handleSearch}
    />
  );
};

SearchBarContainer.propTypes = {
  setMainVideo: PropTypes.func,
  setRelevantVideos: PropTypes.func,
  setErrorMessage: PropTypes.func
};
