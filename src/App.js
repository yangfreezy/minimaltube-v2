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
  const [showRelevantVideos, setShowRelevantVideos] = useState(false);

  // Show / Hide relevant videos
  const toggleDisplay = () => {
    setShowRelevantVideos(!showRelevantVideos);
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
    setShowRelevantVideos(false);
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
        <Render renderIf={errorMessage.length}>
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
            showRelevantVideos={showRelevantVideos}
            clearState={clearState}
          />
        </Render>
        <Render renderIf={relevantVideos.length && showRelevantVideos}>
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
