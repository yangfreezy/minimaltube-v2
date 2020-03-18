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
  const [mainVideo, setMainVideo] = useState({});
  const [relevantVideos, setRelevantVideos] = useState([]);

  // Boolean to toggle main video
  const [showMainVideo, setShowMainVideo] = useState(false);

  // Boolean to toggle relevant videos
  const [showRelevantVideos, setShowRelevantVideos] = useState(false);

  // Show / Hide relevant videos, Adjust window
  const toggleRelevantVideos = () => {
    if (showRelevantVideos) {
      setShowRelevantVideos(false);
      window.scrollTo(0, 0);
    } else {
      setShowRelevantVideos(true);
    }
  };

  // Display error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Reset error messages on successful load
  useEffect(() => {
    setErrorMessage("");
  }, [relevantVideos, mainVideo]);

  // Reset state to default
  const clearState = () => {
    setMainVideo({});
    setRelevantVideos([]);
    setShowRelevantVideos(false);
    setShowMainVideo(false);
  };

  return (
    <Fragment>
      <Render renderIf={!showMainVideo}>
        <LandingLayout>
          <MainLayout>
            <LoadingLogo />
            <SearchBar
              setRelevantVideos={setRelevantVideos}
              setMainVideo={setMainVideo}
              setShowMainVideo={setShowMainVideo}
              setErrorMessage={setErrorMessage}
            />
          </MainLayout>
        </LandingLayout>
      </Render>
      <Render renderIf={showMainVideo}>
        <MainLayout>
          <Render renderIf={showMainVideo}>
            <MainVideo video={mainVideo} />
          </Render>
          <Render renderIf={errorMessage}>
            <ErrorMessage errorMessage={errorMessage} />
          </Render>
          <SearchBar
            setRelevantVideos={setRelevantVideos}
            setMainVideo={setMainVideo}
            setShowMainVideo={setShowMainVideo}
            setErrorMessage={setErrorMessage}
          />
          <Render renderIf={relevantVideos.length}>
            <ButtonBar
              toggleRelevantVideos={toggleRelevantVideos}
              showRelevantVideos={showRelevantVideos}
              clearState={clearState}
            />
          </Render>
          <Render renderIf={showRelevantVideos}>
            <VideoList videos={relevantVideos} setMainVideo={setMainVideo} />
          </Render>
        </MainLayout>
      </Render>
    </Fragment>
  );
};

export default App;
