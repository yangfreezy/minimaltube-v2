import React, { Fragment, useState, useEffect } from "react";

import { SearchBarContainer } from "./Containers";

import {
  ButtonBar,
  ErrorMessage,
  LoadingLogo,
  MainVideo,
  VideoList
} from "./Components";

import { MainLayout, LandingLayout } from "./Layouts";

import "./App.css";

export const App = () => {
  // Youtube Videos
  const [mainVideo, setMainVideo] = useState({});
  const [relevantVideos, setRelevantVideos] = useState([]);

  // Boolean to conditionally render main video components
  const [mainVideoLoaded, setMainVideoLoaded] = useState(false);

  useEffect(() => {
    Object.keys(mainVideo).length
      ? setMainVideoLoaded(true)
      : setMainVideoLoaded(false);
  }, [mainVideo]);

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
  };

  return (
    <Fragment>
      {mainVideoLoaded ? (
        <MainLayout>
          <MainVideo video={mainVideo} />
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          <SearchBarContainer
            setRelevantVideos={setRelevantVideos}
            setMainVideo={setMainVideo}
            setErrorMessage={setErrorMessage}
          />
          {relevantVideos.length && (
            <ButtonBar
              toggleRelevantVideos={toggleRelevantVideos}
              showRelevantVideos={showRelevantVideos}
              clearState={clearState}
            />
          )}
          {showRelevantVideos && (
            <VideoList videos={relevantVideos} setMainVideo={setMainVideo} />
          )}
        </MainLayout>
      ) : (
        <LandingLayout>
          <MainLayout>
            <LoadingLogo />
            <SearchBarContainer
              setRelevantVideos={setRelevantVideos}
              setMainVideo={setMainVideo}
              setErrorMessage={setErrorMessage}
            />
          </MainLayout>
        </LandingLayout>
      )}
    </Fragment>
  );
};
