import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import {
  MainVideo,
  VideoList,
  SearchBar,
  LoadingLogo
} from "./Components/index";

import "./App.css";

/*
  - Make the video thumbnails a scrollable gallery
  - Add a tiny div above the thumbnails for the title of the hovered div to appear
  - Figure out how to fix the stuff from going off the screen - google: why does my image appear off screen css
 */

const App = () => {
  const [mainYoutubeVideo, setMainYoutubeVideo] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [showOtherVideos, setShowOtherVideos] = useState(false);

  useEffect(() => {}, [youtubeVideos, mainYoutubeVideo]);

  const toggleDisplay = () => {
    setShowOtherVideos(!showOtherVideos);
  };
  const clearState = () => {
    setMainYoutubeVideo({});
    setYoutubeVideos([]);
    setShowOtherVideos(false);
  };

  return (
    <Fragment>
      <div className="window">
        <div className="main-layout">
          {Object.keys(mainYoutubeVideo).length ? (
            <MainVideo video={mainYoutubeVideo} />
          ) : (
            <LoadingLogo />
          )}
          <SearchBar
            setYoutubeVideos={setYoutubeVideos}
            setMainYoutubeVideo={setMainYoutubeVideo}
          />
          {youtubeVideos.length ? (
            <div className="button-bar">
              <Button size="small" onClick={toggleDisplay}>
                {showOtherVideos ? "Hide" : "Show More"}
              </Button>
              <Button size="small" onClick={clearState}>
                Clear
              </Button>
            </div>
          ) : null}
          {youtubeVideos.length && showOtherVideos ? (
            <VideoList
              videos={youtubeVideos}
              setMainYoutubeVideo={setMainYoutubeVideo}
            />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
