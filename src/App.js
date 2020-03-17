import React, { Fragment, useState, useEffect } from "react";

import {
  ButtonBar,
  ErrorMessage,
  LoadingLogo,
  MainVideo,
  Render,
  VideoList,
  SearchBar
} from "./Components";

import { MainLayout, LandingLayout } from "./Layouts";

import "./App.css";

const App = () => {
  // Youtube Video IDs
  const [mainYoutubeVideo, setMainYoutubeVideo] = useState({});
  const [relevantVideos, setRelevantVideos] = useState([]);

  // Boolean to toggle main video
  const [displayMainYoutubeVideo, setDisplayMainYoutubeVideo] = useState(false);

  // Boolean to toggle relevant videos
  const [displayRelevantVideos, setDisplayRelevantVideos] = useState(false);

  // Show / Hide relevant videos, Adjust window
  const toggleDisplay = () => {
    if (displayRelevantVideos) {
      setDisplayRelevantVideos(false);
      window.scrollTo(0, 0);
    } else {
      setDisplayRelevantVideos(true);
      window.scrollTo(0, document.body.scrollHeight * 10);
    }
  };

  // Display error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Reset error messages on successful load
  useEffect(() => {
    setErrorMessage("");
  }, [relevantVideos, mainYoutubeVideo]);

  // Reset state to default
  const clearState = () => {
    setMainYoutubeVideo({});
    setRelevantVideos([]);
    setDisplayRelevantVideos(false);
    setDisplayMainYoutubeVideo(false);
  };

  return (
    <Fragment>
      <Render renderIf={!displayMainYoutubeVideo}>
        <LandingLayout>
          <MainLayout>
            <LoadingLogo />
            <SearchBar
              setRelevantVideos={setRelevantVideos}
              setMainYoutubeVideo={setMainYoutubeVideo}
              setDisplayMainYoutubeVideo={setDisplayMainYoutubeVideo}
              setErrorMessage={setErrorMessage}
            />
          </MainLayout>
        </LandingLayout>
      </Render>
      <Render renderIf={displayMainYoutubeVideo}>
        <MainLayout>
          <Render renderIf={displayMainYoutubeVideo}>
            <MainVideo video={mainYoutubeVideo} />
          </Render>
          <Render renderIf={errorMessage}>
            <ErrorMessage errorMessage={errorMessage} />
          </Render>
          <SearchBar
            setRelevantVideos={setRelevantVideos}
            setMainYoutubeVideo={setMainYoutubeVideo}
            setDisplayMainYoutubeVideo={setDisplayMainYoutubeVideo}
            setErrorMessage={setErrorMessage}
          />
          <Render renderIf={relevantVideos.length}>
            <ButtonBar
              toggleDisplay={toggleDisplay}
              displayRelevantVideos={displayRelevantVideos}
              clearState={clearState}
            />
          </Render>
          <Render renderIf={displayRelevantVideos}>
            <VideoList
              videos={relevantVideos}
              setMainYoutubeVideo={setMainYoutubeVideo}
            />
          </Render>
        </MainLayout>
      </Render>
    </Fragment>
  );
};

export default App;
