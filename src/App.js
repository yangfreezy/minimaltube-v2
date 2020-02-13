import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import {
  MainVideo,
  VideoList,
  SearchBar,
  LoadingLogo
} from "./Components/index";

import "./App.css";

const App = () => {
  const [mainYoutubeVideo, setMainYoutubeVideo] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [displayRelevantVideos, setDisplayRelevantVideos] = useState(false);

  useEffect(() => {}, [youtubeVideos, mainYoutubeVideo]);

  const toggleDisplay = () => {
    setDisplayRelevantVideos(!displayRelevantVideos);
  };
  const clearState = () => {
    setMainYoutubeVideo({});
    setYoutubeVideos([]);
    setDisplayRelevantVideos(false);
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
                {displayRelevantVideos ? "Hide" : "Show More"}
              </Button>
              <Button size="small" onClick={clearState}>
                Clear
              </Button>
            </div>
          ) : null}

          {youtubeVideos.length && displayRelevantVideos ? (
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
