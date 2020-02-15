import React, { useState, useEffect } from "react";
import { Button, FormHelperText } from "@material-ui/core";

import {
  MainVideo,
  VideoList,
  SearchBar,
  LoadingLogo
} from "./Components/index";

import "./App.css";

const App = () => {
  // Video state
  const [mainYoutubeVideo, setMainYoutubeVideo] = useState({});
  const [relevantVideos, setRelevantVideos] = useState([]);

  // Toggle display of relevant videos
  const [showRelevantVideos, setShowRelevantVideos] = useState(false);
  const toggleDisplay = () => {
    setShowRelevantVideos(!showRelevantVideos);
  };

  // Clear state when user clicks "clear" button
  const clearState = () => {
    setMainYoutubeVideo({});
    setRelevantVideos([]);
    setShowRelevantVideos(false);
  };

  // Display error messages
  const [errorMessage, setErrorMessage] = useState("");
  // Reset error messages on successful load
  useEffect(() => {
    setErrorMessage("");
  }, [relevantVideos, mainYoutubeVideo]);

  return (
    <div className="window">
      <div className="main-layout">
        {Object.keys(mainYoutubeVideo).length ? (
          <MainVideo video={mainYoutubeVideo} />
        ) : (
          <LoadingLogo />
        )}
        {errorMessage.length ? (
          <FormHelperText error={true} children={errorMessage} />
        ) : null}
        <SearchBar
          setRelevantVideos={setRelevantVideos}
          setMainYoutubeVideo={setMainYoutubeVideo}
          setErrorMessage={setErrorMessage}
        />
        {relevantVideos.length ? (
          <div className="button-bar">
            <Button size="small" onClick={toggleDisplay}>
              {showRelevantVideos ? "Hide" : "Show More"}
            </Button>
            <Button size="small" onClick={clearState}>
              Clear
            </Button>
          </div>
        ) : null}
        {relevantVideos.length && showRelevantVideos ? (
          <VideoList
            videos={relevantVideos}
            setMainYoutubeVideo={setMainYoutubeVideo}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
