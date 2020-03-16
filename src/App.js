import React, { useState, useEffect } from "react";

import {
  ButtonBar,
  ErrorMessage,
  LoadingLogo,
  MainVideo,
  Render,
  VideoList,
  SearchBar
} from "./Components";
import { Layout } from "./Layouts";

import "./App.css";

const App = () => {
  // Youtube Video IDs
  const [mainYoutubeVideo, setMainYoutubeVideo] = useState({});
  const [relevantVideos, setRelevantVideos] = useState([]);

  // Boolean to toggle main video
  const [displayMainYoutubeVideo, setDisplayMainYoutubeVideo] = useState(false);

  // Boolean to toggle relevant videos
  const [displayRelevantVideos, setDisplayRelevantVideos] = useState(false);

  // Show / Hide relevant videos
  const toggleDisplay = () => {
    if (relevantVideos.length) setDisplayRelevantVideos(!displayRelevantVideos);
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
    <Layout stylesClass="window">
      <Layout stylesClass="main-layout">
        <Render renderIf={displayMainYoutubeVideo}>
          <MainVideo video={mainYoutubeVideo} />
        </Render>
        <Render renderIf={!displayMainYoutubeVideo}>
          <LoadingLogo />
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
            showRelevantVideos={displayRelevantVideos}
            clearState={clearState}
          />
        </Render>
        <Render renderIf={displayRelevantVideos}>
          <VideoList
            videos={relevantVideos}
            setMainYoutubeVideo={setMainYoutubeVideo}
          />
        </Render>
      </Layout>
    </Layout>
  );
};

export default App;
