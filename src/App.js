import React, { useState, useEffect } from "react";
import { FormHelperText } from "@material-ui/core";

import {
  ButtonBar,
  LoadingLogo,
  MainVideo,
  Render,
  VideoList,
  SearchBar
} from "./Components";
import { Layout } from "./Layouts";

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
    <Layout stylesClass="window">
      <Layout stylesClass="main-layout">
        {Object.keys(mainYoutubeVideo).length ? (
          <MainVideo video={mainYoutubeVideo} />
        ) : (
          <LoadingLogo />
        )}
        <Render renderIf={errorMessage.length}>
          <FormHelperText error={true} children={errorMessage} />
        </Render>
        <SearchBar
          setRelevantVideos={setRelevantVideos}
          setMainYoutubeVideo={setMainYoutubeVideo}
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
