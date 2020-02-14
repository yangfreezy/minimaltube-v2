import React, { Fragment, useState, useEffect } from "react";
import { Button, FormHelperText } from "@material-ui/core";

import {
  MainVideo,
  VideoList,
  SearchBar,
  LoadingLogo
} from "./Components/index";

import "./App.css";

/*
  - Make the video thumbnails a scrollable gallery of length 25
  - Add a tiny div above the thumbnails for the title of the hovered div to appear
 */

const App = () => {
  const [mainYoutubeVideo, setMainYoutubeVideo] = useState({});
  const [relevantVideos, setRelevantVideos] = useState([]);
  const [showRelevantVideos, setShowRelevantVideos] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [relevantVideos, mainYoutubeVideo]);

  const toggleDisplay = () => {
    setShowRelevantVideos(!showRelevantVideos);
  };
  const clearState = () => {
    setMainYoutubeVideo({});
    setRelevantVideos([]);
    setShowRelevantVideos(false);
  };
  return (
    <Fragment>
      <div className="window">
        <div className="main-layout">
          {Object.keys(mainYoutubeVideo).length ? (
            <MainVideo
              setErrorMessage={setErrorMessage}
              video={mainYoutubeVideo}
            />
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
    </Fragment>
  );
};

export default App;
